import bookingActions from "../actions/bookings";
import moment from "moment";

const init = {
  action: "",
  message: "",
  datesToIgnore: []
};
export default (state = init, payload) => {
  switch (payload.type) {
    case bookingActions.FIND_DATES_TO_IGNORE_REQUEST:
      return {
        ...state,
        action: bookingActions.FIND_DATES_TO_IGNORE_REQUEST
      };

    case bookingActions.FIND_DATES_TO_IGNORE_FAILED:
      return {
        ...state,
        action: bookingActions.FIND_DATES_TO_IGNORE_FAILED,
        message: payload.message
      };
    case bookingActions.FIND_DATES_TO_IGNORE_SUCCESSFUL:
      return {
        ...state,
        action: bookingActions.FIND_DATES_TO_IGNORE_SUCCESSFUL,
        datesToIgnore: payload.datesToIgnore.map(d => {
          d = moment(d);
          return d;
        })
      };

    default:
      return state;
  }
};
