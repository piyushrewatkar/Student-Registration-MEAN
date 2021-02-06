const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Username is required']
  },
  branch: {
    type: String,
    required: [true, 'Branch is required']
  }
})

module.exports = mongoose.model('Student', studentSchema);