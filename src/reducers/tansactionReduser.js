import { TRANSACTION_METHOD } from "../action/types";

const initialState = {
    transactionData: {},
    loading: true,
};
export default (state = initialState, action) => {
  const { type, payload ,date } = action;
  switch (type) {
    case TRANSACTION_METHOD:
      return {
        transactionData: payload,
        loading: false,
      };
    default:
      return state;
    }
}; 