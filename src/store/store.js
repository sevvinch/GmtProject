import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import cardReducer from '../reducers/card';
import wishReducer from '../reducers/Wish';

const rootReducer = combineReducers({
  card: cardReducer,
  wish: wishReducer,
});

const store = createStore(rootReducer);

export default store;
