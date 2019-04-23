const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const jobSpecSchema = new Schema({
  cadence: String,
  nodes: [{ type: Schema.Types.ObjectId, ref: 'Node' }],
  qOne: String,
  qTwo: String,
  qThree: String,
  qFour: String,
  qFive: String,
  qSix: String,
  qSeven: String,
  qEight: String,
}, {
    timestamps: true
  });

module.exports = mongoose.model('EndPoint', jobSpecSchema)

