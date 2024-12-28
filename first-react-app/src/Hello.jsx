function Hello() {
  let myName = "Musahaf Ali";
  let number = 456;
  let fulName = () => {
    return "Musahaf Ali";
  };
  return (
    <h3>
      Message number is {number} and My name is {fulName()}
    </h3>
  );
}

export default Hello;
