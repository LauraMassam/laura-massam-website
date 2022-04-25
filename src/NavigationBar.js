import React from "react";
import "./NavigationBar.css";

export default function NavigationBar(){
    return(
        <div className="NavigationBar">
            <ul>
            <li>
                <a href className="NavigationLink"> 
                home 
                </a>
            </li>
            <li>
                <a href className="NavigationLink">
                portfolio
                </a>
            </li>
            <li>
                <a href className="NavigationLink">
                CV
                </a>
            </li>
            </ul>
        </div>
    );
}