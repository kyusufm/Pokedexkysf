import React from "react";
import PokeCard from "./PokeCard";
import axios from "axios";

import {useState, useEffect} from "react";


const Main = () => {
    const [pokeData, setPokeData] =useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');

    const pokeFun = async()=>{
        setLoading(true)
        const res = await axios.get(url)

        getPokemon(res.data.results)
        setLoading(false)
        // console.log(pokeData)
    }

    const getPokemon = async(res)=>{
        res.map(async (item)=>{
            
            const result = await axios.get(item.url)

            setPokeData(state =>{
                state = [...state, result.data];
                return state;
            })
        })
    }

    useEffect(()=>{
        pokeFun();
    },[url])


    return (
        <>
        <div className="page-content">
            <ul className="grid">
                
                <PokeCard pokemon={pokeData} loading={loading}/>

                <li className="grid-item"><a href="#/pokemon/ivysaur"><article className="pokemon-box bg-light bg-light--grass"><img className="pokemon-box__img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png" alt="ivysaur" loading="lazy" width="82px" height="82px" /><p className="pokemon-box__number">#002</p><h2 className="pokemon-box__name">ivysaur</h2><figure className="pokemon-box__types"><figcaption className="visually-hidden">Types</figcaption><ul className="pokemon-types"><li className="pokemon-type bg bg--grass">grass</li><li className="pokemon-type bg bg--poison">poison</li></ul></figure></article></a></li>

                <li className="grid-item"><a href="#/pokemon/venusaur"><article className="pokemon-box bg-light bg-light--grass"><img className="pokemon-box__img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png" alt="venusaur" loading="lazy" width="82px" height="82px" /><p className="pokemon-box__number">#003</p><h2 className="pokemon-box__name">venusaur</h2><figure className="pokemon-box__types"><figcaption className="visually-hidden">Types</figcaption><ul className="pokemon-types"><li className="pokemon-type bg bg--grass">grass</li><li className="pokemon-type bg bg--poison">poison</li></ul></figure></article></a></li>

                <li className="grid-item"><a href="#/pokemon/charmander"><article className="pokemon-box bg-light bg-light--fire"><img className="pokemon-box__img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" alt="charmander" loading="lazy" width="82px" height="82px" /><p className="pokemon-box__number">#004</p><h2 className="pokemon-box__name">charmander</h2><figure className="pokemon-box__types"><figcaption className="visually-hidden">Types</figcaption><ul className="pokemon-types"><li className="pokemon-type bg bg--fire">fire</li></ul></figure></article></a></li>
                <li className="grid-item"><a href="#/pokemon/charmander"><article className="pokemon-box bg-light bg-light--fire"><img className="pokemon-box__img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" alt="charmander" loading="lazy" width="82px" height="82px" /><p className="pokemon-box__number">#004</p><h2 className="pokemon-box__name">charmander</h2><figure className="pokemon-box__types"><figcaption className="visually-hidden">Types</figcaption><ul className="pokemon-types"><li className="pokemon-type bg bg--fire">fire</li></ul></figure></article></a></li>
                <li className="grid-item"><a href="#/pokemon/charmander"><article className="pokemon-box bg-light bg-light--fire"><img className="pokemon-box__img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" alt="charmander" loading="lazy" width="82px" height="82px" /><p className="pokemon-box__number">#004</p><h2 className="pokemon-box__name">charmander</h2><figure className="pokemon-box__types"><figcaption className="visually-hidden">Types</figcaption><ul className="pokemon-types"><li className="pokemon-type bg bg--fire">fire</li></ul></figure></article></a></li>
                <li className="grid-item"><a href="#/pokemon/charmander"><article className="pokemon-box bg-light bg-light--fire"><img className="pokemon-box__img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" alt="charmander" loading="lazy" width="82px" height="82px" /><p className="pokemon-box__number">#004</p><h2 className="pokemon-box__name">charmander</h2><figure className="pokemon-box__types"><figcaption className="visually-hidden">Types</figcaption><ul className="pokemon-types"><li className="pokemon-type bg bg--fire">fire</li></ul></figure></article></a></li>
                <li className="grid-item"><a href="#/pokemon/charmander"><article className="pokemon-box bg-light bg-light--fire"><img className="pokemon-box__img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" alt="charmander" loading="lazy" width="82px" height="82px" /><p className="pokemon-box__number">#004</p><h2 className="pokemon-box__name">charmander</h2><figure className="pokemon-box__types"><figcaption className="visually-hidden">Types</figcaption><ul className="pokemon-types"><li className="pokemon-type bg bg--fire">fire</li></ul></figure></article></a></li>
                <li className="grid-item"><a href="#/pokemon/charmander"><article className="pokemon-box bg-light bg-light--fire"><img className="pokemon-box__img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" alt="charmander" loading="lazy" width="82px" height="82px" /><p className="pokemon-box__number">#004</p><h2 className="pokemon-box__name">charmander</h2><figure className="pokemon-box__types"><figcaption className="visually-hidden">Types</figcaption><ul className="pokemon-types"><li className="pokemon-type bg bg--fire">fire</li></ul></figure></article></a></li>

            </ul>
        </div>

        
        </>
    )
}

export default Main;