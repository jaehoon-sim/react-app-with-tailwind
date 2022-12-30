import Nav from "./Nav.js";
import NavItem from "./NavItem.js";
import List from "./List.js";
import KakaoListItem from "./KakaoListItem.js";
import { useEffect, useState } from "react";
import "./index.css";
function Kakao() {
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
        <List></List>
      </div>
    </div>
  );
}
export default Kakao;
