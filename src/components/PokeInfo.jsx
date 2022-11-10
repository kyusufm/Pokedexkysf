import React from 'react';

const PokeInfo = () =>{
    return (
        <>
        <main class="page-detail bg-light bg-light--grass">
            <header class="header bg-light bg-light--grass">
                <div class="header__left"><a class="button button-icon  " href="#/"><svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"
                            class="feather feather-arrow-left">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg><span class="visually-hidden">Back</span></a></div>
                <div class="header__right"></div>
            </header>
            <p class="page-detail__subtitle" >#001</p>
            <div class="page-detail__title" >
                <h1>bulbasaur</h1>
            </div>
            <div >
                <figure class="page-detail__types">
                    <figcaption class="visually-hidden">Types</figcaption>
                    <ul class="pokemon-types">
                        <li class="pokemon-type bg bg--grass">grass</li>
                        <li class="pokemon-type bg bg--poison">poison</li>
                    </ul>
                </figure>
            </div>
            <div class="page-detail__img" ><img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                    alt="bulbasaur" loading="lazy"/></div>
            <div class="page-detail__panel">
                <div class="panel">
                    <div class="tabs">
                        <div class="tabs-list"><button class="tabs-list__item tabs-list__item--active" role="tab"
                                aria-selected="true" aria-controls="tab-panel-0" id="tab-0">About</button><button
                                class="tabs-list__item " role="tab" aria-selected="false" aria-controls="tab-panel-1"
                                id="tab-1">Base Stats</button><button class="tabs-list__item " role="tab"
                                aria-selected="false" aria-controls="tab-panel-2" id="tab-2">Evolution</button></div>
                        <div class="tab-panel tab-panel--active" role="tabpanel" id="tab-panel-0"
                            aria-labelledby="tab-0">
                            <article>
                                <h2 class="visually-hidden">About</h2>
                                <p class="pokemon-desc">A strange seed was
                                    planted on its
                                    back at birth.The plant sprouts
                                    and grows with
                                    this POKéMON.</p>
                                <dl class="list">
                                    <dt class="list-label">Height</dt>
                                    <dd class="list-value">2'4" (0.7 m)</dd>
                                    <dt class="list-label">Weight</dt>
                                    <dd class="list-value">15.2 lbs (6.9 kg)</dd>
                                    <dt class="list-label">Abilities</dt>
                                    <dd class="list-value">chlorophyll, overgrow</dd>
                                </dl>
                                <h3 class="panel-subtitle">Breeding</h3>
                                <dl class="list">
                                    <dt class="list-label">Gender</dt>
                                    <dd class="list-value">
                                        <div class="gender">
                                            <div class="gender-item"><span
                                                    class="gender__icon gender__icon--male">♂</span><span
                                                    class="gender__value">87.5%</span></div>
                                            <div class="gender-item"><span
                                                    class="gender__icon gender__icon--female">♀</span><span
                                                    class="gender__value">12.5%</span></div>
                                        </div>
                                    </dd>
                                    <dt class="list-label">Egg Groups</dt>
                                    <dd class="list-value">monster, plant</dd>
                                    <dt class="list-label">Egg Cycles</dt>
                                    <dd class="list-value">20 (5,100-5,140 steps)</dd>
                                </dl>
                            </article>
                        </div>
                        <div class="tab-panel " role="tabpanel" id="tab-panel-1" aria-labelledby="tab-1">
                            <ul>
                                <li>
                                    <figure class="statbar">
                                        <figcaption><span class="statbar__label">HP</span><span
                                                class="statbar__value">45</span></figcaption>
                                        <span class="statbar__bar"><span class="statbar__bar__value"
                                                ></span></span>
                                    </figure>
                                </li>
                                <li>
                                    <figure class="statbar">
                                        <figcaption><span class="statbar__label">Attack</span><span
                                                class="statbar__value">49</span>
                                        </figcaption><span class="statbar__bar"><span class="statbar__bar__value"
                                                ></span></span>
                                    </figure>
                                </li>
                                <li>
                                    <figure class="statbar">
                                        <figcaption><span class="statbar__label">Defense</span><span
                                                class="statbar__value">49</span>
                                        </figcaption><span class="statbar__bar"><span class="statbar__bar__value"
                                                ></span></span>
                                    </figure>
                                </li>
                                <li>
                                    <figure class="statbar">
                                        <figcaption><span class="statbar__label">Sp. Attack</span><span
                                                class="statbar__value">65</span>
                                        </figcaption><span class="statbar__bar"><span class="statbar__bar__value"
                                                ></span></span>
                                    </figure>
                                </li>
                                <li>
                                    <figure class="statbar">
                                        <figcaption><span class="statbar__label">Sp. Defense</span><span
                                                class="statbar__value">65</span>
                                        </figcaption><span class="statbar__bar"><span class="statbar__bar__value"
                                                ></span></span>
                                    </figure>
                                </li>
                                <li>
                                    <figure class="statbar">
                                        <figcaption><span class="statbar__label">Speed</span><span
                                                class="statbar__value">45</span></figcaption>
                                        <span class="statbar__bar"><span class="statbar__bar__value"
                                                ></span></span>
                                    </figure>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-panel " role="tabpanel" id="tab-panel-2" aria-labelledby="tab-2">
                            <figure class="ev">
                                <figcaption class="visually-hidden">Evolution Chain</figcaption>
                                <div class="ev__img">
                                    <p class="ev-desc">Level 16+</p>
                                    <div class="ev-chain">
                                        <div class="ev-chain__species ev-chain__species--active"><img
                                                class="ev-chain__species__img"
                                                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                                                alt="bulbasaur"/>
                                            <p class="ev-chain__species__name">bulbasaur</p>
                                        </div>
                                        <div class="ev-chain__arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" strokeLinecap="round" strokeLinejoin="round"
                                                class="feather feather-arrow-right">
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg></div><a class="ev-chain__species" href="#/pokemon/ivysaur"><img
                                                class="ev-chain__species__img"
                                                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
                                                alt="ivysaur"/>
                                            <p class="ev-chain__species__name">ivysaur</p>
                                        </a>
                                    </div>
                                    <p class="ev-desc">Level 32+</p>
                                    <div class="ev-chain"><a class="ev-chain__species" href="#/pokemon/ivysaur"><img
                                                class="ev-chain__species__img"
                                                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
                                                alt="ivysaur"/>
                                            <p class="ev-chain__species__name">ivysaur</p>
                                        </a>
                                        <div class="ev-chain__arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" strokeLinecap="round" strokeLinejoin="round"
                                                class="feather feather-arrow-right">
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg></div><a class="ev-chain__species" href="#/pokemon/venusaur"><img
                                                class="ev-chain__species__img"
                                                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
                                                alt="venusaur"/>
                                            <p class="ev-chain__species__name">venusaur</p>
                                        </a>
                                    </div>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

export default PokeInfo;