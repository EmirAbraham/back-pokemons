const {Router} = require('express');
const {getTypes} = require('../controllers/index');
const router = Router();

router.get('/', getTypes)

module.exports = router;