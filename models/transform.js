const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const transFormSchema = new Schema({
  transformFunction: String,
}, {
    timestamps: true
  });

module.exports = mongoose.model('Transform', transFormSchema);