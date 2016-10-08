import { combineReducers } from 'redux';
import CardsReducer from './cards_reducer';
import CardReducer from './card_reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  cards: CardsReducer,
  card: CardReducer,
  form: formReducer,
});

export default rootReducer;
