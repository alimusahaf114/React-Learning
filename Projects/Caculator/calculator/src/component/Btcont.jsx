import styles from "./Btcont.module.css";
const Btcont = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div>
      <div className={styles.buttonsContainer}>
        {buttonNames.map((buttonName) => (
          <button
            className={styles.button}
            onClick={() => onButtonClick(buttonName)}
            key={buttonName}
          >
            {buttonName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Btcont;
