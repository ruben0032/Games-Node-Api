const express = require('express');
const gameController = require('./controller');

const router = express.Router();

router.get('/', gameController.getAllGames);

router.post('/', gameController.postGame);

module.exports = router;
