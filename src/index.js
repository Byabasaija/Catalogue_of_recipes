import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import App from './App';
import configureStore from './redux/configureStore';

const state = {
  categories: [
    {
      strCategory: 'Beef',
      strCategoryThumb: 'https://www.themealdb.com/images/category/beef.png',
    },
    {

      strCategory: 'Chicken',
      strCategoryThumb: 'https://www.themealdb.com/images/category/beef.png',
    },
    {
      idCategory: '3',
      strCategory: 'Dessert',
      strCategoryThumb: 'https://www.themealdb.com/images/category/dessert.png',
    },
    {
      idCategory: '4',
      strCategory: 'Lamb',
      strCategoryThumb: 'https://www.themealdb.com/images/category/lamb.png',
    },
    {
      idCategory: '5',
      strCategory: 'Miscellaneous',
      strCategoryThumb: 'https://www.themealdb.com/images/category/miscellaneous.png',
      strCategoryDescription: "General foods that don't fit into another category",
    },
    {
      idCategory: '6',
      strCategory: 'Pasta',
      strCategoryThumb: 'https://www.themealdb.com/images/category/pasta.png',
    },
    {
      idCategory: '7',
      strCategory: 'Pork',
      strCategoryThumb: 'https://www.themealdb.com/images/category/pork.png',
    },
    {
      idCategory: '9',
      strCategory: 'Side',
      strCategoryThumb: 'https://www.themealdb.com/images/category/side.png',
    },
    {
      idCategory: '10',
      strCategory: 'Starter',
      strCategoryThumb: 'https://www.themealdb.com/images/category/starter.png',
    },
    {
      idCategory: '11',
      strCategory: 'Vegan',
      strCategoryThumb: 'https://www.themealdb.com/images/category/vegan.png',
    },
    {
      idCategory: '12',
      strCategory: 'Vegetarian',
      strCategoryThumb: 'https://www.themealdb.com/images/category/vegetarian.png',
    },
    {
      idCategory: '14',
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
