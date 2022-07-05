const express = require('express');
const settingsSchema = require('../models/settingsSchema');
const usersSchema = require('../models/usersSchema');
const router = express.Router();

// ROUTE INGRESAR USUARIO

router.get('/users/signin', (req, res) => {
    res.render('users/signin');
});

router.post('/users/signin', async (req, res) => {
    const { username, password} = req.body;
    res.send("Llego la peticion");
    const userName = await usersSchema.find({"username": username});
    
    if (userName) {
        console.log("Si existe el usuario");
        console.log(userName);
        /*const passWord = await usersSchema.find({"password": password});
        if (passWord == password) {
            console.log("El usuario esta logeado");
        };*/
    } else {
        console.log("No existe el usuario");
    };
});

// ROUTE REGISTRAR USUARIO

router.get('/users/signup', (req, res) => {
    res.render('users/signup');
});

router.post('/users/signup', async (req, res) => {
    //res.render('users/signup');
    const { username, name, lastname, email, phone, password, password_repeat } = req.body;
    //console.log(req.body);
    const errors = [];
    if ( password != password_repeat) {
        errors.push({text: 'Las contraseñas no coinciden'});
    };
    /*
    const userName = await usersSchema.find({"username": username});
    console.log(userName);
    if (userName == username) {
        errors.push({text: 'El usuario ya existe'});
    };
    const emailUser = await usersSchema.find({"email": email});
        if (!emailUser) {
            console.log(emailUser);
            console.log(email);
            errors.push({text: 'El email ya existe en la base de datos'});
        };
    */
    if (errors.length > 0) {
        console.log(errors);
        //res.render('users/signup', {errors, username, name, lastname, email, phone, password, password_repeat});
    } else {
        const user = usersSchema(req.body);
        console.log(user);
        user
            .save()
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }));
        //res.redirect('/profile');
    };
});

// ROUTE OBTENER TODOS LOS USUARIOS

router.get('/users', (req, res) => {
    const user = usersSchema(req.body);
    usersSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// ROUTE OBTENER UN USUARIO

router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    usersSchema
        .find( {"id": id} )
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// ROUTE ACTUALIZAR UN USUARIO

router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, lastname, email, phone} = req.body;
    usersSchema
        .updateOne( {"id": id}, { $set: { name, lastname, email, phone}})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// ROUTE ELIMINAR UN USUARIO

router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    usersSchema
        .deleteOne( {"id": id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;