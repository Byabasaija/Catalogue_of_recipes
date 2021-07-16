import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Header = ({ categories }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container">
      <span className="navbar-brand text-white pg-title" href="#">Catalogue of Recipes</span>
      <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon text-white" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">Home</Link>
          </li>
          <li className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle text-white"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categories
            </span>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {categories.map((category) => (
                <li key={category.strCategory}>
                  <Link to={`/meals/${category.strCategory}`} className="dropdown-item">
                    {category.strCategory}
                  </Link>
                </li>
              ))}

            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
Header.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  categories: [],
};
const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(Header);
