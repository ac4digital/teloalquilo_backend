const express = require('express');
const router = express.Router();
const propertiesSchema = require('../models/propertiesSchema');


// ROUTE OBTENER TODAS LAS PROPIEDADES

router.get('/properties', (req, res) => {
    imageList = [{ title: "Hermosa casa campestre para alquilar", beds: 4, bathrooms: 2, price: 1000000, zone: "Sur", neighbor: "Pance", city: "Cali", src: "/uploads/1.jpg" }, { src: "/uploads/2.jpg" }, { src: "/uploads/3.jpg" }, { src: "/uploads/4.jpg" }];
    res.render('properties', { imageList: imageList });
    /*
    const user = propertiesSchema(req.body);
    propertiesSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
        */
});

// ROUTE REGISTRAR UNA PROPIEDAD

router.get('/properties/register', (req, res) => {
    res.render('properties/register');

});

// ROUTE REGISTRAR UNA PROPIEDAD

router.post('/properties/register', (req, res) => {
    //const { id, id_owner, title, price, photos, description, zone, city, neighbord, type } = req.body;
    console.log(req.file);
    res.send('Imagen subida');
    /*
    const { path_photo } = req.body;
    const property = propertiesSchema(req.body);
    console.log(path_image);
    */
    /*
    property
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
    */
});

// ROUTE DETALLES DE LA PROPIEDAD

router.get('/properties/details', (req, res) => {
    property_details = { title: "Hermosa casa campestre para alquilar", beds: 4, bathrooms: 2, price: 1000000, zone: "Sur", neighbor: "Pance", city: "Cali", src: "/uploads/1.jpg" };
    res.render('properties/details', { property_details });
    //res.send('Ruta detalles de la propiedad');
});

// ROUTE DETALLES DE LA PROPIEDAD

router.post('/properties/details', (req, res) => {
    //const { id, id_owner, title, price, photos, description, zone, city, neighbord, type } = req.body;
    console.log(req.file);
    res.send('Imagen subida');
    /*
    const { path_photo } = req.body;
    const property = propertiesSchema(req.body);
    console.log(path_image);
    */
    /*
    property
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
    */
});


module.exports = router;