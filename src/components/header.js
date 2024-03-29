import React from 'react';
import { Link } from 'react-router';

// import HeaderLinks from './header-links';

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
          <li className={ history.isActive('/randomizer') ? 'active' : '' }>
            <Link
              title="Generate a random prompt with subject and technique"
              to="/randomizer">Randomizer!</Link>
          </li>
          <li className={ history.isActive('/lists') ? 'active' : '' }>
            <Link
              title="Choose a list of prompts to work off of"
              to="/lists">Lists</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
