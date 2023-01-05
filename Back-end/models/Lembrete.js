const mongoose = require('mongoose')

// colection do mongodb
const LembreteSchema = new mongoose.Schema({
  lembrete: {
    type: String,
    require: true,
  },
  check: {
    type: Boolean,
    require: true,
  },

  data: {
    type: Date,
    default: Date.now() ,
  },
});

// exportar o model
module.exports = mongoose.model('Lembrete', LembreteSchema);
