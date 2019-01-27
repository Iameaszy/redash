import auth from "./auth";
import modal from "./modals";
import currency from "./currency";
import listing from "./listing";
import booking from "./booking";

import { combineReducers } from "redux";

export default combineReducers({
  auth,
  modal,
  currency,
  listing,
  booking
});
