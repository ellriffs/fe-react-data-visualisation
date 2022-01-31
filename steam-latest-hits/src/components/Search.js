import {useState, useEffect} from 'react';

const Search = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [selectedPokemonId, setSelectedPokemonId] = useState(1);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setAllPokemon(() => {
          return data.results;
        });
        console.log(allPokemon, '<<<<<< Pokemon Array');
      });
  }, []);

  const handleSubmit = (event) => {
    selectedPokemonId();
  };

  return (
    <form onSubmit={handleSubmit}>
      <select onChange={(event) => setSelectedPokemonId(+event.target.value)}>
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
