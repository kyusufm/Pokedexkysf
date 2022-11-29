import React from "react";
import {Link} from "react-router-dom"
import {useState} from "react"

function PokeCard ({pokemon,checkbox}){

    const [thisChecked] = useState([])
    
    return (
    <>
        <ul className="grid">
            {
            pokemon.map((item)=> {
            return (
            <li className="grid-item" key={item.id}  >
                {checkbox && (
                <button className="check" onClick={() => pokemon.setPokeOne({id:item.id,name:item.name})}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className={"feather "+thisChecked ? ("feather-check-square") : ("feather-square")}>
                        {thisChecked 
                        ?(
                        <>
                            <polyline points="9 11 12 14 22 4"></polyline>
                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </>
                        ):(
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        )
                        }
                    </svg>
                </button>
                )
                }
                <Link to={'/pokemon/'+item.name} >
                <article className={'pokemon-box bg-light bg-light--'+item.types[0].type.name}>
                    <img className="pokemon-box__img" src={item.sprites.other["official-artwork"].front_default}
                        alt={item.name} loading="lazy" width="82px" height="82px" />
                    <p className="pokemon-box__number">#{item.id}</p>
                    <h2 className="pokemon-box__name">{item.name}</h2>
                    <p className=" pokemon-box__number"> 
                    <small>Height: {item.height*10}cm ~ Weight: {item.weight/10}kg </small>
                    </p>
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
                </Link>
            </li>
            )
            })
            }
        </ul>
    </>
    )

}

export default PokeCard;