import React from "react";
import "canvas-gauges";

const Gauge = () => {
  return (
    <div>
      {/* <RadialGauge
        units="°C"
        title="Temperature"
        value={50}
        minValue={0}
        maxValue={50}
        majorTicks={["0", "5", "15", "20", "25", "30", "35", "40", "45", "50"]}
        minorTicks={2}
      /> */}
      
<canvas data-type="radial-gauge"
        data-width="400"
        data-height="400"
        data-units="Km/h"
        data-title="false"
        data-value="33.77"
        data-animate-on-init="true"
        data-animated-value="true"
        data-min-value="0"
        data-max-value="220"
        data-major-ticks="0,20,40,60,80,100,120,140,160,180,200,220"
        data-minor-ticks="2"
        data-stroke-ticks="false"
        data-highlights='[
            { "from": 0, "to": 50, "color": "rgba(0,255,0,.15)" },
            { "from": 50, "to": 100, "color": "rgba(255,255,0,.15)" },
            { "from": 100, "to": 150, "color": "rgba(255,30,0,.25)" },
            { "from": 150, "to": 200, "color": "rgba(255,0,225,.25)" },
            { "from": 200, "to": 220, "color": "rgba(0,0,255,.25)" }
        ]'
        data-color-plate="transparent"
        data-color-major-ticks="#f5f5f5"
        data-color-minor-ticks="#ddd"
        data-color-title="#fff"
        data-color-units="#ccc"
        data-color-numbers="#eee"
        data-color-needle-start="rgba(240, 128, 128, 1)"
        data-color-needle-end="rgba(255, 160, 122, .9)"
        data-value-box="true"
        data-animation-rule="bounce"
        data-animation-duration="500"
        data-border-outer-width="3"
        data-border-middle-width="3"
        data-border-inner-width="3"
></canvas>
    </div>
  );
};

Gauge.propTypes = {};

export default Gauge;
