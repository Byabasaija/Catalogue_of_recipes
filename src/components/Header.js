import { Link } from 'react-router-dom';
import React from 'react';
import Search from '../containers/Search';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container-fluid">
      <span className="navbar-brand text-white pg-title" href="#">Catalogue of Recipes</span>
      <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon text-white" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">Home</Link>
          </li>
          <li>
            <Link className="nav-link text-white" to="/meals">Meals</Link>
          </li>
        </ul>
      </div>

      <div className="d-flex">
        <Search />
      </div>
    </div>
  </nav>
);

export default (Header);
