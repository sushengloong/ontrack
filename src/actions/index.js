export const NEW_CARD = 'NEW_CARD';
export const CANCEL_NEW_CARD = 'CANCEL_NEW_CARD';
export const CREATE_CARD = 'CREATE_CARD';

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
  return {
    type: CREATE_CARD,
    card: props
  };
}
