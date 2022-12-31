import Nav from "./Nav.js";
import NavItem from "./NavItem.js";
import List from "./List.js";
import SeriesListItem from "./SeriesListItem.js";
import { useEffect, useState } from "react";
import "./index.css";
import logo from "./series.png";

function Series() {
  const [data, setData] = useState([]);
  function DataFetch() {
    useEffect(() => {
      fetch(
        "https://raw.githubusercontent.com/jaehoon-sim/naverseriescrawler/master/series_rf_top25.json"
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
      <img src={logo} alt="logo" className="h-10 mt-6 mb-4" />
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
            <SeriesListItem key={item.index} song={item.title} props={item} />
          ))}
        </List>
      </div>
    </div>
  );
}
export default Series;
