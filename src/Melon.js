import Nav from "./Nav.js";
import NavItem from "./NavItem.js";
import List from "./List.js";
import ListItem from "./ListItem.js";
import { useEffect, useState } from "react";
import "./index.css";
import { Container } from "postcss";
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
        <div className="flex container mx-auto p-10 flex-row space-x-4 justify-evenly">
            <div className="divide-y divide-slate-100 shadow-xl w-1/3 overflow-auto rounded-xl border mx-auto max-h-96 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                <Nav>
                    <NavItem
                        href="/new"
                        isActive>
                        Daily
                    </NavItem>
                    <NavItem href="/top">Weekly</NavItem>
                    <NavItem href="/picks">Monthly</NavItem>
                </Nav>
                <List>
                    {data.map((item) => (
                        <ListItem
                            key={item.순위}
                            song={item.곡명}
                            props={item}
                        />
                    ))}
                </List>
            </div>
            <div className="divide-y divide-slate-100 shadow-xl w-1/3 overflow-auto rounded-xl border mx-auto max-h-96 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                <Nav>
                    <NavItem
                        href="/new"
                        isActive>
                        Romance Fantash
                    </NavItem>
                    <NavItem href="/top">Romance</NavItem>
                    <NavItem href="/picks">SF</NavItem>
                </Nav>
                <List>
                    {data.map((item) => (
                        <ListItem
                            key={item.순위}
                            song={item.곡명}
                            props={item}
                        />
                    ))}
                </List>
            </div>
            <div className="divide-y divide-slate-100 shadow-xl w-1/3 overflow-auto rounded-xl border mx-auto max-h-96 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                <Nav>
                    <NavItem
                        href="/new"
                        isActive>
                        New Releases
                    </NavItem>
                    <NavItem href="/top">Top Rated</NavItem>
                    <NavItem href="/picks">Vincent’s Picks</NavItem>
                </Nav>
                <List>
                    {data.map((item) => (
                        <ListItem
                            key={item.순위}
                            song={item.곡명}
                            props={item}
                        />
                    ))}
                </List>
            </div>
        </div>
    );
}
export default Melon;
