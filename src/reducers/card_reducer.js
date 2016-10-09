import { NEW_CARD, CANCEL_NEW_CARD, CREATE_CARD, EDIT_CARD, DELETE_CARD } from '../actions'

export default function(state = { showCardForm: false, showConfirmDelete: false, card: null }, action) {
  switch (action.type) {
    case NEW_CARD:
      return { ...state, showCardForm: true, card: null };
    case EDIT_CARD:
      return { ...state, showCardForm: true, card: action.card };
    case CANCEL_NEW_CARD:
      return { ...state, showCardForm: false };
    case DELETE_CARD:
      return { ...state, showConfirmDelete: true, card: action.card }
    default:
      return state;
  }
}
