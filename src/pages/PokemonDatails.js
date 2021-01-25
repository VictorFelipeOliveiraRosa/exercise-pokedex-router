import React from 'react';

// import { useParams } from 'react-router-dom';
import pokemons from '../data/data';
import { localStorageSave, localStorageLoad } from '../data/saveStorage';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
    };
  }

  searchPokemonID = (id) => {
    const pokemon = pokemons.find((pokemon) => pokemon.id === Number(id));
    return pokemon;
  };

  onChange = ({ target }) => {
    this.setState({ [target.name]: target.checked });
    localStorageSave(Number(target.value), target.checked);
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(localStorageLoad());
    this.setState(() => ({
      favorite: localStorageLoad().includes(Number(id)),
    }));
  }

  render() {
    const { id } = this.props.match.params;
    const pokemon = this.searchPokemonID(id);
    const {
      name,
      type,
      averageWeight,
      image,
      moreInfo,
      foundAt,
      summary,
    } = pokemon;
    return (
      <div>
        <div className="pokemon">
          <div>
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
        </div>
        <div>
          <div>
            <h2>Summary</h2>
            <h3>{summary}</h3>
          </div>
          <div>
            <span>Game location {name}</span>
          </div>
          <div>
            {foundAt.map((local) => (
              <div key={local.id}>
                <img src={local.map} alt={local.location} />
                <span>{local.location}</span>
              </div>
            ))}
            <div>
              <a href={moreInfo} target="__blank">
                Mais informação!
              </a>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="favorite">
            Favorite pokémon
            <input
              type="checkbox"
              value={id}
              name="favorite"
              checked={this.state.favorite}
              onChange={this.onChange}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default Details;
