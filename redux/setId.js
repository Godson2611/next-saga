import { SET_ID } from "./action";

const cardId = (state = "", action) => {
  switch (action.type) {
    case SET_ID:
      return action.data;
    default:
      return state;
  }
};

export default cardId;
