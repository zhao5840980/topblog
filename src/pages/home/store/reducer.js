import * as constants from './constants';
import { fromJS } from 'immutable';
const defaultState = fromJS({
  articles: []
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_ALL_ARCITLES:
      return state.set('articles', action.data);
    default:
      return state;
  }
};
