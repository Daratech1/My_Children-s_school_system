import { PAYMENT_METHODE } from "../action/types";

const initialState = {
    PaymentData: [],
    loading: true,
};
export default (state = initialState, action) => {
  const { type, payload ,date } = action;
  switch (type) {
    case PAYMENT_METHODE:
      return {
        PaymentData: payload,
        loading: false,
      };
    default:
      return state;
    }
}; 