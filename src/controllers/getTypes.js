const { Pokemon, Type } = require('../db');
const axios = require('axios');

const getTypes = async (req, res) => {

    try {
            const response = await axios.get('https://pokeapi.co/api/v2/type');
            const types = response.data.results;
            const typeNames = [];
            for (let type of types) {
              let existingType = await Type.findOne({ where: { name: type.name } });
              if (existingType) {
                typeNames.push(existingType);
              } else {
                const newType = await Type.create({
                  name: type.name,
                });
                typeNames.push(newType);
              }
            }
            res.status(200).send(typeNames)
        } catch (error) {
            res.status(400).send(error.message)
    }
}

module.exports = { getTypes }