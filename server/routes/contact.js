const router = require('express').Router();
//const router = express.Router();

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.post('/contact', (req, res) => {
    res.render('contact');
});

module.exports = router;