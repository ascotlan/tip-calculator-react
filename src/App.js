import Bill from "./components/Bill";
import Tip from "./components/Tip";
import Total from "./components/Total";
import Reset from "./components/Reset";
import { useState } from "react";

const options = [
  { rating: "Dissatisfied", tip: 0 },
  { rating: "It was okay", tip: 5 },
  { rating: "It was good", tip: 10 },
  { rating: "Absolutely amazing!", tip: 20 },
];

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercentage, setTip] = useState({
    me: 0,
    friend: 0,
  });

  const handleBillAmount = (event) => {
    if (event.target.value !== "") {
      return setBillAmount(parseFloat(event.target.value));
    }

    setBillAmount("");
  };

  const handleMyTipAmount = (amount) => {
    setTip({ ...tipPercentage, me: amount });
  };

  const handleOtherTipAmount = (amount) => {
    setTip({ ...tipPercentage, friend: amount });
  };

  const handleReset = () => {
    setBillAmount(0);
    setTip({ me: 0, friend: 0 });
  };

  return (
    <div>
      <Bill bill={billAmount} handleBillAmount={handleBillAmount} />
      <Tip array={options} value={tipPercentage.me} onTip={handleMyTipAmount}>
        How did you like the service?
      </Tip>
      <Tip
        array={options}
        value={tipPercentage.friend}
        onTip={handleOtherTipAmount}
      >
        How did your friend like the service
      </Tip>

      {billAmount > 0 && (
        <>
          <Total
            bill={billAmount}
            myTip={tipPercentage.me}
            friendTip={tipPercentage.friend}
          />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

export default App;
