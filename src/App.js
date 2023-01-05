import "./index.css";
// import Melon from "./components/Melon";
// import Header from "./components/Header";
import Ridi from "./components/Ridi";
import Series from "./components/Series";
import Kakao from "./components/Kakao";
import Joara from "./components/Joara";
import { useEffect, useState } from "react";

function App() {
  const [series, setSeries] = useState(true);
  const [kakao, setKakao] = useState(true);
  const [joara, setJoara] = useState(true);

  return (
    <div>
      <div className="w-auto pl-5 lg:flex lg:px-10">
        <Ridi />
        <Series />
        <Kakao />
        <Joara />
        {/* <Melon /> */}
      </div>
    </div>
  );
}

export default App;
