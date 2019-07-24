import d3 from 'd3';

export function CircularProgress(element, settings) {
  const duration = settings.duration || 500;
  const w = settings.width || 200;
  const h = settings.height || w;
  const outerRadius = settings.outerRadius || w / 2;
  const innerRadius = settings.innerRadius || (w / 2) * (80 / 100);
  const range = settings.range || { min: 0, max: 100 };
	const fill = settings.fill || '#F20100';
	
  const svg = d3
    .select(element)
    .append('svg')
    .attr('width', w)
		.attr('height', h);
		
		svg
		.append('defs')
		.append('marker')
		.attr({
			id: 'marker_stub',
			markerHeight: 19,
			markerWidth: 10,
			markerUnits: 'strokeWidth',
			orient: 'auto',
			refX: 0,
			refY: -10,
			viewBox: '-7 1 8 3'
		})
		.append('path')
		.attr('d','M 0,0 m -1,-5 L 1,-5 L 1,5 L -1,5 Z')
		.attr('fill','#d62728');

  const arc = d3.svg
    .arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

  const paths = function(numerators) {
    return numerators.map(function(numerator) {
      const degrees =
        ((numerator - range.min) / (range.max - range.min)) * 360.0;
      const radians = degrees * (Math.PI / 180);
      const data = { value: numerator, startAngle: 0, endAngle: radians };
      return data;
    });
  };

  const g = svg.append('g').attr('transform', `translate(${w / 2}, ${h / 2})`);

  //initialise the control
  g.datum([0])
    .selectAll('path')
    .data(paths)
    .enter()
		.append('path')
		.attr('transform', ' rotate(180)')
		.attr('fill', fill)
		.attr('marker-end','url(#marker_stub)')
		.attr('marker-start','url(#marker_stub)')
    .attr('d', arc)
    .each(function(d) {
      this._current = d;
		});



  svg
    .datum([0])
    .selectAll('text')
    .data(paths)
    .enter()
    .append('text')
    .attr('transform', `translate(${w / 2}, ${h / 2})`)
    .attr('text-anchor', 'middle')
    .attr('fill', fill)
    .style('font-size', '4rem')
    .text(d => d.value);

  this.update = function(percent) {
    g.datum(percent)
      .selectAll('path')
      .data(paths)
      .transition()
      .duration(duration)
      .attrTween('d', arcTween);
    svg
      .datum(percent)
      .selectAll('text')
      .data(paths)
      .text(function(d) {
        return d.value;
      });
  };

  const arcTween = function(initial) {
    const interpolate = d3.interpolate(this._current, initial);
    this._current = interpolate(0);
    return function(t) {
      return arc(interpolate(t));
    };
  };
}
