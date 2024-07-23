import { combineReducers } from "redux";
import cardData from "./reducer";
import card from "./cardReducer";
import cardId from "./setId";

export const rootReducers = combineReducers({
  cardData,
  card: card,
  cardId,
});
