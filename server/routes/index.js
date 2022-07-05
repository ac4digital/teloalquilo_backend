const router = require('express').Router();
//const router = express.Router();

router.get('/', (req, res) => {
    imageList = [{ title: "Hermosa casa campestre para alquilar", beds: 4, bathrooms: 2, price: 1000000, zone: "Sur", neighbor: "Pance", city: "Cali", src: "/uploads/1.jpg" }, { src: "/uploads/2.jpg" }, { src: "/uploads/3.jpg" }, { src: "/uploads/4.jpg" }];
    res.render('index', { imageList: imageList });
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;