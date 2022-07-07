const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
    Name: {
    type: String,
    required: [true, 'must provide player Name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
    LastName:{
    type: String,
    required: [true,'must provide player Last Name'],
    maxlength: [20, 'Last Name can not be more than 20 characters'],
  },
  Number: {
    type: Number,
    trim: true,
    required: [true,'must provide Number'],
    maxlength: [3, 'Number can not be more than 3 characters'],
  },
  TeamCode: {
    type: String,
    trim: true,
    required: [true,'must provide Team Code'],
    maxlength: [3, 'Team Code can not be more than 3 characters'],
  },



      })

module.exports = mongoose.model('Player', PlayerSchema)
