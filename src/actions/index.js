import axios from 'axios';

export const FETCH_CARDS = 'FETCH_CARDS';
export const NEW_CARD = 'NEW_CARD';
export const CANCEL_NEW_CARD = 'CANCEL_NEW_CARD';
export const CREATE_CARD = 'CREATE_CARD';

export function fetchCards() {
  return (dispatch) => {
    axios.get('http://localhost:8080/api/cards')
      .then((response) => {
        dispatch({
          type: FETCH_CARDS,
          cards: response.data.cards
        });
      })
      .catch((error) => console.log(error));
  }
}

export function newCard() {
  return {
    type: NEW_CARD
  };
}

export function cancelNewCard() {
  return {
    type: CANCEL_NEW_CARD
  };
}

export function createCard(props) {
  return (dispatch) => {
    dispatch({
      type: CREATE_CARD,
      card: props
    });
    dispatch(cancelNewCard());
  };
}
