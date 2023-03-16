const {Router} = require('express');
const {getPokemonsByName} = require('../controllers/index');
const router = Router();

router.get('/name', getPokemonsByName)

module.exports = router;