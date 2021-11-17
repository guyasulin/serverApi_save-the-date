const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        require:true,
        unique: true,
        match:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    isadmin: { type: Boolean },
    phone: {
        type: String,
        require:true,
        match:  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    },
    password: { type: String, require:true },
    name: { type: String, require:true },
    nameEvent: { type: String, require:true },
    dateEvent: { type: String, require:true },
    locationEvent: { type: String, require:true },
    timeEvent: { type: String, require:true },
    descriptionEvent: { type: String, require:true },
    _eventId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Events' },
});


module.exports = mongoose.model('User', userSchema);

