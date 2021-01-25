import React from 'react';
import { Link } from 'react-router-dom';

import '../css/pokemon.css';
import { Favorite } from './Favorite';

class Pokemon extends React.Component {
  render() {
    const { id, name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight:{' '}
            {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
          <Link to={`/pokemons/${id}`}>Mais detalhes</Link>
        </div>
        <Favorite idPokemon={id} />
        <img src={image} alt={`${name} sprite`} />
      </div>
    );
  }
}

export default Pokemon;
