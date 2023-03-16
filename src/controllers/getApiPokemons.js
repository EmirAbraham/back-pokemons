const axios = require('axios')

const getApiPokemons = async (req, res) => {
    const api = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
    const pokeUrl = [];
    api.data.results?.map((r) => {
      pokeUrl.push(axios.get(r.url).then((response) => response.data));
    }); 
  
    const pokeProps = Promise.all(pokeUrl).then(
      (
        response 
      ) =>
        response.map((p) => {
          return {
            id: p.id,
            name: p.name,
            image: p.sprites.other.dream_world.front_default,
            type: p.types?.map((r) => r.type.name),
            hp: p.stats[0].base_stat,
            attack: p.stats[1].base_stat,
            defense: p.stats[2].base_stat,
            speed: p.stats[3].base_stat,
            height: p.height,
            weight: p.weight,
          };
        })
    );
    return await pokeProps; 
}

module.exports = { getApiPokemons }