import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchMealById } from '../API/api';
import * as actionsType from '../redux/actions/actionTypes';

const MealDetail = ({ meal: { status, meal, error }, dispatch }) => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id !== meal.idMeal) {
      dispatch(fetchMealById(id));
    }
  }, []);

  if (status === actionsType.LOADING_MEAL) {
    return <div>Loading ...</div>;
  }

  if (status === actionsType.ERROR_MEAL) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  const renderIngrediants = (meal) => {
    const ingrediants = [];
    for (let index = 1; index <= 20; index += 1) {
      const ingrediant = meal[`strIngredient${index}`];
      if (ingrediant) {
        const measure = meal[`strMeasure${index}`];
        const element = (
          <li key={index}>
            <span>
              {measure}
            </span>
            <span>-</span>
            <span>
              {ingrediant}
            </span>
          </li>
        );
        ingrediants.push(element);
      }
    }
    return ingrediants;
  };

  const renderInstructions = (instructions) => {
    if (instructions) {
      const list = instructions.split(new RegExp(/\n/)).filter((item) => item.length > 1);
      return (
        <ul>
          {/* eslint-disable-next-line */}
          {list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      );
    }
    return instructions;
  };

  return (
    <div className="container">
      <div className="">
        <h3 className="heading">{meal.strMeal}</h3>
        <div className="d-flex justify-content-evenly">
          <img src={meal.strMealThumb} alt={meal.strMeal} className="img-fluid pt-4 img" />
          <div className="ingredients ">
            <h4 className="heading">Ingredients</h4>
            <ul className="items">
              <li className="">
                {renderIngrediants(meal)}
              </li>
            </ul>
          </div>
        </div>
        <div className="instructions">
          <h4 className="heading">Instructions</h4>
          <ul className="items">
            {renderInstructions(meal.strInstructions)}
          </ul>
        </div>
      </div>
    </div>
  );
};

MealDetail.propTypes = {
  meal: PropTypes.shape({
    status: PropTypes.string.isRequired,
    error: PropTypes.string,
    meal: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  meal: state.meal,
});

export default connect(mapStateToProps)(MealDetail);
