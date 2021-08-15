import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TableCoins from "./components/TableCoins";
import CryptoState from "./context/Crypto/CryptoState";
// import axios from "axios";
import { useState } from "react";

function App() { 
  const [filterValue, setfilterValue] = useState("");

  return (
    <div className="container">
      <div className="row">
        <input
          placeholder="Search a coin"
          type="text"
          className="form-control bg-dark text-light border-0 mt-4 text-center"
          onChange={(e) => setfilterValue(e.target.value)}
          value={filterValue}
        />

        <CryptoState>
          <TableCoins filterValue={filterValue} />
        </CryptoState>
      </div>
    </div>
  );
}

export default App;
