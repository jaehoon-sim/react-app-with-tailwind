import Nav from "./Nav.js";
import NavItem from "./NavItem.js";
import List from "../List.js";
import { useEffect, useState } from "react";
import RidiListItem from "./RidiListItem.js";
import logo from "./ridi.svg";

function Ridi() {
  const [ridiData, setRidiData] = useState([]);
  const [show, setShow] = useState(true);
  function DataFetch() {
    useEffect(() => {
      fetch(
        "https://raw.githubusercontent.com/jaehoon-sim/ridi_Crawler/master/ridi.json"
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
  const ClickHandle = (event) => {
    setShow(!show);
  };
  return (
    <div>
      {show ? (
        <div className="truncate lg:w-full">
          <img src={logo} alt="logo" className="h-10 mt-6 mb-4" />
          <div className="divide-y divide-slate-300 shadow-xl w-90 rounded-xl border h-screen scrollbar-thin scrollbar-none scrollbar-thumb-indigo-300 scrollbar-track-indigo-100 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
            <Nav>
              <NavItem isActive>
                <span onClick={ClickHandle}>접기</span>
              </NavItem>
              {/* <NavItem href="#">Weekly</NavItem>
              <NavItem href="#">Monthly</NavItem> */}
            </Nav>
            <List>
              {ridiData.map((item) => (
                <RidiListItem key={item.book.book_id} props={item.book} />
              ))}
            </List>
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default Ridi;
