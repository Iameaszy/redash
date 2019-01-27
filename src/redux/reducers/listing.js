import listing from "../actions/listing";

const init = {
  action_type: "",
  action_message: "",
  step: 1,
  defaultSet: false,
  form: {
    listing: {
      listing_city: {},
      listing_country: {},
      availability: {}
    },
    user: {}
  },
  single_listing_info: {},
  listings: []
};

export default (state = init, payload) => {
  switch (payload.type) {
    case listing.RESET_DEFAULT:
      return {
        ...state,
        defaultSet: false
      };
    case listing.BACK_UP_FORM:
      return {
        ...state,
        step:
          payload.to === undefined
            ? state.step === 1
              ? 1
              : state.step - 1
            : payload.to
      };

    case listing.UPDATE_LISTING_FORM:
      return {
        ...state,
        step: state.step === 6 ? 5 : state.step + 1,
        form: {
          ...state.form,
          [payload.data.type]: {
            ...state.form[payload.data.type],
            ...payload.data.obj
          }
        }
      };

    case listing.SET_FORM_TO_DEFAULT:
      return {
        ...state,
        defaultSet: true,

        form: {
          listing: payload.data
        }
      };
    case listing.CLEAR_FORM:
      return init;

    case listing.MAKE_RATING_REQUEST:
      return {
        ...state,
        rating: {
          action_type: listing.MAKE_RATING_REQUEST,
          obj: payload.obj
        }
      };

    case listing.ADD_LISTING_SUCCESSFUL:
      return {
        ...state,
        action_type: listing.ADD_LISTING_SUCCESSFUL,
        action_message: payload.message,
        userID: payload.userID
      };

    case listing.ADD_LISTING_REQUEST:
      return {
        ...state,
        action_type: listing.ADD_LISTING_REQUEST
      };

    case listing.ADD_LISTING_FAILED:
      return {
        ...state,
        action_type: listing.ADD_LISTING_FAILED,
        action_message: payload.message
      };

    case listing.DELETE_LISTING_SUCCESSFUL:
      return {
        ...state,
        action_type: listing.DELETE_LISTING_SUCCESSFUL,
        action_message: payload.message,
        userID: payload.userID
      };

    case listing.DELETE_LISTING_REQUEST:
      return {
        ...state,
        action_type: listing.DELETE_LISTING_REQUEST
      };

    case listing.DELETE_LISTING_FAILED:
      return {
        ...state,
        action_type: listing.DELETE_LISTING_FAILED,
        action_message: payload.message
      };

    case listing.SNOOZE_LISTING_SUCCESSFUL:
      return {
        ...state,
        action_type: listing.SNOOZE_LISTING_SUCCESSFUL,
        action_message: payload.message,
        userID: payload.userID
      };

    case listing.SNOOZE_LISTING_REQUEST:
      return {
        ...state,
        action_type: listing.SNOOZE_LISTING_REQUEST
      };

    case listing.SNOOZE_LISTING_FAILED:
      return {
        ...state,
        action_type: listing.SNOOZE_LISTING_FAILED,
        action_message: payload.message
      };

    case listing.UPDATE_LISTING_SUCCESSFUL:
      return {
        ...state,
        action_type: listing.UPDATE_LISTING_SUCCESSFUL,
        action_message: payload.message,
        userID: payload.userID
      };

    case listing.UPDATE_LISTING_REQUEST:
      return {
        ...state,
        action_type: listing.UPDATE_LISTING_REQUEST
      };

    case listing.UPDATE_LISTING_FAILED:
      return {
        ...state,
        action_type: listing.UPDATE_LISTING_FAILED,
        action_message: payload.message
      };

    case listing.FIND_ONE_LISTING_REQUEST:
      return {
        ...state,
        action_type: listing.FIND_ONE_LISTING_REQUEST
      };

    case listing.FIND_ONE_LISTING_SUCCESSFUL:
      return {
        ...state,
        action_type: listing.FIND_ONE_LISTING_SUCCESSFUL,
        single_listing_info: payload.listing
      };

    case listing.FIND_ONE_LISTING_FAILED:
      return {
        ...state,
        action_type: listing.FIND_ONE_LISTING_FAILED,
        action_message: payload.message
      };

    case listing.FIND_LISTINGS_REQUEST:
      return {
        ...state,
        action_type: listing.FIND_LISTINGS_REQUEST
      };

    case listing.FIND_LISTINGS_SUCCESSFUL:
      return {
        ...state,
        action_type: listing.FIND_LISTINGS_SUCCESSFUL,
        listings: payload.listings
      };

    case listing.FIND_LISTINGS_FAILED:
      return {
        ...state,
        action_type: listing.FIND_LISTINGS_FAILED,
        action_message: payload.message
      };

    case listing.FIND_PUBLIC_LISTINGS_REQUEST:
      return {
        ...state,
        action_type: listing.FIND_PUBLIC_LISTINGS_REQUEST
      };

    case listing.FIND_PUBLIC_LISTINGS_SUCCESSFUL:
      return {
        ...state,
        action_type: listing.FIND_PUBLIC_LISTINGS_SUCCESSFUL,
        listings: payload.listings
      };

    case listing.FIND_PUBLIC_LISTINGS_FAILED:
      return {
        ...state,
        action_type: listing.FIND_PUBLIC_LISTINGS_FAILED,
        action_message: payload.message
      };

    default:
      return state;
  }
};
