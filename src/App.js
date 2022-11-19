import React from "react";
import PokeList from './components/PokeList';
import PokeInfo from './components/PokeInfo';
import PokeCompare from './components/PokeCompare';
import {Route, Routes} from "react-router-dom";
import {useState} from "react"
// import Header from './components/Header';
// import ComparePane from './components/ComparePane';

import './styles/reset.css';
import './styles/header.css';
import './styles/App.css';
import './styles/pokebox.css';
import './styles/style.css';
import './styles/compare.css';
import './styles/button.css';
import './styles/tabs.css';
import './styles/modal.css';
import './styles/label.css';

function App() {
    return (
        <Routes>
            <Route path="/" element={<PokeList />} />
            <Route path="/pokemon/:pokemon" element={<PokeInfo />} />
            <Route path="/compare-pokemon/:pokeOne/:pokeTwo" element={<PokeCompare />} />
        </Routes>
    )
}

export default App;