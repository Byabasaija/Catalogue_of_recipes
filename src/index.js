import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import App from './App';
import configureStore from './configureStore';

const state = {
  categories: [
    {
      strCategory: 'Pork',
      strCategoryThumb: 'https://www.themealdb.com/images/category/pork.png',
    },
    {
      strCategory: 'Vegetarian',
      strCategoryThumb: 'https://www.themealdb.com/images/category/vegetarian.png',
    },
    {
      strCategory: 'Beef',
      strCategoryThumb: 'https://www.themealdb.com/images/category/beef.png',
    },
    {

      strCategory: 'Chicken',
      strCategoryThumb: 'https://www.themealdb.com/images/category/chicken.png',
    },
    {
      strCategory: 'Dessert',
      strCategoryThumb: 'https://www.themealdb.com/images/category/dessert.png',
    },
    {
      strCategory: 'Lamb',
      strCategoryThumb: 'https://www.themealdb.com/images/category/lamb.png',
    },
    {
      strCategory: 'Miscellaneous',
      strCategoryThumb: 'https://www.themealdb.com/images/category/miscellaneous.png',
      strCategoryDescription: "General foods that don't fit into another category",
    },
    {
      strCategory: 'Pasta',
      strCategoryThumb: 'https://www.themealdb.com/images/category/pasta.png',
    },
    {
      strCategory: 'Side',
      strCategoryThumb: 'https://www.themealdb.com/images/category/side.png',
    },
    {
      strCategory: 'Starter',
      strCategoryThumb: 'https://www.themealdb.com/images/category/starter.png',
    },
    {
      strCategory: 'Vegan',
      strCategoryThumb: 'https://www.themealdb.com/images/category/vegan.png',
    },
    {
      strCategory: 'Goat',
      strCategoryThumb: 'https://www.themealdb.com/images/category/goat.png',
    },
  ],
};

const store = configureStore(state);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
