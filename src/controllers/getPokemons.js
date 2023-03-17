const {getDbPokemons} = require('./getDbPokemons')
const {getApiPokemons} = require('./getApiPokemons')

const getPokemons = async (req, res) => {
        const apiPokemons = await getApiPokemons();
        const dbPokemons = await getDbPokemons();
        const pokemons = apiPokemons.concat(dbPokemons)
       return pokemons
}

module.exports = { getPokemons }