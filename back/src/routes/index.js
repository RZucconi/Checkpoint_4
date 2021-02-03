const express = require('express');
const admin = require('./admin');
const visitor = require('./visitor');
const royalAsset = require('./royalAsset');
const reservation = require('./reservation');
const royalFamily = require('./royalFamily');
const socialLink = require('./socialLink');

const router = express.Router();

router.use('/admin', admin);
router.use('/social-link', socialLink);
router.use('/visitor', visitor);
router.use('/royal-assets', royalAsset);
router.use('/reservation', reservation);
router.use('/royal-family', royalFamily);

module.exports = router;
