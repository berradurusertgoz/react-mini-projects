import { useState } from "react";
import MenuList from "./menu-list";

export default function MenuItem({item}){
    const [display, setDisplay] = useState({});

    function handleToggleChildren(currentLabel) {
        setDisplay({...display, [currentLabel] : !display[currentLabel]})
    }

    return (
    <li className="menu-item">
         <div className="menu-item-content">
            <p>{item.label}</p>
            {
            item && 
            item.children && 
            item.children.length ? 
                <span className="toggle-btn" onClick={() => handleToggleChildren(item.label)}>
                {
                    display[item.label] 
                    ? "-" 
                    : "+"
                }
            </span> 
                : null}
        </div>
    
        {
            item 
            && item.children 
            && item.children.length > 0 && 
            display[item.label] ?
            <MenuList list={item.children} />
            :null
        }
    </li>);
}