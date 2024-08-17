import { createStore, combineReducers } from 'redux';
import gameReducer from '../reducers/gameReducer'; // Import your reducer here

const rootReducer = combineReducers({
  game: gameReducer,
});

const store = createStore(rootReducer);

export default store;
