export const ADD_CARDS = "ADD_CARDS";
export const CARD = "CARD";
export const CARD_LIST = "CARD_LIST";
export const CARD_LIST_ID = "CARD_LIST_ID";
export const SET_ID = "SET_ID";

export const setId = (value) => ({
  type: SET_ID,
  payload: value,
});

// export const setCards = (value) => ({
//   type: ADD_CARDS,
//   payload: value,
// });

// export const setCard = (value) => ({
//   type: CARD,
//   payload: value,
// });

export const setCardsList = () => ({
  type: CARD_LIST,
});

export const setCardsId = () => ({
  type: CARD_LIST_ID,
});
