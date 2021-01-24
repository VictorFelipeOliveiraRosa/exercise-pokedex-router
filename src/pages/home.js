import React from 'react';

import pokemons from '../data/data';
import Pokedex from '../components/Pokedex';

const Home = (props) => <Pokedex {...props} pokemons={pokemons} />;

export default Home;
