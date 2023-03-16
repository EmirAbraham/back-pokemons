const { Pokemon, Type } = require('../db');

const getDbPokemons = async (req, res) => {

        const dbPokemons = await Pokemon.findAll({
            include: {
                model: Type,
                attributes: ["name"],
                through: {
                    attributes: [],
                },
                raw: true,
            }
        })

        const formatedPokemon = dbPokemons?.map(pokemon => {
            return {
                id: pokemon.id,
                name: pokemon.name,
                attack: pokemon.attack,
                defense: pokemon.defense,
                speed: pokemon.speed,
                image: pokemon.image,
                hp: pokemon.hp,
                height: pokemon.height,
                weight: pokemon.weight,
                createInDb: pokemon.createInDb,
                type: pokemon.types?.map(type => type.name),
            }
        })
        return formatedPokemon
}

module.exports = { getDbPokemons }