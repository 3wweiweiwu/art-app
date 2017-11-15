import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav>
    <NavLink to="/" activeClassName="active">
      Home
    </NavLink>
    {'|'}
    <NavLink to="/prestaging" activeClassName="active">
      Deployment
    </NavLink>
    {'|'}
    <NavLink to="/about" activeClassName="active">
      About
    </NavLink>

    {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul> */}
  </nav>
);

export default Header;
