// export default async function GetEveryPkmn () {
//   await fetch('https://pokeapi.co/api/v2/pokemon?limit=898&offset=0')
//     .then((res) => res.json())
//     .then(async (data) => {
//       console.log(data)
//     })
//
//   return(<p>Loaded</p>)
// }
//
// function PkmnData(data) {
//   console.log(data)
//   return(
//     <div>
//       {data.results.map((entry) => {
//         getSinglePokemon(entry)
//       })}
//     </div>
//   )
// }
//
// function getSinglePokemon(data) {
//   return(
//     <div>
//       <h1>{data.name}</h1>
//       {/*<img alt={data.name} />*/}
//     </div>
//   )
// }