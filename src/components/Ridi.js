import Nav from "./Nav.js";
import NavItem from "./NavItem.js";
import List from "../List.js";
import { useEffect, useState } from "react";
import RidiListItem from "./RidiListItem.js";
import logo from "./ridi.svg";

function Ridi() {
  const [ridiData, setRidiData] = useState([]);
  function DataFetch() {
    useEffect(() => {
      fetch(
        "https://raw.githubusercontent.com/jaehoon-sim/ridi_Crawler/master/ridi_rf_top60.json"
      )
        .then((res) => {
          return res.json();
        })
        .then((json_res) => {
          setRidiData(json_res);
        });
    }, []);
  }
  DataFetch();

  return (
    <div className="w-128 px-8 truncate lg:w-full">
      <img src={logo} alt="logo" className="h-20 w-20 pt-3" />
      <div className="divide-y divide-slate-300 shadow-xl rounded-xl border h-screen scrollbar-thin scrollbar-none scrollbar-thumb-indigo-300 scrollbar-track-indigo-100 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        <Nav>
          <NavItem href="#" isActive>
            Daily
          </NavItem>
          <NavItem href="#">Weekly</NavItem>
          <NavItem href="#">Monthly</NavItem>
        </Nav>
        <List>
          {ridiData.map((item) => (
            <RidiListItem key={item.index} song={item.title} props={item} />
          ))}
        </List>
      </div>
    </div>
  );
}
export default Ridi;
