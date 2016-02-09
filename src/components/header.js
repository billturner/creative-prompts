import React from 'react';
import { Link } from 'react-router';

export default (history) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link
            to="/"
            title="Return to the home page"
            className="navbar-brand">Sketching Prompts</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <a href="#">Lists</a>
          </li>
          <li className={ history.isActive('/randomizer') ? 'active' : '' }>
            <Link
              title="Generate a random prompt with subject and technique"
              to="/randomizer">Randomizer!</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li className={ history.isActive('/about') ? 'active' : '' }>
            <Link
              title="Find out about this site"
              to="/about">About</Link>
          </li>
          <li className={ history.isActive('/contact') ? 'active' : '' }>
            <Link
              title="Contact the creator of this site"
              to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
