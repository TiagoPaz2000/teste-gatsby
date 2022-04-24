type pokemonResponse = {
  species: { name: string }
}

const getPokemon = async (id: number) => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  return pokemon.json();
}

export default getPokemon;