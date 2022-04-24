import * as React from "react"
import PokemonInfo from "../../components/pokemon-info";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const pokemonPage = (props: any) => {
  const pokemonId = props.params.id
  return (
    <main style={pageStyles}>
      <PokemonInfo pokemonId={pokemonId} />
    </main>
  )
}

export default pokemonPage
