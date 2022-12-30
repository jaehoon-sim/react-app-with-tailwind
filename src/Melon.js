import Nav from "./Nav.js";
import NavItem from "./NavItem.js";
import List from "./List.js";
import MelonListItem from "./MelonListItem.js";
import { useEffect, useState } from "react";
import "./index.css";

function Melon() {
  const [data, setData] = useState([]);

  function DataFetch() {
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
  }
  DataFetch();
  return (
    <div className="w-1/3 px-8">
      <div className="divide-y divide-slate-300 shadow-xl rounded-xl border h-screen scrollbar-thin scrollbar-thumb-indigo-300 scrollbar-track-indigo-100 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        <Nav>
          <NavItem href="#" isActive>
            Daily
          </NavItem>
          <NavItem href="#">Weekly</NavItem>
          <NavItem href="#">Monthly</NavItem>
        </Nav>
        <List>
          {data.map((item) => (
            <MelonListItem key={item.순위} song={item.곡명} props={item} />
          ))}
        </List>
      </div>
    </div>
  );
}
export default Melon;
