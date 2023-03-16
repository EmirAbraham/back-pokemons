const {Router} = require('express');
const {getPokemonsById} = require('../controllers/index');
const router = Router();

router.get('/:id', getPokemonsById)

module.exports = router;