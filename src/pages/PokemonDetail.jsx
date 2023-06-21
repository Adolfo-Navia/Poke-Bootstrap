import { useState, useEffect } from 'react'

export const PokemonDetail = () => {
  const [pokemon, setPokemons] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(data => setPokemons(data.results))
      .catch(error => console.log(error))
  }, [])

  return (
    <div>PokemonDetail</div>
  )
}
