import { CREATE_CARD } from '../actions'

export default function(state = { cards: [] }, action) {
  switch (action.type) {
    case CREATE_CARD:
      const { cards } = state;
      let card = action.card;
      card.id = cards.length + 1;
      return { ...state, cards: [...cards, card] };
    default:
      return state;
  }
}
