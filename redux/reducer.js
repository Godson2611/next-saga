import { ADD_CARDS } from "./action";

const cardData = (state = [], action) => {
  switch (action.type) {
    case ADD_CARDS:
      return [...(action.data || [])];
    default:
      return state;
  }
};

export default cardData;
