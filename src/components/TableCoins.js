import React, { useContext, useEffect } from "react";
import RowCoins from "./RowCoins";
import CryptoContext from "../context/Crypto/CryptoContext";

const titles = ["#", "Coin", "Price", "Price Change", "24h volume"];

export default function TableCoins({ filterValue }) {
  useEffect(() => {
    getCryptoData();
  }, []);

  const { coins, getCryptoData } = useContext(CryptoContext);

  const filteredCoin = coins.filter(
    (currentCoin) =>
      currentCoin.id.toLowerCase().includes(filterValue) |
      currentCoin.symbol.toLowerCase().includes(filterValue)
  );

  return (
    <table className="table table-dark mt-4 table-hover">
      <thead>
        <tr>
          {titles.map((title, i) => (
            <th key={i}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredCoin.map((coin, idx) => (
          <RowCoins key={idx} coin={coin} index={idx} />
        ))}
      </tbody>
    </table>
  );
}
