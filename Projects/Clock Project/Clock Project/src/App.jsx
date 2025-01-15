import ClockName from "./Components/ClockName";
import Slogan from "./Components/Slogan";
import Time from "./Components/Time";
import "./App.css";
function App() {
  return (
    <>
      <center>
        <div className="container">
          <ClockName></ClockName>
          <Slogan></Slogan>
          <Time></Time>
        </div>
      </center>
    </>
  );
}

export default App;
