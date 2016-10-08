import { EDIT_CARD } from '../actions'

export default function(state = { card: null }, action) {
  switch (action.type) {
    case EDIT_CARD:
      const { card } = action
      return { ...state, card };
    default:
      return state;
  }
}
