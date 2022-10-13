
export const getPokemon = async( limite, offSet) => {
  
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${ limite }&offset=${ offSet }`
    const resp = await fetch( url );
    const data  = await resp.json();
    
    return data.results

}
