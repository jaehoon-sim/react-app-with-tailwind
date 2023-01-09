import Nav from "./Nav.js";
import NavItem from "./NavItem.js";
import List from "../List.js";
import SeriesListItem from "./SeriesListItem.js";
import { useEffect, useState } from "react";
import logo from "./series.png";

function Series() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(true);
  const ClickHandle = (event) => {
    setShow(!show);
  };
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
    <div>
      {show ? (
        <div className="truncate lg:w-full">
          <img src={logo} alt="logo" className="h-10 mt-6 mb-4" />
          <div className="divide-y divide-slate-300 shadow-xl rounded-xl w-90 border h-screen scrollbar-thin scrollbar-none scrollbar-thumb-indigo-300 scrollbar-track-indigo-100 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
            <Nav>
              <NavItem isActive>
                <span onClick={ClickHandle}>접기</span>
              </NavItem>
              {/* <NavItem href="#">Weekly</NavItem>
              <NavItem href="#">Monthly</NavItem> */}
            </Nav>
            <List>
              {data.map((item) => (
                <SeriesListItem
                  key={item.index}
                  song={item.title}
                  props={item}
                />
              ))}
            </List>
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default Series;
