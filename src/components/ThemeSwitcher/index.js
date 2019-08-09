import React from 'react';
import { ReactComponent as SwitchIcon } from '../../assets/switch.svg';

const ThemeSwitcher = ({ toggleTheme, currentTheme }) => (
  <button onClick={toggleTheme} className="fl-theme-switcher btn-icon">
    <SwitchIcon className="fl-theme-switcher__icon" />
    {currentTheme}
  </button>
);

export { ThemeSwitcher };
