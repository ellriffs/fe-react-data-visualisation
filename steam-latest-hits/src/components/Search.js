import {useState, useEffect} from 'react';
import '../styles/Search.css'

const Search = (props) => {
  const [allPokemon, setAllPokemon] = useState([]);

  const {setPokemonId} = props;

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
      .then((response) => response.json())
      .then((data) => {
        setAllPokemon(() => {
          return data.results;
        });
      });
  }, []);

  const handleChange = (event) => {
    setPokemonId(+event.target.value)
  };

  return (
    <form className='Search'>
      <label>Choose your Pokemon:</label>
      <select className='Search__select' onChange={handleChange}>
        {allPokemon.map((pokemon) => {
          const pokeId = pokemon.url.split('/').slice(-2)[0];
          return (
            <option key={pokemon.name} value={pokeId}>
              {pokemon.name.toUpperCase()}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export default Search;
