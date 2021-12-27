const express = require('express');
const router = express.Router();

const { singUp,singIn } = require('../Controllers/user')


router.post("/signup",singUp);
router.post("/signin",singIn)

module.exports = router;