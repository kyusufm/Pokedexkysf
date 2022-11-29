import React from "react";
import PokeCard from "./PokeCard";
import ComparePane from "./ComparePane";
import axios from "axios";

import {useState, useEffect} from "react";

function PokeList (props) {
    const [pokeData, setPokeData] =useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');
    const [noData, setNoData] = useState(false);
    const [totalPokemon, setTotalPokemon] = useState([])
    const [showFilter, setShowFilter] = useState(false);

    const [displayCompare, setDisplayCompare] = useState(false)

    //const [pokeOne, setPokeOne] = useState({id:1,name:"bulbasaur"});
    const [pokeComp, setPokeComp] = useState({id:1,name:"bulbasaur"},{id:4, name:"charmander"});

    

    const pokemonList = async(query)=>{
        setLoading(true)
        const res = await axios.get(url)
        getPokemon(res.data.results)    
        setLoading(false)

        if(res.data.next === ""){
            setNoData(true)
        }else{
            setUrl(res.data.next)
            setTotalPokemon(res.data.count)
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

    const filteredPokemon = (event) => {
        let query = {"types":"grass", "generation":[1,2,3]}
        let result = [];

        result = pokeData.filter(
            
            pokeData => {
                return pokeData.types.includes(query.types) !== -1
            }
        )
        

        console.log(result)
        setPokeData(result);
        }


    const handleCompare = () => {
        //display checkbox on every card.
        if (displayCompare){
            setDisplayCompare(false);
        }else{
            setDisplayCompare(true);
        }
        setPokeComp (
            [{id:4, name:"charmander"},{id:1, name:"bulbasaur"}]
        )
        
    }

    const displayModal = () => {
        if (showFilter){
            setShowFilter(false);
        } else {
            setShowFilter(true);
        }
        
    }

    useEffect(()=>{
        pokemonList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    window.onscroll = () => {
        const scrollTop = document.documentElement.scrollTop
        const scrollHeight = document.documentElement.scrollHeight
        const clientHeight = document.documentElement.clientHeight
 
        if (scrollTop + clientHeight >= scrollHeight) {
            if(!noData) {
                pokemonList();
            }
        }
    }

    //console.log(pokeData)

    return (
        <>
        <header className="header ">
            <div className="header__left"></div>
            <div className="header__right">
                <button className="button button-text  " onClick = {()=>handleCompare()}>Compare</button>
                <button className="button button-icon  " data-count="0" onClick = {()=>displayModal()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round" className="feather feather-filter" aria-hidden="true">
                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                    </svg><span className="visually-hidden">Filter</span>
                </button>
            </div>
        </header>

        <main className="page">
            <h1 className="page-title">Pokédex <span>({totalPokemon})</span></h1>
            <div className="page-content">
                    <PokeCard pokemon={pokeData} loading={loading} checkbox={displayCompare}/>
                    {loading ?  <div className="text-center">loading data ...</div> : "" }
                    {noData ? <div className="text-center">no data anymore ...</div> : "" }  
            </div>
            
            {/* modal section */}

            <section id="modal-filter" className={showFilter === true ? "modal modal--active" : "modal "} role="dialog" aria-labelledby="modal-filter-title"
                aria-modal="true">
                <header className="header ">
                    <div className="header__left">
                        <button className="button button-icon  " onClick={() => displayModal()}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left"
                                aria-hidden="true">
                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                <polyline points="12 19 5 12 12 5"></polyline>
                            </svg><span className="visually-hidden">Back</span>
                        </button>
                        <h2 id="modal-filter-title">Filter</h2>
                    </div>
                    <div className="header__right"></div>
                </header>
                <div className="modal-content">
                    <section className="modal-content__section">
                        <h3 className="modal-content__subtitle">By types</h3>
                        <div className="filter-types">
                            <label className="label-check "> <input type="checkbox"name="filter-by-type[]"/><span> bug</span></label>
                            <label className="label-check "> <input type="checkbox" name="filter-by-type[]"/><span> dragon</span></label>
                            <label className="label-check "> <input type="checkbox" name="filter-by-type[]"/><span> fairy</span></label>
                            <label className="label-check "> <input type="checkbox" name="filter-by-type[]"/><span> fire</span></label>
                            <label className="label-check "> <input type="checkbox" name="filter-by-type[]"/><span> ghost</span></label>
                            <label className="label-check "> <input type="checkbox" name="filter-by-type[]"/><span> ground</span></label>
                            <label className="label-check "> <input type="checkbox" name="filter-by-type[]"/><span> normal</span></label>
                            <label className="label-check "> <input type="checkbox" name="filter-by-type[]"/><span> psychic</span></label>
                            <label className="label-check "> <input type="checkbox" name="filter-by-type[]"/><span> steel</span></label>
                            <label className="label-check "> <input type="checkbox" name="filter-by-type[]"/><span> dark</span></label>
                            <label className="label-check "> <input type="checkbox" name="filter-by-type[]"/><span> electric</span></label>
                            <label className="label-check "> <input type="checkbox" name="filter-by-type[]"/><span> fighting</span></label>
                            <label className="label-check "> <input type="checkbox" name="filter-by-type[]"/><span> flying</span></label>
                            <label className="label-check "> <input type="checkbox" name="filter-by-type[]"/><span> grass</span></label>
                            <label className="label-check "> <input type="checkbox" name="filter-by-type[]"/><span> ice</span></label>
                            <label className="label-check "> <input type="checkbox" name="filter-by-type[]"/><span> poison</span></label>
                            <label className="label-check "> <input type="checkbox" name="filter-by-type[]"/><span> rock</span></label>
                            <label className="label-check "> <input type="checkbox" name="filter-by-type[]"/><span> water</span></label>
                        </div>
                    </section>
                    <section className="modal-content__section">
                        <h3 className="modal-content__subtitle">By Generation</h3>
                        <div className="filter-types">
                            <label className="label-check "><input type="checkbox" name="filter-by-gen[]"/><span>I</span></label>
                            <label className="label-check "><input type="checkbox" name="filter-by-gen[]"/><span>II</span></label>
                            <label className="label-check "><input type="checkbox" name="filter-by-gen[]"/><span>III</span></label>
                            <label className="label-check "><input type="checkbox" name="filter-by-gen[]"/><span>IV</span></label>
                            <label className="label-check "><input type="checkbox" name="filter-by-gen[]"/><span>V</span></label>
                            <label className="label-check "><input type="checkbox" name="filter-by-gen[]"/><span>VI</span></label>
                            <label className="label-check "><input type="checkbox" name="filter-by-gen[]"/><span>VII</span></label>
                            <label className="label-check "><input type="checkbox" name="filter-by-gen[]"/><span>VIII</span></label>
                        </div>
                    </section>
                </div>
                <footer className="modal-footer"><button className="button button-cta button-block" onClick={()=>filteredPokemon()}>Save filter</button></footer>
            </section>
            
            {displayCompare && 
            <ComparePane pokeCompare={pokeComp}/>
            }
        </main>
        </>
    )
}

export default PokeList;