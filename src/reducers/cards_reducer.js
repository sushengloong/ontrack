import { FETCH_CARDS, CREATE_CARD, UPDATE_CARD } from '../actions'

export default function(state = { cards: [] }, action) {
  let { cards } = state;
  let { card } = action;

  switch (action.type) {
    case FETCH_CARDS:
      return { ...state, cards: action.cards };
    case CREATE_CARD:
      card.id = cards.length + 1;
      return { ...state, cards: [...cards, card] };
    case UPDATE_CARD:
      cards = cards.map((c, _) => {
        if (c.id == card.id) {
          return { ...c, ...card };
        }
        return c;
      });
      return { ...state, cards };
    default:
      return state;
  }
}
