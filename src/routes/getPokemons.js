const {Router} = require('express');
const {getPokemons} = require('../controllers/index');
const router = Router();

router.get('/', getPokemons)

module.exports = router;