import { FETCH_CARDS, CREATE_CARD } from '../actions'

export default function(state = { cards: [] }, action) {
  switch (action.type) {
    case FETCH_CARDS:
      return { ...state, cards: action.cards };
    case CREATE_CARD:
      const { cards } = state;
      let card = action.card;
      card.id = cards.length + 1;
      return { ...state, cards: [...cards, card] };
    default:
      return state;
  }
}
