import React from 'react';
import './Pokecard.css';

const POKE_API = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;

/** Show an individual Pokémon card */

const Pokecard = (props) => {
  let imageSrc = `${POKE_API}${props.id}.png`;

  return (
    <div className="Pokecard">
      <div className='Pokecard-title'>{props.name}</div>
      <img className='Pokecard-image' alt={props.name} src={imageSrc} />
      <div className='Pokecard-data'>Type : {props.type}</div>
      <div className='Pokecard-data'>EXP: {props.exp}</div>
    </div>
  );
}

export default Pokecard;
