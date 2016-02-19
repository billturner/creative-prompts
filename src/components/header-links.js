import React from 'react';
import { Link } from 'react-router';

export default (history) => {
  return (
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
  );
};
