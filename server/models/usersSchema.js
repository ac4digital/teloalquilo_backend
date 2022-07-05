const mongoose = require('mongoose');

// SCHEMAS

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            require: true
        },
        name: {
            type: String,
            require: true
        },
        lastname: {
            type: String,
            require: true
        },
        email: {
            type: String,
            unique: true,
            require: true
        },
        phone: {
            type: String,
            default: '123-456-789'
        },
        password: {
            type: String,
            default: ''
        }
    },
    {
        timestamps: true,
        versionKey: false
    }  
)

// MODELS

//const Users = new mongoose.model('users', usersSchema);
const User = new mongoose.model('users', userSchema);

//module.exports = { Users };
module.exports = mongoose.model('User', userSchema);


/*
Users.create(
    {
    id: '2',
    user: 'martincatano',
    name: 'Martin',
    lastname: 'Cataño',
    email: 'mcatano@ac4digital.com'
    }
);

Users.create(
    {
    id: '1',
    user: 'andrescatano',
    name: 'Andres',
    lastname: 'Cataño',
    email: 'acatano@ac4digital.com',
    phone: '3154172456'
    }
);

Users.create(
    {
    id: '3',
    user: 'fannymora',
    name: 'Fanny',
    lastname: 'Mora',
    email: 'fmora@ac4digital.com',
    phone: '3185894739'
    }
);
*/