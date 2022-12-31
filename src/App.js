import "./index.css";
import Melon from "./components/Melon";
import Header from "./components/Header";
import Ridi from "./components/Ridi";
import Series from "./components/Series";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="w-auto px-10 lg:flex">
        <Melon />
        <Ridi />
        <Series />
      </div>
    </div>
  );
}

export default App;
