import styles from "./Item.module.css";
const Item = ({ fooditem }) => {
  return (
    <li className={`${styles.muitem} list-group-item `}>
      <span className={styles.muspan}>{fooditem}</span>
    </li>
  );
};
export default Item;
