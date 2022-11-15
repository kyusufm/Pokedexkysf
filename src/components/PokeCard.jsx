import React from "react";
import PokeInfo from "./PokeInfo";

const PokeCard = ({pokemon,loading}) => {
    return (
        <>
            {
                pokemon.map((item)=> {
                    return (
                        <>
                            <li className="grid-item" key={item.id} onClick={()=>PokeInfo(item)}>
                                <a href={'#/pokemon/'+item.name}>
                                    <article className={'pokemon-box bg-light bg-light--'+item.types[0].type.name}>
                                    <img className="pokemon-box__img"
                                        src={item.sprites.other["official-artwork"].front_default}
                                        alt={item.name} loading="lazy" width="82px" height="82px" />
                                    <p className="pokemon-box__number">#{item.id}</p>
                                    <h2 className="pokemon-box__name">{item.name}</h2>
                                    <figure className="pokemon-box__types">
                                        <figcaption className="visually-hidden">Types</figcaption>
                                        <ul className="pokemon-types">
                                            <li className={'pokemon-type bg bg--'+item.types[0].type.name}>{item.types[0].type.name}</li>
                                            {item.types[1] !== undefined && 
                                                
                                                <li className={'pokemon-type bg bg--'+item.types[1].type.name}>{item.types[1].type.name}</li>
                                            
                                            }
                                            
                                        </ul>
                                    </figure>
                                    </article>
                                </a>
                            </li>
                        </>
                    )
                })
            }

        </>
    )
}

export default PokeCard;