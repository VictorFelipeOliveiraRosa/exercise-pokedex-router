import React from 'react';

import { useParams } from 'react-router-dom';
import pokemons from '../data/data';

const searchPokemonID = (id) => {
  const pokemon = pokemons.find((pokemon) => pokemon.id === Number(id));
  return pokemon;
};

const Details = () => {
  const { id } = useParams();
  const pokemon = searchPokemonID(id);
  const { name, type, averageWeight, image } = pokemon;
  return (
    <div className="pokemon">
      <div>
        <p>{name}</p>
        <p>{type}</p>
        <p>
          Average weight:{' '}
          {`${averageWeight.value} ${averageWeight.measurementUnit}`}
        </p>
      </div>
      <img src={image} alt={`${name} sprite`} />
    </div>
  );
};

export default Details;
