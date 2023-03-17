const { Pokemon, Type, Op } = require('../db');
const { getPokemons } = require('./getPokemons')

const getPokemonsByName = async (req, res) => {
    const { name } = req.query
    const allPokemons = await getPokemons()
    try {
        if (name) {
            const filteredPokemons = allPokemons.filter(pokemon => {
                return pokemon.name.toLowerCase().includes(name.toLowerCase());
            });
            console.log(filteredPokemons);
            res.status(200).json(filteredPokemons);
        } else {
            res.status(404).send("hola")
        }
    } catch (error) {
        res.status(200).send(error.message)
    }
}

module.exports = { getPokemonsByName }