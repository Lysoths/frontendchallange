import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import { useState } from "react";

import "./App.css";
function App() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState({
    cardNumber: "0000 0000 0000 0000",
    cardHolder: "Josephine Dyner",
    secur1: "00",
    secur2: "00",
    secur3: "000",
  });
  return (
    <div className='App'>
      <LeftSide
        name={name}
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
      />
      <RightSide
        name={name}
        setName={setName}
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
      />
    </div>
  );
}

export default App;
