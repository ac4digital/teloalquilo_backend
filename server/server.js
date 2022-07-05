require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = ('express-override');
const multer = require('multer');
require('./database/database_connection');
const userRoutes = require('./routes/users');
const loginRoutes = require('./routes/login');

const app = express();
const port = process.env.PORT || 4000;

// SETTINGS



app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine( {
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// MIDDLEWARE

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: storage,
    dest: path.join(__dirname, 'public/uploads'),
    limits: {fieldSize: 1000000},
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|gif/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb("Error: El archivo no es un tipo de imagen permitido");
    }
}).single('path_image');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(upload);
app.use(express.static(__dirname + "/public"));
//app.use(methodOverride('_method'));
/*
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUnitialized: true
}));
*/
/*
app.use('/api', userRoutes);
app.use('/api', loginRoutes);*/

app.use(require('./routes/login')); 
app.use(require('./routes/users')); 
app.use(require('./routes/index')); 
app.use(require('./routes/properties'));
app.use(require('./routes/contact'));

// ROUTES
/*
app.get('/', (req, res) => {
    res.send('Pagina de Inicio');
});
*/
app.get('*', (req, res) => {
    res.send('Ruta no encontrada');
});

// STATIC FILES
//app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || port, () => {
    console.log(`Server listening on port ${port}`);
});
