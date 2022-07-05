const mongoose = require('mongoose');

// SCHEMAS

const settingsSchema = new mongoose.Schema(
    {
        current_user_id: {
            type: Number,
            unique: true
        },
        netx_user_id: {
            type: Number
        },

    },
    {
        timestamps: true,
        versionKey: false
    }  
)

// MODELS

const Users = new mongoose.model('settings', settingsSchema);

//module.exports = { Settings };
module.exports = mongoose.model('Settings', settingsSchema);
