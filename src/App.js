import "./index.css";
import Melon from "./Melon";
import Header from "./Header";
import Ridi from "./Ridi";
import Series from "./Series";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex px-10 flex-row justify-between">
        <Melon />
        <Ridi />
        <Series />
      </div>
    </div>
  );
}

export default App;
