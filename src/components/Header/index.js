import React from 'react';
import {style} from './index.scss';

const Header = ({}) => {

    return (
        <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    );
};

Header.propTypes = {

};

export default Header;
