import axios from "axios";
import endpoints from "../../endpoints";
import bookings from "../actions/bookings";
import { extractMessage } from "../../helpers/utils";

export const fetchBookingsToIgnore = id => {
  return dispatch => {
    dispatch({
      type: bookings.FIND_DATES_TO_IGNORE_REQUEST
    });
    axios({
      url: endpoints.FIND_DATES_TO_IGNORE,
      method: "POST",
      data: {
        relevant: true,
        id,
        recent: true
      }
    })
      .then(({ data }) => {
        dispatch({
          type: bookings.FIND_DATES_TO_IGNORE_SUCCESSFUL,
          datesToIgnore: data.datesToIgnore
        });
      })
      .catch(res => {
        dispatch({
          type: bookings.FIND_DATES_TO_IGNORE_FAILED,
          message: extractMessage(res)
        });
      });
  };
};
