import React from "react";
import { useEffect, useState } from 'react';
import Pokemon from './Pokemon';
import Search from './Search';

const Results = () => {
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((res) => res.json())
      .then((pokemon) => {
        console.log(pokemon)
        return pokemon;
      })
      .then(setPokemonData)
  }, [pokemonId])

  const loadInPokemon = () => {
    if (pokemonData) {
      return <Pokemon pokemonData={pokemonData} />
    } else {
      return <p>Loading!</p>
    }
  }

  return (
    <main>
      <Search setPokemonId={setPokemonId} />
      {loadInPokemon()}
    </main>
  );
};

export default Results;
