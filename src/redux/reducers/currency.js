import currency_actions from "../actions/currency";

const initState = {
  type: "",
  message: "",
  default: "Dollars",
  chosen: localStorage.getItem("chosenCurrency"),
  conversionRate: ""
};

export default (state = initState, payload) => {
  switch (payload.type) {
    case currency_actions.CONVERT_REQUEST:
      return {
        ...state,
        type: currency_actions.CONVERT_REQUEST
      };

    case currency_actions.CONVERT_SUCCESSFUL:
      return {
        ...state,
        type: currency_actions.CONVERT_REQUEST
      };

    case currency_actions.CONVERT_FAILED:
      return {
        ...state,
        type: currency_actions.CONVERT_FAILED
      };

    default:
      return state;
  }
};
