import { CARD } from "./action";

const card = (state = "", action) => {
  switch (action.type) {
    case CARD:
      return action.data;
    default:
      return state;
  }
};

export default card;
