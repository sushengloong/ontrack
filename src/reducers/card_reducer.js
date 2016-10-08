import { NEW_CARD, CANCEL_NEW_CARD, CREATE_CARD, EDIT_CARD } from '../actions'

export default function(state = { showCardForm: false, card: null }, action) {
  switch (action.type) {
    case NEW_CARD:
      return { ...state, showCardForm: true, card: null };
    case EDIT_CARD:
      const { card } = action
      return { ...state, showCardForm: true, card: card };
    case CANCEL_NEW_CARD:
      return { ...state, showCardForm: false };
    default:
      return state;
  }
}
