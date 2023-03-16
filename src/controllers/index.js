const { getPokemons } = require('./getPokemons.js');
const { getPokemonsById } = require('./getPokemonsById.js');
const { getPokemonsByName } = require('./getPokemonsByName.js');
const { getTypes } = require('./getTypes.js');
const { postPokemons } = require('./postPokemons.js');

module.exports = { getPokemons, getPokemonsById, getPokemonsByName, getTypes, postPokemons }