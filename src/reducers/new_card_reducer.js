import { NEW_CARD, CANCEL_NEW_CARD, CREATE_CARD, EDIT_CARD } from '../actions'

export default function(state = { showCardForm: false }, action) {
  switch (action.type) {
    case NEW_CARD:
    case EDIT_CARD:
      return { ...state, showCardForm: true };
    case CANCEL_NEW_CARD:
      return { ...state, showCardForm: false };
    default:
      return state;
  }
}
