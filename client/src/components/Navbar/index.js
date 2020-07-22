import React from "react";

function Navbar(props) {

    return (
        <nav id="navbar" className={"navbar is-warning tabs is-fixed-top"}>
            <div className="navbar-brand container">
                <ul>
                    <li>
                        <a className="navbar-item" href="/portfolio" onClick={props.handleScroll}>
                            About
                        </a>
                    </li>
                    <li>
                        <a className="navbar-item" href="#portfolio">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a className="navbar-item" href="#contact">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a className="navbar-item" href="/" onClick={props.handleScroll}>
                            Home
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );   
}

export default Navbar;