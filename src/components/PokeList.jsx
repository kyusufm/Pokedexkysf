import React from "react";
import PokeCard from "./PokeCard";
import axios from "axios";

import {useState, useEffect} from "react";


const PokeList = () => {
    const [pokeData, setPokeData] =useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');
    const [noData, setNoData] = useState(false);

    console.log(pokeData);
    window.onscroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            if(!noData) {
                pokemonList();
            }
        }
    }
    const pokemonList = async()=>{
        setLoading(true)
        const res = await axios.get(url)
        getPokemon(res.data.results)    
        setLoading(false)

        if(res.data.next === ""){
            setNoData(true)
        }else{
            setUrl(res.data.next)
        }
        

    }

    const getPokemon = async(res)=>{
        res.map(async (item)=>{
            const result = await axios.get(item.url)
            setPokeData(state =>{
                state = [...state, result.data];
                state.sort((a,b)=>a.id>b.id?1:-1)
                return state;
            })
            
        })
    }

    useEffect(()=>{
        pokemonList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
        <div className="page-content">
            <ul className="grid">
                
                <PokeCard pokemon={pokeData} loading={loading} key={pokeData.key}  />
                {loading ?  <div className="text-center">loading data ...</div> : "" }
                {noData ? <div className="text-center">no data anymore ...</div> : "" }  
            </ul>
        </div>
        </>
    )
}

export default PokeList;