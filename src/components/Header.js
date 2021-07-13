import { Link } from 'react-router-dom';
import React from 'react';
import Search from '../containers/Search';

const Header = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>

    <div>
      <Search />
    </div>
  </nav>
);

export default Header;
