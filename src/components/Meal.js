import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Meal = ({ meal }) => (
  <div className="card meal-card">

    <Link to={`/meal/${meal.idMeal}`} className="link">
      <img src={meal.strMealThumb} alt={meal.strMeal} className="card-img-top" />
      <div>
        <p className="card-subtitle mb-2 text-muted">
          <span className="p-2">View</span>
          <span>Details</span>
        </p>
        <h5 className="card-title text-dark">
          {meal.strMeal}
        </h5>
      </div>
    </Link>

  </div>
);

Meal.propTypes = {
  meal: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Meal;
