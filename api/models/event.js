const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, require:true },
    nameEvent: { type: String, require:true },
    dateEvent: { type: String },
    // dateEvent: { type: mongoose.Schema.Types.ObjectId, require:true, ref: 'dateEvents' },
    locationEvent: { type: String, require:true },
    timeEvent: { type: String, require:true },
    descriptionEvent: { type: String, require:true },
    image: { type: String },
    backgroundImage: { type: String },
    eventColorTitle: { type: String },
    eventColorDesc: { type: String },
    eventColorIcon: { type: String },
    eventColorText: { type: String },
    eventBackgroundColor: { type: String },
});


module.exports = mongoose.model('Events', eventSchema);

