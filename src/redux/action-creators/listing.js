import axios from "axios";
import endpoints from "../../endpoints";
import listing from "../actions/listing";
import { extractMessage } from "../../helpers/utils";
import { retrieveToken } from "../../helpers/token";

export const find = (isAuthenticated, from) => {
  let headers = {};

  if (isAuthenticated && from === "dashboard") {
    headers.tertiary_authorization =
      "ej0rf1jgvirv0j4e239b-nfj0r1j93rj-3257v-k35d-ls1325831-kxr5utghgt72hg7h2-8tfj8jh5g29-8hv82q-j38gv3-hfh327ghvn7-jf8efq-2jf-qjf8q-3g9";
  }

  headers.secondary_authorization =
    "asosjfeoarfgjrifgewpfofk329130293edhj3289r09213rjfijjq09";
  headers.authorization = retrieveToken();

  return dispatch => {
    dispatch({ type: listing.FIND_LISTINGS_REQUEST });

    axios({
      url: endpoints.FIND_LISTINGS,
      method: "GET",
      headers
    })
      .then(res => {
        dispatch({
          type: listing.FIND_LISTINGS_SUCCESSFUL,
          listings: res.data
        });
      })
      .catch(res => {
        dispatch({
          type: listing.FIND_LISTINGS_FAILED,
          message: extractMessage(res)
        });
      });
  };
};

export const find_public = (query = "", advanced = false) => {
  let url = `${
    advanced === false
      ? endpoints.FIND_PUBLIC_LISTINGS
      : endpoints.FIND_PUBLIC_LISTINGS_ADVANCED
  }${query !== "" ? "limit=6&" + query : "limit=6"}`;

  return dispatch => {
    dispatch({ type: listing.FIND_PUBLIC_LISTINGS_REQUEST });

    axios({
      url,
      method: "GET"
    })
      .then(res => {
        dispatch({
          type: listing.FIND_PUBLIC_LISTINGS_SUCCESSFUL,
          listings: res.data
        });
      })
      .catch(res => {
        dispatch({
          type: listing.FIND_PUBLIC_LISTINGS_FAILED,
          message: extractMessage(res)
        });
      });
  };
};

export const add = (obj, userID) => {
  let headerObj = {};
  if (userID) {
    headerObj = { userID };
  }
  return dispatch => {
    dispatch({ type: listing.ADD_LISTING_REQUEST });
    axios({
      url: endpoints.ADD_LISTING,
      method: "POST",
      data: obj,
      headers: headerObj
    })
      .then(res => {
        dispatch({
          type: listing.ADD_LISTING_SUCCESSFUL,
          message: res.data.message,
          userID: res.data.userID
        });
      })
      .catch(res => {
        dispatch({
          type: listing.ADD_LISTING_FAILED,
          message: extractMessage(res)
        });
      });
  };
};

export const back_up_form = to => {
  return {
    type: listing.BACK_UP_FORM,
    to
  };
};

export const update_form = (obj, type) => {
  return {
    type: listing.UPDATE_LISTING_FORM,
    data: { obj, type }
  };
};

export const setToDefault = obj => {
  return {
    type: listing.SET_FORM_TO_DEFAULT,
    data: obj
  };
};

export const resetDefault = () => {
  return {
    type: listing.RESET_DEFAULT
  };
};

export const clear_form = () => {
  return {
    type: listing.CLEAR_FORM
  };
};

export const make_rating_request = obj => {
  return dispatch => {
    dispatch({ type: listing.MAKE_RATING_REQUEST, obj });
    axios({
      url: endpoints.MAKE_RATING,
      method: "POST",
      data: obj
    })
      .then(res => {})
      .catch(res => {});
  };
};

export const findOne = id => {
  return dispatch => {
    dispatch({ type: listing.FIND_ONE_LISTING_REQUEST });

    axios({
      url: endpoints.FIND_LISTINGS + "/" + id,
      method: "GET"
    })
      .then(res => {
        dispatch({
          type: listing.FIND_ONE_LISTING_SUCCESSFUL,
          listing: res.data
        });
      })
      .catch(res => {
        dispatch({
          type: listing.FIND_ONE_LISTING_FAILED,
          message: extractMessage(res)
        });
      });
  };
};

export const deleteListing = (id, type) => {
  let headerObj = { authorization: retrieveToken(), type };

  return dispatch => {
    dispatch({ type: listing.DELETE_LISTING_REQUEST });
    axios({
      url: endpoints.DELETE_LISTING + id,
      method: "DELETE",
      data: id,
      headers: headerObj
    })
      .then(res => {
        dispatch({
          type: listing.DELETE_LISTING_SUCCESSFUL,
          message: res.data.message,
          userID: res.data.userID
        });
      })
      .catch(res => {
        dispatch({
          type: listing.DELETE_LISTING_FAILED,
          message: extractMessage(res)
        });
      });
  };
};

export const updateListing = (obj, id) => {
  let headerObj = { authorization: retrieveToken() };
  return dispatch => {
    dispatch({ type: listing.UPDATE_LISTING_REQUEST });
    axios({
      url: endpoints.UPDATE_LISTING + id,
      method: "PUT",
      data: obj,
      headers: headerObj
    })
      .then(res => {
        dispatch({
          type: listing.UPDATE_LISTING_SUCCESSFUL,
          message: res.data.message,
          userID: res.data.userID
        });
      })
      .catch(res => {
        dispatch({
          type: listing.UPDATE_LISTING_FAILED,
          message: extractMessage(res)
        });
      });
  };
};
