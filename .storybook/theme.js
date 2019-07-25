import { create } from '@storybook/theming';

// DB logo as base64 encoded SVG
const vwLogo = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'60\' height=\'60\' viewBox=\'0 0 60 60\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cpath d=\'M29.973.258c16.355 0 29.695 13.336 29.695 29.719 0 16.332-13.34 29.691-29.695 29.691-16.356 0-29.72-13.36-29.72-29.691C.254 13.594 13.618.254 29.974.254\' fill=\'%233266bc\'/%3E%3Cpath d=\'M29.973 4.027c14.265 0 25.925 11.66 25.925 25.95 0 14.261-11.66 25.898-25.925 25.898-14.262 0-25.922-11.637-25.922-25.898 0-14.29 11.66-25.95 25.926-25.95zm-17.352 12l9.297 24.121 3.406-8.808h8.934l3.406 8.808 9.395-24.41a22.257 22.257 0 0 0-5.891-5.015l-6.52 17.96h-9.203l-6.547-18.035a22.463 22.463 0 0 0-6.277 5.38zM50.81 22.09L40.223 49.715c7.105-3.723 12-11.172 12-19.738 0-2.778-.489-5.43-1.414-7.887zM35.598 51.516l-.075-.559-5.742-14.898-5.746 14.898-.023.461c1.898.535 3.894.8 5.96.8a22.58 22.58 0 0 0 5.626-.702zm-16.309-2.043L8.97 22.574a21.874 21.874 0 0 0-1.266 7.403c0 8.37 4.672 15.722 11.586 19.496zm10.684-41.77c1.949 0 3.87.246 5.699.73l-5.625 15.555L24.402 8.41a22.155 22.155 0 0 1 5.57-.707\' fill=\'%23fff\'/%3E%3C/g%3E%3C/svg%3E';

const vwTheme = create({
  base: 'light',
  colorPrimary: '#ffff00',
  colorSecondary: '#00B0F0',
  appBg: '#fbfbfd',
  textColor: '#3c414b',
  textInverseColor: '#ffffff',
  appBorderRadius: 4,
  fontBase: '"DB Sans", sans-serif',
  barTextColor: '#3c414b',
  barBg: '#fbfbfd',
  brandTitle: 'DBX',
  brandImage: vwLogo,
});

export default vwTheme;
