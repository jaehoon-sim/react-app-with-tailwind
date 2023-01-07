import Nav from "./Nav.js";
import NavItem from "./NavItem.js";
import List from "../List.js";
import JoaraListItem from "./JoaraListItem.js";
import { useEffect, useState } from "react";
import logo from "./joara.png";

function Joara() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(true);
  const ClickHandle = (event) => {
    setShow(!show);
  };
  function DataFetch() {
    useEffect(() => {
      fetch(
        "https://raw.githubusercontent.com/jaehoon-sim/joaraCrawler/master/joara.json"
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
        <div className="w-80 px-3 truncate lg:w-full">
          <img src={logo} alt="logo" className="h-10 mt-6 mb-4" />
          <span onClick={ClickHandle}>접기</span>
          <div className="divide-y divide-slate-300 shadow-xl rounded-xl border h-screen scrollbar-thin scrollbar-none scrollbar-thumb-indigo-300 scrollbar-track-indigo-100 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
            <Nav>
              <NavItem href="#" isActive>
                Daily
              </NavItem>
              <NavItem href="#">Weekly</NavItem>
              <NavItem href="#">Monthly</NavItem>
            </Nav>
            <List>
              {data.map((item) => (
                <JoaraListItem key={item.book_code} props={item} />
              ))}
            </List>
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default Joara;
