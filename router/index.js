const express = require('express');
const router = express.Router();
const auth = require('./auth');
const flight = require('./flight');
const remainder = require('./remainder');

router.use('/auth' , auth );
router.use('/flight' , flight );
router.use('/remainder' , remainder );

module.exports = router;

