import React from "react";

function NavBar(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand mb-0 h1">Extreme Forest</span>
            <span className="navbar-text">
                {props.name}
            </span>
        </nav>
    )
}

export default NavBar;
