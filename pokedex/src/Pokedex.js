import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';


/** Index of Pokémon: show individual cards. */

const Pokedex = (props) => {
  let winMsg = null;
  if (props.isWinner) {
    winMsg = <p className='Pokedex-winner'>THIS HAND WINS!</p>;
  }

  return (
    <div className='Pokedex'>
      <h1 className='Pokedex-title'>Pokédex</h1>
      <div className='Pokedex-cards'>
        {props.pokemon.map(p => (
          <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
      <h4>Total experience: {props.exp}</h4>
      {winMsg}
    </div>
  );
}

export default Pokedex;
