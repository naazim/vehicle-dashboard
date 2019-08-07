import React from 'react';
import clsx from 'clsx';
import { ReactComponent as SwitchIcon } from '../../assets/switch.svg';

const ThemeSwitcher = ({ toggleTheme, currentTheme }) => (
  <button
    onClick={toggleTheme}
    className={clsx(
      'fl-theme-switcher btn-icon',
      `fl-theme-switcher--${currentTheme}`
    )}
  >
    <SwitchIcon className="fl-theme-switcher__icon" />
    {currentTheme}
  </button>
);

export { ThemeSwitcher };
