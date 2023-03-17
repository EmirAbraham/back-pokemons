const {Router} = require('express');
const {getPokemonsByName} = require('../controllers/index');
const router = Router();

router.get('/', getPokemonsByName)

module.exports = router;