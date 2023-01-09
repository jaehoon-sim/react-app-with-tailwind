import "./index.css";
// import Melon from "./components/Melon";
// import Header from "./components/Header";
import Ridi from "./components/Ridi";
import Series from "./components/Series";
import Kakao from "./components/Kakao";
import Joara from "./components/Joara";
import Million from "./components/Million";
import { useEffect, useState } from "react";

function App() {
  const [series, setSeries] = useState(true);
  const [kakao, setKakao] = useState(true);
  const [joara, setJoara] = useState(true);

  return (
    <div>
      <div className="w-auto ml-1 px-2 md:flex justify-between">
        <Joara />
        <Kakao />
        <Million />
        <Ridi />
        <Series />
        {/* <span>전체열기</span> */}
      </div>
    </div>
  );
}

export default App;
