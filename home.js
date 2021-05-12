const { json } = require("body-parser");
const express = require("express");
const router = express.Router();

// Open the connection to the server
router.get('/user',  (req, res) => {
    res.status(200).json({
        message:[{
            name: "Anil",
            location: "Bangalore",
        },
        {
            name: "Anil2",
            location: "Bangalore",
        },
        {
            name: "Anil3",
            location: "Bangalore",
        },
        {
            name: "Anil4",
            location: "Bangalore",
        }]
    });
})
module.exports = router;
     