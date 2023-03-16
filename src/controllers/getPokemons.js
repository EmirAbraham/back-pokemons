const {getDbPokemons} = require('./getDbPokemons')
const {getApiPokemons} = require('./getApiPokemons')

const getPokemons = async (req, res) => {
    try {
        const apiPokemons = await getApiPokemons();
        const dbPokemons = await getDbPokemons();
        const pokemons = apiPokemons.concat(dbPokemons)
        res.status(200).send(pokemons)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = { getPokemons }