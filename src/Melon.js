import { useEffect, useState } from "react";
import "./index.css";
function Melon() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/jaehoon-sim/newscrawler/main/melonTop100.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((json_res) => {
        setData(json_res);
      });
  }, []);
  console.log(data);
  return (
    <div className="container mx-auto bg-gray-100 rounded-xl shadow border p-8 m-10">
      <ul>
        {data.map((item) => {
          return (
            <li key={item.rank}>
              {item.song_title} - <a href="#">{item.song_detail_url}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Melon;
