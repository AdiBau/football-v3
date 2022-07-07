const mongoose = require('mongoose')

const TeamSchema = new mongoose.Schema({
  TeamName: {
    type: String,
    required: [true, 'must provide Team Name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  TeamCode:{
    type: String,
    required: [true,'must provide Team code'],
    maxlength: [4, 'Code can not be more than 4 characters'],
  },
  Nationality: {
    type: String,
    required: [true,'must provide Nationality'],
    maxlength: [20, 'Nationality can not be more than 20 characters'],
  },
      })

module.exports = mongoose.model('Team', TeamSchema)
