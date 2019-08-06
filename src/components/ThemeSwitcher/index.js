import React from 'react';
import clsx from 'clsx';
import { ReactComponent as SwitchIcon } from '../../assets/switch.svg';

const ThemeSwitcher = ({ toggleTheme, currentTheme }) => {
  const theme = currentTheme === 'dark' ? 'light' : 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={clsx(
        'fl-theme-switcher btn-icon',
        `fl-theme-switcher--${theme}`
      )}
    >
      <SwitchIcon className="fl-theme-switcher__icon" />
      {theme}
    </button>
  );
};

export { ThemeSwitcher };
