import {useState, useEffect} from "react"

export default function PkmnOverview () {

  function handleChange (value) {
    console.log(value)
  }

  const [pkmnList, setPkmnList] = useState(<GetEveryPkmn />)

  return(
    <div className="main-grid-container">
      <h1 className="grid-element-1-2 heading">
        Pokedex
      </h1>
      <select id="searchGen" onChange={handleChange(this)}>
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
      {pkmnList}
    </div>
  )

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
      <div className="display-grid-container">
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

          let id

          if (singleData.id <= 151) {
            id = 'gen1'
          } else if (singleData.id <= 251) {
            id = 'gen2'
          } else if (singleData.id <= 386) {
            id = 'gen3'
          } else if (singleData.id <= 493) {
            id = 'gen4'
          } else if (singleData.id <= 649) {
            id = 'gen5'
          } else if (singleData.id <= 721) {
            id = 'gen6'
          } else if (singleData.id <= 809) {
            id = 'gen7'
          } else if (singleData.id <= 905) {
            id = 'gen8'
          } else {
            id = 'gen9'
          }

          setReturnData(
            <div className="display-container" id={id}>
              <div className="sprite-container">
                <img alt={name} src={singleData.sprites.front_default} />
              </div>
              <p className="name"><b>{name}</b></p>
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