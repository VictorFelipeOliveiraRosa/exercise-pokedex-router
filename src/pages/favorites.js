import React from 'react';

import Pokemon from '../components/Pokemon';
// import Favorite from '../components/Favorite';

import pokemons from '../data/data';
import { localStorageLoad } from '../data/saveStorage';

const searchFavoritePokemons = () => {
  const arrFavorites = localStorageLoad();
  const pokeComp = pokemons.reduce((current, nextPokemon) => {
    if (arrFavorites.includes(nextPokemon.id)) {
      current = [...current, nextPokemon];
    }
    return current;
  }, []);
  return pokeComp;
};

export const Favorites = () => {
  const arrPokemons = searchFavoritePokemons();
  if (localStorageLoad().lenght === 0)
    return <h1>Não tem pokémon favorito!!</h1>;

  return (
    <div>
      {arrPokemons.map((pokemon) => (
        <Pokemon pokemon={pokemon} />
      ))}
    </div>
  );
};
