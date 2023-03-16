const {Router} = require('express');
const {postPokemons} = require('../controllers/index');
const router = Router();

router.post('/', postPokemons)

module.exports = router;