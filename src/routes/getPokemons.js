const {Router} = require('express');
const {getPokemons} = require('../controllers/index');
const router = Router();

router.get('/', async (req, res) =>{
    try {
        const pokemons = await getPokemons()
        res.status(200).send(pokemons)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = router;