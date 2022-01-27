import { COUPON_METHOD } from "../action/types";

const initialState = {
    couponData:{},
    loading: true,
};
export default (state = initialState, action) => {
  const { type, payload ,date } = action;
  switch (type) {
    
      case COUPON_METHOD:
      return {
        couponData: payload,
        loading: false,
      };
    default:
      return state;
    }
};