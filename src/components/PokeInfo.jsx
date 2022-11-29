import React from 'react';

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios";

//get path

const PokeInfo = () => {
    let { pokemon } = useParams();

    let pokeApi = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const [detailUrl, setDetailUrl] = useState([]);
    const [data, setData] = useState([]);
    const [detail, setDetail] = useState([]);

    const [activeTab, setActiveTab] = useState("tab1");
    const handleTab = (tab) => {
        setActiveTab(tab);
    };

    useEffect(() => {
        const getPokemon = async () => {
            const response = await axios.get(pokeApi)
            setData(response.data)
            setDetailUrl(response.data.species.url)
            getPokemonDetail(response.data.species.url)
        }
        const getPokemonDetail = async (url) => {
            const response = await axios.get(url)
            setDetail(response.data)
        }
        getPokemon();
    }, [detailUrl, pokeApi]);

    return (
        <>
            {
                data.name && detail
                    ? (
                        <main className={"page-detail bg-light bg-light--" + data.types[0].type.name}>
                            <header className={"header bg-light bg-light--" + data.types[0].type.name}>
                                <div className="header__left">
                                    <Link className="button button-icon  " to="/"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="feather feather-arrow-left">
                                        <line x1="19" y1="12" x2="5" y2="12"></line>
                                        <polyline points="12 19 5 12 12 5"></polyline>
                                    </svg><span className="visually-hidden">Back</span>
                                    </Link>
                                </div>
                                <div className="header__right"></div>
                            </header>
                            <p className="page-detail__subtitle" >#{data.id}</p>
                            <div className="page-detail__title" >
                                <h1>{data.name}</h1>
                            </div>
                            <div >
                                <figure className="page-detail__types">
                                    <figcaption className="visually-hidden">Types</figcaption>
                                    <ul className="pokemon-types">
                                        <li className="pokemon-type bg bg--grass">{data.types[0].type.name}</li>
                                        {
                                            data.types[1]
                                                ? (
                                                    <li className="pokemon-type bg bg--poison">{data.types[1].type.name}</li>
                                                ) : (
                                                    ""
                                                )
                                        }
                                    </ul>
                                </figure>
                            </div>
                            <div className="page-detail__img" >
                                <img
                                src={data.sprites.other["official-artwork"].front_default}
                                alt={data.name} loading="lazy" />
                                </div>
                            <div className="page-detail__panel">
                                <div className="panel">
                                    <div className="tabs">
                                        <div className="tabs-list">
                                            <button className={activeTab === "tab1" ? "tabs-list__item tabs-list__item--active" : "tabs-list__item "} role="tab"
                                                aria-selected="true" aria-controls="tab-panel-0" id="tab-0"
                                                onClick={() => handleTab("tab1")}
                                            >About</button>
                                            <button onClick={() => handleTab("tab2")} className={activeTab === "tab2" ? "tabs-list__item tabs-list__item--active" : "tabs-list__item "} role="tab" aria-selected="false" aria-controls="tab-panel-1"
                                                id="tab-1">Base Stats</button>
                                        </div>
                                        <div className={activeTab === "tab1" ? "tab-panel tab-panel--active" : "tab-panel "} role="tabpanel" id="tab-panel-0"
                                            aria-labelledby="tab-0">
                                            <article>
                                                <h2 className="visually-hidden">About</h2>
                                                <p className="pokemon-desc">{
                                                    detail.base_happiness > 0
                                                        ? (
                                                            detail.flavor_text_entries[0].flavor_text
                                                        ) : (
                                                            ""
                                                        )
                                                }</p>
                                                <dl className="list">
                                                    <dt className="list-label">Height</dt>
                                                    <dd className="list-value">{data.height / 10} m</dd>
                                                    <dt className="list-label">Weight</dt>
                                                    <dd className="list-value">{data.weight / 10}kg</dd>
                                                    <dt className="list-label">Abilities</dt>
                                                    <dd className="list-value">{data.abilities[0].ability.name}</dd>
                                                </dl>

                                            </article>
                                        </div>
                                        <div className={activeTab === "tab2" ? "tab-panel tab-panel--active" : "tab-panel "} role="tabpanel" id="tab-panel-1" aria-labelledby="tab-1">
                                            <ul>
                                                <li>
                                                    <figure className="statbar">
                                                        <figcaption>
                                                            <span className="statbar__label">HP</span>
                                                            <span className="statbar__value">{data.stats[0].base_stat}</span>
                                                        </figcaption>
                                                        <span className="statbar__bar">
                                                            <span className="statbar__bar__value" style={{ width: data.stats[0].base_stat / 260 * 100 + `%` }}></span>
                                                        </span>
                                                    </figure>
                                                </li>
                                                <li>
                                                    <figure className="statbar">
                                                        <figcaption><span className="statbar__label">Attack</span><span
                                                            className="statbar__value">{data.stats[1].base_stat}</span>
                                                        </figcaption><span className="statbar__bar"><span className="statbar__bar__value"
                                                        ></span></span>
                                                    </figure>
                                                </li>
                                                <li>
                                                    <figure className="statbar">
                                                        <figcaption><span className="statbar__label">Defense</span><span
                                                            className="statbar__value">{data.stats[2].base_stat}</span>
                                                        </figcaption><span className="statbar__bar"><span className="statbar__bar__value"
                                                        ></span></span>
                                                    </figure>
                                                </li>
                                                <li>
                                                    <figure className="statbar">
                                                        <figcaption><span className="statbar__label">Sp. Attack</span><span
                                                            className="statbar__value">{data.stats[3].base_stat}</span>
                                                        </figcaption><span className="statbar__bar"><span className="statbar__bar__value"
                                                        ></span></span>
                                                    </figure>
                                                </li>
                                                <li>
                                                    <figure className="statbar">
                                                        <figcaption><span className="statbar__label">Sp. Defense</span><span
                                                            className="statbar__value">{data.stats[4].base_stat}</span>
                                                        </figcaption><span className="statbar__bar"><span className="statbar__bar__value"
                                                        ></span></span>
                                                    </figure>
                                                </li>
                                                <li>
                                                    <figure className="statbar">
                                                        <figcaption><span className="statbar__label">Speed</span><span
                                                            className="statbar__value">{data.stats[5].base_stat}</span></figcaption>
                                                        <span className="statbar__bar"><span className="statbar__bar__value"
                                                        ></span></span>
                                                    </figure>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </main>
                    ) : (
                        "loading..."
                    )
            }

        </>
    )


}

export default PokeInfo;