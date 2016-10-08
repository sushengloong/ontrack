import { combineReducers } from 'redux';
import CardsReducer from './cards_reducer';
import NewCardReducer from './new_card_reducer';
import EditCardReducer from './edit_card_reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  cards: CardsReducer,
  newCard: NewCardReducer,
  editCard: EditCardReducer,
  form: formReducer,
});

export default rootReducer;
