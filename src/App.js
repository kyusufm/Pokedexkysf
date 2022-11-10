import React from "react";
import Main from './components/Main';
import Header from './components/Header';
import ComparePane from './components/ComparePane';
import PokeInfo from './components/PokeInfo';

import './styles/reset.css';
import './styles/App.css';
import './styles/header.css';
import './styles/pokebox.css';
import './styles/style.css';
import './styles/compare.css';
import './styles/button.css';

function App() {
    return (
        <div id="root">
            <Header/>
            <main className="page">
                <h1 className="page-title">Pokédex <span>(905)</span></h1>

                <Main/>

                <ComparePane/>
            </main>
            {/* <PokeInfo/> */}
        </div>
    )
}

export default App;