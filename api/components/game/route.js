const express = require('express');
const gameController = require('./controller');

const router = express.Router();

router.get('/', gameController.getAllGames);

router.get('/error', gameController.getError);

module.exports = router;
