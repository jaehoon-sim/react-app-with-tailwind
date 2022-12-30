import "./index.css";
import Melon from "./Melon";
import Header from "./Header";
import Ridi from "./Ridi";
import Kakao from "./Kakao";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex p-10 flex-row justify-between">
        <Melon />
        <Ridi />
        <Kakao />
      </div>
    </div>
  );
}

export default App;
