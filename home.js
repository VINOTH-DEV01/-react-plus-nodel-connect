const { json } = require("body-parser");
const express = require("express");
const router = express.Router();

// Open the connection to the server
router.get('/user',  (req, res) => {
    res.status(200).json({
        message:["Anil","Bangalore"]
    });
})
module.exports = router;
     