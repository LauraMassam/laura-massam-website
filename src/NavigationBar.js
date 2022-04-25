import React from "react";
import "./NavigationBar.css";

export default function NavigationBar(){
    return(
        <div className="NavigationBar">
            <span className="NavigationBarMenu">
                <a href className="NavigationLink"> 
                home 
                </a>
            </span>
            <span className="NavigationBarMenu">
                <a href className="NavigationLink">
                portfolio
                </a>
            </span>
            <span className="NavigationBarMenu">
                <a href className="NavigationLink">
                CV
                </a>
            </span>

        </div>

    );
}