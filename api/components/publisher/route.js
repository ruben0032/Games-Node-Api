const express = require('express');
const publisherController = require('./controller');

const router = express.Router();

router.get('/', publisherController.getPublishers);

router.post('/', publisherController.postPublisher);

module.exports = router;
