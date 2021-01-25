import React from 'react';

import '../css/about.css';

class About extends React.Component {
  render() {
    return (
      <div>
        <div>
          <p>
            A Pokédex, também conhecida como Poké-Agenda no Brasil (e ainda como
            Dexter ou Dextette, dependendo da voz masculina ou feminina do
            aparelho) é uma enciclopédia virtual portátil de alta tecnologia que
            os treinadores Pokémon transportam para registra todas as espécies
            diferentes de Pokémon que são encontradas durante a sua viagem como
            treinadores. Em geral, quando são cumpridos determinados requisitos,
            a capacidade pode ser aumentada permitindo que a Pokédex possa
            armazenar dados de outros Pokémon, que não são comuns, assim como os
            Pokémon de outras regiões.
          </p>
        </div>
        <img
          src="https://plume.toucantoco.com/wp-content/uploads/2016/07/Capture-d%E2%80%99e%CC%81cran-2016-07-19-a%CC%80-15.27.31.png"
          alt="pokédex"
          width="500"
          height="400"
        />
      </div>
    );
  }
}

export default About;
