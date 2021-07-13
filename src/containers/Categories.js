import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

import Category from '../components/Category';

const Categories = ({ categories }) => (
  <div PropTypes>
    {categories ? categories.map((category) => <Category key={category.idCategory} category={category} />) : 'No categories'}
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
