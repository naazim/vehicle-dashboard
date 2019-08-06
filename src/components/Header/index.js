import React from 'react';
import { User } from '../User';
import { ThemeSwitcher } from '../ThemeSwitcher';

const Header = ({ toggleTheme, currentTheme }) => (
  <div className="fl-header">
    <ThemeSwitcher toggleTheme={toggleTheme} currentTheme={currentTheme} />
    <User />
  </div>
);

export { Header };
