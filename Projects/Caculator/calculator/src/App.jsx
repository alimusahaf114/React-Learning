import { useState } from "react";
import styles from "./App.module.css";
import Btcont from "./component/Btcont";
import Display from "./component/Display";

function App() {
  const [calVal, setCalValue] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalValue("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalValue(result);
    } else {
      const newValue = calVal + buttonText;
      setCalValue(newValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <Btcont onButtonClick={onButtonClick}></Btcont>
    </div>
  );
}
export default App;
