// MONGOOSE MODULE TO CONNECT APP TO MONGODB

const mongoose = require('mongoose');

// ENVIRONMENT VARIABLES

const MONGODB_USER = process.env.MONGODB_USER;
const MONGODB_PWD = process.env.MONGODB_PWD;
const MONGODB_CLUSTER = process.env.MONGODB_CLUSTER;
const MONGODB_DB = process.env.MONGODB_DB;
const MONGODB_URI = `mongodb+srv://${MONGODB_USER}:${MONGODB_PWD}@${MONGODB_CLUSTER}.i7qnjbh.mongodb.net/${MONGODB_DB}?retryWrites=true&w=majority`;

// DATABASE CONNECTION

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(db => console.log(`Mongodb is connected to ${MONGODB_DB}`))
.catch(err => console.error(err));
