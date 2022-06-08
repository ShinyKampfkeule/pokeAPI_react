import {useState, useEffect} from "react"

export default function MainPage () {

  useEffect(() => {
    (async () => {
      await fetch('https://pokeapi.co/api/v2/pokemon?limit=898&offset=0')
        .then((res) => res.json())
        .then((data) => {
          setPokemonList(
            <form>
              <select name="pokemon" id="pokemon">
                <option value="Choose a Pokemon" key="0">Choose a Pokemon</option>
                {data.results.map((result, index) =>
                  <option value={result.name} key={index + 1}>{index + 1}: {result.name.charAt(0).toUpperCase() + result.name.slice(1)}</option>
                )}
              </select>
              <button onClick={(e) => {handleLoad(e)}}>Load</button>
            </form>
          )
        })
    })()
  }, [])

  const handleLoad = async (e) => {
    e.preventDefault()
    try {
      let req = document.getElementById("pokemon")
      await fetch(`https://pokeapi.co/api/v2/pokemon/${req.value}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          let shinyNumber = Math.floor(Math.random() * 4096)
          let rolledNumber = Math.floor(Math.random() * 4096)
          console.log(shinyNumber)
          console.log(rolledNumber)
          if (shinyNumber === rolledNumber) {
            setPokemonSprite(<img alt={req.value} src={data.sprites.other.home.front_shiny} />)
          } else {
            setPokemonSprite(<img alt={req.value} src={data.sprites.other.home.front_default} />)
          }
        })
    } catch (e) {
      console.log(e)
    } finally {
      console.log('Finished')
    }

  }

  const [pokemonData, setPokemonData] = useState()
  const [pokemonSprite, setPokemonSprite] = useState()
  const [pokemonList, setPokemonList] = useState()

  return (
    <div>
      {pokemonList}
      {pokemonSprite}
    </div>
  )

}