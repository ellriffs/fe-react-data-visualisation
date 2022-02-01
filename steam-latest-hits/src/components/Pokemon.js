import React from "react";
import { capitalise } from "../util/strings";
import { RadarChart } from "../util/RadarChart";
import '../styles/Pokemon.css';
import Moves from "./Moves";

function getPokemonImage(pokemon) {
  return pokemon.sprites.other["official-artwork"]["front_default"];
}

function Pokemon(props) {
  const { pokemonData } = props;
  const { moves, stats } = pokemonData;
  const name = capitalise(pokemonData.name);
  const image = getPokemonImage(pokemonData)
  return (
    <section className="Pokemon">
      <h2 className="Pokemon__name">{name}</h2>
      <p className="Pokemon__type">
        Type: {pokemonData.types.map(typeData => {
          return capitalise(typeData.type.name)
        }).join(', ')}
      </p>
      <img className="Pokemon__image" src={image} />
      <Moves moves={moves}/>
      <RadarChart stats={stats}/>
    </section>
  )
}

export default Pokemon;