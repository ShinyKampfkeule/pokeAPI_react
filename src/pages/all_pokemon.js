import {useState, useEffect} from "react"
import {type} from "@testing-library/user-event/dist/type";

export default function PkmnOverview () {

  const handleChange = () => {
    console.log(document.getElementById('searchGen'))
  }

  const [pkmnList, setPkmnList] = useState(<GetEveryPkmn />)

  return(
    <div className="main-grid-container">
      <h1 className="grid-element-1-2 heading">
        Pokedex
      </h1>
      <form id="search">
        <select id="searchGen">
          <option value="all">All</option>
          <option value="gen-1">Gen-1</option>
          <option value="gen-2">Gen-2</option>
          <option value="gen-3">Gen-3</option>
          <option value="gen-4">Gen-4</option>
          <option value="gen-5">Gen-5</option>
          <option value="gen-6">Gen-6</option>
          <option value="gen-7">Gen-7</option>
          <option value="gen-8">Gen-8</option>
          <option value="gen-9">Gen-9</option>
        </select>
        <select id="searchType">
          <option value="all">All</option>
          <option value="grass">grass</option>
          <option value="water">water</option>
          <option value="flying">flying</option>
          <option value="dragon">dragon</option>
        </select>
        <button type="button" onClick={GetSearchResults}>Search</button>
      </form>
      {pkmnList}
    </div>
  )

}

function GetSearchResults () {
  let search = []
  let options = document.getElementById('search').children
  Object.keys(options).map((key) => {
    if (options[key].nodeName !== 'BUTTON') {
      console.log(options[key])
      console.log(options[key].value)
      if (options[key].value !== 'all') {
        search.push(options[key].value)
      }
    }
  })
  console.log(search)
  let pkmn = document.getElementById('pkmnContainer').children
  console.log(pkmn)
  console.log(pkmn[0]['__reactProps$12lkjoz034qh']['children'][2]['props']['value'])
  console.log(pkmn[0]['__reactProps$12lkjoz034qh']['className'].split(' ')[1])
  console.log(pkmn[0]['__reactProps$12lkjoz034qh']['children'][2]['props']['value']['id'])
  console.log(pkmn[0]['__reactProps$12lkjoz034qh']['children'][2]['props']['value']['types'][0]['type']['name'])
  
}

function GetEveryPkmn () {
  let pkmnList = []
  useEffect(() => {
    try {
      (async () => {
        await fetch('https://pokeapi.co/api/v2/pokemon?limit=898&offset=0')
          .then((res) => res.json())
          .then(async (data) => {
            setReturnData(<PkmnData data={data} />)
          })
      })()
    } catch (e) {
      console.log(e)
    } finally {
      console.log('Done')
    }
  }, [])

  const [returnData, setReturnData] = useState(<h1>Loading ...</h1>)

  return(returnData)

}

function PkmnData({data}) {
  return(
    <div className="grid-element-2-2">
      <div className="display-grid-container" id="pkmnContainer">
        {data.results.map((entry) =>
          <>
            <GetSinglePokemon entry={entry} />
          </>
        )}
      </div>
    </div>
  )
}

function GetSinglePokemon({entry}) {
  useEffect(() => {
    (async () => {
      await fetch(`${entry.url}`)
        .then((res) => res.json())
        .then((singleData) => {
          let name
          switch (singleData.name) {
            case 'giratina-altered':
              name = 'giratina'
              break
            case 'shaymin-land':
              name = 'shaymin'
              break
            case 'basculin-red-striped':
              name = 'basculin'
              break
            case 'darmanitan-standard':
              name = 'darmanitan'
              break
            case 'tornadus-incarnate':
              name = 'tornadus'
              break
            case 'thundurus-incarnate':
              name = 'thundurus'
              break
            case 'landorus-incarnate':
              name = 'landorus'
              break
            case 'keldeo-ordinary':
              name = 'keldeo'
              break
            case 'meloetta-aria':
              name = 'meloetta'
              break
            case 'meowstic-male':
              name = 'meowstic'
              break
            case 'aegislash-shield':
              name = 'aegislash'
              break
            case 'pumpkaboo-average':
              name = 'pumpkaboo'
              break
            case 'gourgeist-average':
              name = 'gourgeist'
              break
            case 'zygarde-50':
              name = 'zygarde'
              break
            case 'lycanroc-midday':
              name = 'lycanroc'
              break
            case 'wishiwashi-solo':
              name = 'wishiwashi'
              break
            case 'oricorio-baile':
              name = 'oricorio'
              break
            case 'minior-red-meteor':
              name = 'minior'
              break
            case 'mimikyu-disguised':
              name = 'mimikyu'
              break
            case 'indeedee-male':
              name = 'indeedee'
              break
            case 'morpeko-full-belly':
              name = 'morpeko'
              break
            case 'urshifu-single-strike':
              name = 'urshifu'
              break
            case 'eiscue-ice':
              name = 'eiscue'
              break
            default:
              name = singleData.name
          }

          let className

          if (singleData.id <= 151) {
            className = 'display-container gen1'
          } else if (singleData.id <= 251) {
            className = 'display-container gen2'
          } else if (singleData.id <= 386) {
            className = 'display-container gen3'
          } else if (singleData.id <= 493) {
            className = 'display-container gen4'
          } else if (singleData.id <= 649) {
            className = 'display-container gen5'
          } else if (singleData.id <= 721) {
            className = 'display-container gen6'
          } else if (singleData.id <= 809) {
            className = 'display-container gen7'
          } else if (singleData.id <= 905) {
            className = 'display-container gen8'
          } else {
            className = 'display-container gen9'
          }

          setReturnData(
            <div className={className} id={singleData.id}>
              <div className="sprite-container">
                <img alt={name} src={singleData.sprites.front_default} />
              </div>
              <p className="name"><b>{name}</b></p>
              <input type="hidden" value={singleData} />
            </div>
          )
      })
    })()
  }, [])

  const[returnData, setReturnData] = useState(<h1>Loading ...</h1>)

  return(
    <>
      {returnData}
    </>
  )
}