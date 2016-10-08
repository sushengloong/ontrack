import axios from 'axios';

export const FETCH_CARDS = 'FETCH_CARDS';
export const NEW_CARD = 'NEW_CARD';
export const CANCEL_NEW_CARD = 'CANCEL_NEW_CARD';
export const CREATE_CARD = 'CREATE_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const UPDATE_CARD = 'UPDATE_CARD';

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

export function editCard(card) {
  return {
    type: EDIT_CARD,
    card: card
  };
}

export function cancelNewCard() {
  return {
    type: CANCEL_NEW_CARD
  };
}

export function saveCard(props) {
  if (props.id) {
    return _updateCard(props);
  } else {
    return _createCard(props);
  }
}

function _createCard(props) {
  return (dispatch) => {
    const data = new FormData();
    data.append('title', props.title);
    data.append('status', props.status);
    data.append('priority', props.priority);
    data.append('assignee', props.assignee);

    axios.post('http://localhost:8080/api/cards', data)
      .then((response) => {
        dispatch({
          type: CREATE_CARD,
          card: props
        });
        dispatch(cancelNewCard());
      })
      .catch((error) => console.log(error));
  };
}

function _updateCard(props) {
  return (dispatch) => {
    const data = new FormData();
    const { id } = props;
    data.append('id', id);
    data.append('title', props.title);
    data.append('status', props.status);
    data.append('priority', props.priority);
    data.append('assignee', props.assignee);

    axios.post(`http://localhost:8080/api/cards/${id}`, data)
      .then((response) => {
        dispatch({
          type: UPDATE_CARD,
          card: props
        });
        dispatch(cancelNewCard());
      })
      .catch((error) => console.log(error));
  };
}
