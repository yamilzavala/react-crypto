import React, { useReducer } from "react";
import CryptoContext from "./CryptoContext";
import CryptoReducer from "./CryptoReducer";
import axios from "axios";
import { GET_COINS_DATA } from "../types";

export default function CryptoState(props) {
  const initialState = {
    coins: [],
  };
  const [state, dispatch] = useReducer(CryptoReducer, initialState);

  const getCryptoData = async () => {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
    const response = await axios.get(url);
   
    dispatch({
      type: GET_COINS_DATA,
      payload: response.data,
    });
  };

  return (
    <CryptoContext.Provider
      value={{
        coins: state.coins,
        getCryptoData,
      }}
    >
      {props.children}
    </CryptoContext.Provider>
  );
}
