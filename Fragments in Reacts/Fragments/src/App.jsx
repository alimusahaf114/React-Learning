import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/foodItems";
import ErrorMsg from "./Components/ErrorMsg";
import styles from "../src/Components/Heading.module.css";

function App() {
  let foodItems = [
    "Daal",
    "Green Vagetable",
    "Milk",
    "Shormaa Kabab",
    "Dall Masala",
    "Makhn",
  ];

  return (
    <>
      <h2 className={styles.muheading}>Healthy Food Items </h2>
      <ErrorMsg items={foodItems}></ErrorMsg>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
