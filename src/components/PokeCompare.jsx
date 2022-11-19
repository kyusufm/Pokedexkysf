import React from 'react';

import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import {Link} from "react-router-dom"
import axios from "axios";

//get path

const PokeInfo = () => {
    let {pokeOne, pokeTwo} = useParams();
    let pokeApi = `https://pokeapi.co/api/v2/pokemon/${pokeOne}`;
    let pokeApiTwo = `https://pokeapi.co/api/v2/pokemon/${pokeTwo}`;

    const [detailUrl, setDetailUrl] = useState([]);
    const [detailUrlTwo, setDetailUrlTwo] = useState([]);
    const [pokemonOne, setPokemonOne] = useState([]);
    const [pokemonTwo, setPokemonTwo] = useState([]);
    const [detail, setDetail] = useState([]);
    const [detailTwo, setDetailTwo] = useState([]);

    useEffect( () => {
        const getPokemon = async () => {
            const response = await axios.get(pokeApi)
            setPokemonOne(response.data)
            setDetailUrl(response.data.species.url)
            getPokemonDetail(response.data.species.url)

            const res = await axios.get(pokeApiTwo)
            setPokemonTwo(res.data)
            setDetailUrlTwo(res.data.species.url)
            getPokemonTwoDetail(res.data.species.url)
        }

        const getPokemonDetail = async (url) => {
            const response = await axios.get(url)
            setDetail(response.data)
        }

        const getPokemonTwoDetail = async (url) => {
            const response = await axios.get(url)
            setDetailTwo(response.data)
        }

        getPokemon();
    }, [detailUrl,pokeApi, pokeApiTwo]);
    
return (
<>
    {
    pokemonOne.name && detail && pokemonTwo.name
    ?(
        <>
    <header className="header ">
        <div className="header__left">
            <Link className="button button-icon"  to="/" >
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                <span className="visually-hidden">Back</span>
            </Link>
            <h1>Compare</h1>
        </div>
        <div className="header__right"></div>
    </header>

    <main className="page-compare">
        <div className="page-compare__summaries">
            <div className="summary">
                <img className="summary-img"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonOne.id}.png`}
                    alt="bulbasaur" loading="lazy" />
                <p className="summary-title">{pokemonOne.name}</p>
                <figure>
                    <figcaption className="visually-hidden">Types</figcaption>
                    <ul className="pokemon-types">
                        <li className={"pokemon-type bg bg--"+pokemonOne.types[0].type.name}>{pokemonOne.types[0].type.name}</li>
                        {pokemonOne.types[1] !== undefined &&
                            <li className={'pokemon-type bg bg--'+pokemonOne.types[1].type.name}>{pokemonOne.types[1].type.name}</li>
                            }

                    </ul>
                </figure>
            </div>
            <div className="summary"><img className="summary-img"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonTwo.id}.png`}
                    alt={pokemonTwo.name} loading="lazy" />
                <p className="summary-title">{pokemonTwo.name}</p>
                <figure>
                    <figcaption className="visually-hidden">Types</figcaption>
                    <ul className="pokemon-types">
                        <li className={"pokemon-type bg bg--"+pokemonTwo.types[0].type.name}>{pokemonTwo.types[0].type.name}</li>
                        {pokemonTwo.types[1] !== undefined &&
                            <li className={'pokemon-type bg bg--'+pokemonTwo.types[1].type.name}>{pokemonTwo.types[1].type.name}</li>
                            }

                    </ul>
                </figure>
            </div>
        </div>
        <section className="page-compare__section">
            <h2 className="page-compare__subtitle">Basic</h2>
            <table className="compare-table">
                <tbody>
                    <tr>
                        <td>Height</td>
                        <td>{pokemonOne.height} m</td>
                        <td>{pokemonTwo.height} m</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>{pokemonOne.weight/10} kg</td>
                        <td>{pokemonTwo.weight/10} kg</td>
                    </tr>
                </tbody>
            </table>
        </section>
        
        <section className="page-compare__section">
            <h2 className="page-compare__subtitle">Stats</h2>
            <div className="stats-compare">
                <div className="stats-compare__label">
                    <div className="stats-compare__value">{pokemonOne.stats[0].base_stat}</div>
                    <p className="stats-compare__name">HP</p>
                    <div className="stats-compare__value">{pokemonTwo.stats[0].base_stat}</div>
                </div>
                <div className="stats-compare__bars">
                    <div className="stats-compare__bar"><span className="stats-compare__bar__value" style={{width: pokemonOne.stats[0].base_stat/260*100+`%`}} ></span></div>
                    <div className="stats-compare__bar"><span className="stats-compare__bar__value" style={{width: pokemonTwo.stats[0].base_stat/260*100+`%`}} ></span></div>
                </div>
            </div>
            <div className="stats-compare">
                <div className="stats-compare__label">
                    <div className="stats-compare__value">{pokemonOne.stats[1].base_stat}</div>
                    <p className="stats-compare__name">Attack</p>
                    <div className="stats-compare__value">{pokemonTwo.stats[1].base_stat}</div>
                </div>
                <div className="stats-compare__bars">
                    <div className="stats-compare__bar"><span className="stats-compare__bar__value" style={{width: pokemonOne.stats[1].base_stat/260*100+`%`}}></span></div>
                    <div className="stats-compare__bar"><span className="stats-compare__bar__value" style={{width: pokemonTwo.stats[1].base_stat/260*100+`%`}} ></span></div>
                </div>
            </div>
            <div className="stats-compare">
                <div className="stats-compare__label">
                    <div className="stats-compare__value">{pokemonOne.stats[2].base_stat}</div>
                    <p className="stats-compare__name">Defense</p>
                    <div className="stats-compare__value">{pokemonTwo.stats[2].base_stat}</div>
                </div>
                <div className="stats-compare__bars">
                    <div className="stats-compare__bar"><span className="stats-compare__bar__value" style={{width: pokemonOne.stats[2].base_stat/260*100+`%`}}></span></div>
                    <div className="stats-compare__bar"><span className="stats-compare__bar__value" style={{width: pokemonTwo.stats[2].base_stat/260*100+`%`}}></span></div>
                </div>
            </div>
            <div className="stats-compare">
                <div className="stats-compare__label">
                    <div className="stats-compare__value">{pokemonOne.stats[3].base_stat}</div>
                    <p className="stats-compare__name">Sp. Attack</p>
                    <div className="stats-compare__value">{pokemonTwo.stats[3].base_stat}</div>
                </div>
                <div className="stats-compare__bars">
                    <div className="stats-compare__bar"><span className="stats-compare__bar__value" style={{width: pokemonOne.stats[3].base_stat/260*100+`%`}}></span></div>
                    <div className="stats-compare__bar"><span className="stats-compare__bar__value" style={{width: pokemonTwo.stats[3].base_stat/260*100+`%`}}></span></div>
                </div>
            </div>
            <div className="stats-compare">
                <div className="stats-compare__label">
                    <div className="stats-compare__value">{pokemonOne.stats[4].base_stat}</div>
                    <p className="stats-compare__name">Sp. Defense</p>
                    <div className="stats-compare__value">{pokemonTwo.stats[4].base_stat}</div>
                </div>
                <div className="stats-compare__bars">
                    <div className="stats-compare__bar"><span className="stats-compare__bar__value" style={{width: pokemonOne.stats[4].base_stat/260*100+`%`}}></span></div>
                    <div className="stats-compare__bar"><span className="stats-compare__bar__value" style={{width: pokemonTwo.stats[4].base_stat/260*100+`%`}} ></span></div>
                </div>
            </div>
            <div className="stats-compare">
                <div className="stats-compare__label">
                    <div className="stats-compare__value">{pokemonOne.stats[5].base_stat}</div>
                    <p className="stats-compare__name">Speed</p>
                    <div className="stats-compare__value">{pokemonTwo.stats[5].base_stat}</div>
                </div>
                <div className="stats-compare__bars">
                    <div className="stats-compare__bar"><span className="stats-compare__bar__value" style={{width: pokemonOne.stats[5].base_stat/260*100+`%`}}></span></div>
                    <div className="stats-compare__bar"><span className="stats-compare__bar__value" style={{width: pokemonTwo.stats[5].base_stat/260*100+`%`}}></span></div>
                </div>
            </div>
        </section>
    </main>
    </>
    ) : (
    "loading..."
    )
    }

</>
)


}

export default PokeInfo;