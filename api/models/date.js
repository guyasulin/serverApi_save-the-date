const mongoose = require('mongoose');

const dateEventSchema = mongoose.Schema({
  year: { type: Number },
  month: { type: Number },
  day: { type: Number },
});


module.exports = mongoose.model('dateEvents', dateEventSchema);

