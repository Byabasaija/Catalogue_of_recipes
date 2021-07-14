import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import Category from '../components/Category';

const Categories = ({ categories }) => (
  <div className="container">
    <h1 className="pg-title">Browse Categories</h1>
    <div className="grid grid-column grid-gap-1/5">
      {categories ? categories.map((category) => <Category key={category.idCategory} category={category} />) : 'No categories'}
    </div>
  </div>
);

Categories.defaultProps = {
  categories: [],
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(Categories);
