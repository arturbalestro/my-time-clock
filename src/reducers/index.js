import actionTypes from '../actions/types';

const reducer = (state, action) => {
  if (typeof state === 'undefined') return 0;

  if (action.type === actionTypes.GET_NEWS) {
    return { ...state };
  } else if (action.type === actionTypes.NEWS_RECEIVED) {
    return { ...state, news: action.json[0] };
  }

  return state;
};

export default reducer;
