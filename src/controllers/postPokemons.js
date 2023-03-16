const { Pokemon, Type } = require('../db');

const postPokemons = async (req, res) => {
    const {name, image, attack, defense, hp, height, weight, speed, type} = req.body
    try {
        const newPokemon = await Pokemon.create({
            name: name,
            image: image,
            attack: attack,
            defense: defense,
            hp: hp,
            height: height,
            weight: weight,
            speed: speed,
            createInDb: true,
        })
        const dbType = await Type.findAll({where:{name:type}})
        await newPokemon.addType(dbType)
        res.status(200).send(newPokemon)
    } catch (error) {
        res.status(400).send("raza no creada")
    }
}

module.exports = { postPokemons }