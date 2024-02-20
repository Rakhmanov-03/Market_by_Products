import "./App.css";
import Phones from "./Components/Phones";
import data from "./assets/data/data.json";
function App() {
  return (
    <>
      <Phones phones={data} />
    </>
  );
}

export default App;
