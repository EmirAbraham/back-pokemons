const { Pokemon, Type } = require('../db');
const axios = require('axios')
const getPokemonsById = async (req, res) => {
    const {id} = req.params
    try {
        if (isNaN(id)) {
            const pokeDb = await Pokemon.findByPk(id, {
                include: [
                    {
                        model: Type,
                        attributes: ['name'],
                        through: { attributes: [] } 
                    }
                ]
            })
            const pokemon = pokeDb.toJSON(); 
            pokemon.type = pokemon.types.map((type) => type.name); 
            delete pokemon.types; 
            res.status(200).send(pokemon);
        } else {
            const api = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`); 
            const dat = api.data
            const pokeApi = {
                name: dat.name,
                id: dat.id,
                height: dat.height,
                weight: dat.weight,
                type: dat.types?.map((r) => r.type.name),
                image: dat.sprites.other.dream_world.front_default,
                attack: dat.stats[1].base_stat,
                defense: dat.stats[2].base_stat,
                speed: dat.stats[3].base_stat,
                hp: dat.stats[0].base_stat,
            }
            res.status(200).send(pokeApi)
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = { getPokemonsById }