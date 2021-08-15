import { GET_COINS_DATA } from "../types";

export default function (state, action) {
  const { payload, type } = action;

  switch (type) {
    case GET_COINS_DATA:
      return {
        ...state,
        coins: payload,
      };
    default:
      return state;
  }
}
