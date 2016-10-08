import { FETCH_CARDS, CREATE_CARD, UPDATE_CARD } from '../actions'
import _ from 'lodash';

export default function(state = { cards: [] }, action) {
  switch (action.type) {
    case FETCH_CARDS:
      return { ...state, cards: action.cards };
    case CREATE_CARD:
      const { cards } = state;
      let card = action.card;
      card.id = cards.length + 1;
      return { ...state, cards: [...cards, card] };
    case UPDATE_CARD:
    default:
      return state;
  }
}
