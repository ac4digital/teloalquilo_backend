const express = require('express');
const usersSchema = require('../models/usersSchema');
const router = express.Router();

// ROUTE LOGEARSE EN LA APP

router.get('/login', (req, res) => {
    res.send("Login")
});

// ROUTE USUARIO EXISTENTE EN LA APP

router.get('/login/:user', (req, res) => {
    const { user } = req.params;
    usersSchema
        .find( {"user": user} )
        .then((data) => res.json(data))
        .catch((error) => res.json( { message: error }));
});

module.exports = router;