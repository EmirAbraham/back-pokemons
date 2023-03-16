const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getPokemons = require('./getPokemons')
const getPokemonsById = require('./getPokemonsById')
const getPokemonsByName = require('./getPokemonsByName')
const postPokemons = require('./postPokemons')
const getTypes = require('./getTypes')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', getPokemons)
router.use('/pokemons', getPokemonsById)
router.use('/pokemons', getPokemonsByName)
router.use('/pokemons', postPokemons)
router.use('/types', getTypes)
module.exports = router;
