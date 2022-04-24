import * as React from 'react'
import getPokemon from "../data/get-pokemon"

type props = {
  pokemonId: number
}

type pokemonResponse = {
  species: { name: string },
  sprites: { front_default: string }
}

const pokemonInfo: React.FC<{ pokemonId: number }> = ({ pokemonId }: props) => {
  const [pokemon, setPokemon] = React.useState<pokemonResponse | undefined>(undefined)
  
  const getAndSetPokemon = async () => {
    await getPokemon(pokemonId).then(res => {
      setPokemon(res)
    });
  }

  getAndSetPokemon()

  if (!pokemon) return (<div>Loading</div>)

  return (
    <div>
      <h2>{pokemon.species.name}</h2>
      <img src={pokemon.sprites.front_default} alt=""/>
    </div>
  )
}

export default pokemonInfo;