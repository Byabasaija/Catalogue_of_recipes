import category from '../../redux/reducers/category';
import * as actionsType from '../../redux/actions/actionTypes';

describe('category reducer', () => {
  test('should return initial state', () => {
    expect(category(undefined, {})).toEqual(null);
  });

  test('should return the category from action', () => {
    const action = {
      type: actionsType.CHANGE_CATEGORY,
      category: 'category',
    };
    expect(category(null, action)).toEqual('category');
  });
});
