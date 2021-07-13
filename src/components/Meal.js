import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const Meal = ({ meal }) => (
  <div>
    <Link to={`/meal/${meal.idMeal}`}>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <div>
        <p>
          <span>Serves</span>
          <span>5</span>
          <span>|</span>
          <span>Prep time</span>
          <span>20 mins</span>
        </p>
        <h3>
          {meal.strMeal}
        </h3>
      </div>
    </Link>
  </div>
);

Meal.propTypes = {
  meal: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Meal;
