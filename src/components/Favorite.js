import React from 'react';
import { localStorageLoad } from '../data/saveStorage';

export const Favorite = ({ idPokemon }) => {
  const arrPokemonFavorite = localStorageLoad();
  const favorite = arrPokemonFavorite.includes(idPokemon);
  return (
    <div>
      {favorite ? (
        <img
          src="https://pt.seaicons.com/wp-content/uploads/2016/09/Places-favorites-icon.png"
          alt="favorito"
          width="20px"
          height="20px"
        />
      ) : (
        <></>
      )}
    </div>
  );
};
