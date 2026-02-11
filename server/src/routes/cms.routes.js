const express = require('express');
const router = express.Router();
const CMSController = require('../controllers/cms.controller');

router.get('/:page', CMSController.getContent);
router.post('/:page', CMSController.saveContent);

module.exports = router;
