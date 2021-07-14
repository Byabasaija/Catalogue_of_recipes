import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as actionsType from '../redux/actions/actionTypes';
import Meal from '../components/Meal';
import { fetchMealsByCategory } from '../API/api';
import { changeCategory } from '../redux/actions/index';
import '../index.css';

const Meals = ({
  meals: { meals, status, error }, fetchMealsByCategory, category, changeCategory,
}) => {
  const { categoryType } = useParams();

  useEffect(() => {
    changeCategory(categoryType);
    if (status === actionsType.IDLE_MEALS || categoryType) {
      fetchMealsByCategory(categoryType || 'vegetarian');
    }
  }, [category]);

  if (status === actionsType.LOADING_MEALS) {
    return <div className="text-white">Loading ...</div>;
  }

  if (status === actionsType.ERROR_MEALS) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="container">
      <div className="grid grid-column grid-gap-1/5">
        {meals && meals.map((meal) => <Meal key={meal.idMeal} meal={meal} />)}
      </div>
    </div>
  );
};

Meals.defaultProps = {
  category: 'vegeterian',
};

Meals.propTypes = {
  meals: PropTypes.shape({
    status: PropTypes.string.isRequired,
    error: PropTypes.string,
    meals: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  }).isRequired,
  category: PropTypes.string,
  changeCategory: PropTypes.func.isRequired,
  fetchMealsByCategory: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  meals: state.meals,
  category: state.category,
});

const mapDispatchToProps = (dispatch) => ({
  changeCategory: (category) => dispatch(changeCategory(category)),
  fetchMealsByCategory: (category) => dispatch(fetchMealsByCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Meals);
