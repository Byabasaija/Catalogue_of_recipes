import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Category = ({ category }) => (
  <div>
    <Link to={`/meals/${category.strCategory}`}>
      <img src={category.strCategoryThumb} alt={category.strCategory} />
      <div>
        <h3>
          {category.strCategory}
        </h3>
      </div>
    </Link>
  </div>
);

Category.propTypes = {
  category: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Category;
