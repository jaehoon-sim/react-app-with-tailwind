import "./index.css";
import Melon from "./components/Melon";
// import Header from "./components/Header";
import Ridi from "./components/Ridi";
import Series from "./components/Series";
import Kakao from "./components/Kakao";

function App() {
  return (
    <div>
      <div className="w-auto pl-5 lg:flex lg:px-10">
        <Ridi />
        <Series />
        <Kakao />
        <Melon />
      </div>
    </div>
  );
}

export default App;
