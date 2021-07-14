import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React from 'react';

const Category = ({ category }) => (
  <div className="card meal-card">
    <Link to={`/meals/${category.strCategory}`} className="link">
      <img className="card-img-top" src={category.strCategoryThumb} alt={category.strCategory} />
      <div className="">
        <p className="card-subtitle mb-2 text-muted">
          <span className="p-2">Tasty</span>
          <span>Recipes</span>
        </p>
        <h3 className="card-title p-2 text-dark">
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
