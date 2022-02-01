import React from "react";
import { RadarChart } from "../util/RadarChart";

function getPokemonImage(pokemon) {
  return pokemon.sprites.other["official-artwork"]["front_default"];
}

function Pokemon(props) {
  const { pokemonData } = props;
  const { name, stats } = pokemonData;
  const image = getPokemonImage(pokemonData)
  return (
    <section>
      <p>Name = {name}</p>
      <img src={image} />
      <ul>
        {stats.map((stat) => {
          return (
            <li key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          )
        })}
      </ul>
      <RadarChart stats={stats}/>
    </section>
  )
}

export default Pokemon;