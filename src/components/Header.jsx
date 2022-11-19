import React from "react";

const Header = (page) => {
return (
<>
    {/* if display is poke info : else */}

    

    <header className="header ">
        <div className="header__left"></div>
        <div className="header__right"><button className="button button-text  ">Compare</button><button
                className="button button-icon  " data-count="0"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" className="feather feather-filter" aria-hidden="true">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg><span className="visually-hidden">Filter</span></button></div>
    </header>
</>
)
}

export default Header;