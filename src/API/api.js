import {
  loadingMeal, errorMeal, successMeal, loadingMeals, errorMeals, successMeals,
} from '../redux/actions/index';

export const API = {
  BASE_URL: 'https://www.themealdb.com/api/json/v1/1',
  FILTER_ENDPOINT: 'filter.php',
  LOOKUP_ENDPOINT: 'lookup.php',
  SEARCH_ENDPOINT: 'search.php',
};

const fetchMeals = async (category) => {
  const url = `${API.BASE_URL}/${API.FILTER_ENDPOINT}/?c=${category}`;
  const response = await fetch(url);

  if (response.status === 200) {
    const data = await response.json();
    return data;
  }

  throw Error(404);
};

const fetchSearchMeals = async (query) => {
  const url = `${API.BASE_URL}/${API.SEARCH_ENDPOINT}/?s=${query}`;
  const response = await fetch(url);

  if (response.status === 200) {
    const data = await response.json();
    return data;
  }

  throw Error(404);
};

const fetchMeal = async (id) => {
  const url = `${API.BASE_URL}/${API.LOOKUP_ENDPOINT}/?i=${id}`;
  const response = await fetch(url);

  if (response.status === 200) {
    const data = await response.json();
    return data;
  }

  throw Error(404);
};

const fetchMealsByCategory = (category) => async (dispatch) => {
  dispatch(loadingMeals());
  const response = fetchMeals(category);
  try {
    const data = await response;
    return dispatch(successMeals(data.meals));
  } catch (e) {
    return dispatch(errorMeals('Error while fetching data.'));
  }
};

const searchMeals = (query) => async (dispatch) => {
  dispatch(loadingMeals());
  const response = fetchSearchMeals(query);
  try {
    const data = await response;
    if (data.meals) {
      return dispatch(successMeals(data.meals));
    }
    return dispatch(errorMeals(`There is no meal with name: ${query}`));
  } catch (e) {
    return dispatch(errorMeals('Error while fetching data.'));
  }
};

const fetchMealById = (id) => async (dispatch) => {
  dispatch(loadingMeal());
  const response = fetchMeal(id);
  try {
    const data = await response;
    return dispatch(successMeal(data.meals[0]));
  } catch (e) {
    return dispatch(errorMeal('Error while fetching data.'));
  }
};

export { fetchMealsByCategory, searchMeals, fetchMealById };
