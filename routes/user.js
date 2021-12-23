const express = require('express');
const router = express.Router();

const { singUp } = require('../Controllers/user')

router.post("/signUp", (req, res) => {
    const singUpResult = singUp(req.body)

})




//Exporting Routing modules
module.exports = router;