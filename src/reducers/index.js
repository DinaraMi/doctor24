import { combineReducers } from 'redux';
import { likedCardsReducer, showLikedOnlyReducer, fetchCardsReducer } from '../utils/reducers';

const rootReducer = combineReducers({
  likedCards: likedCardsReducer,
  showLikedOnly: showLikedOnlyReducer,
  cards: fetchCardsReducer,
});

export default rootReducer;
