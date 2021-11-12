const epok = require('./epok')
const ideal = require('./ideal')
const ladok = require('./ladok')

const express = require('express');
const router = express.Router();

//Get a list of all products
router.use('/epok', epok);
router.use('/ladok', ladok);
router.use('/ideal', ideal);

module.exports = router;