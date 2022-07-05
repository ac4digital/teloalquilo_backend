const mongoose = require('mongoose');
//const { Schema } = mongoose;

// SCHEMAS

const propertiesSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            //unique: true
        },
        id_owner: {
            type: String,
            //required: true
        },
        title: {
            type: String
        },
        price: {
            type: String
        },
        photos: {
            type: String
        },
        description: {
            type: String
        },
        zone: {
            type: String
        },
        city: {
            type: String
        },
        neighbord: {
            type: String
        },
        type: {
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false
    }  
)

// MODELS

const Properties = new mongoose.model('properties', propertiesSchema);

//module.exports = { Users };
module.exports = mongoose.model('Properties', propertiesSchema);
