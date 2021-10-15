import React from "react";

function Header( {videoTitle} ){
    return (
        <header>
            <h1 className="title">{videoTitle}</h1>
        </header>
    )
}



export default Header;