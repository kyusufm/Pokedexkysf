import React from "react";

const ComparePane = () => {
    return (
        <>
            <div className="compare-panel">
                <ul className="compare-panel-thumbs">
                    <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                            alt="bulbasaur" loading="lazy" /></li>
                    <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
                            alt="ivysaur" loading="lazy" /></li>
                </ul><a className="button button-cta  " href="#/pokemon-compare/bulbasaur/ivysaur"><span>Compare</span><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="feather feather-arrow-right">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg></a>
            </div>
        </>
    )
}

export default ComparePane;