import React, { useState, useEffect } from "react";
import Bio from "../components/Bio";
import Sidebar from "../components/Sidebar";
import Contact from "./Contact.js";
import Portfolio from "./Portfolio.js";

function Content(props) {
    // const [state, setState] = useState(
    //     [
    //         {
    //             section: "About",
    //             active: false
    //         },
    //         {
    //             section: "Projects",
    //             active: false
    //         },
    //         {
    //             section: "Contact",
    //             active: false
    //         }
        
    // ]);

    return(
        <Sidebar toggle={props.toggle}>
            <Bio id="About" className="section" />
            <Portfolio id="Projects" className="section"/>
            <Contact id="Contact" className="section"/>
        </Sidebar>
    );
}

export default Content;