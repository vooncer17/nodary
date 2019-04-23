const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const nodeSchema = new Schema({
  contractAddress: String,
  reputation: String,
  collateral: String,
  verified: Boolean,
}, {
    timestamps: true
  });

module.exports = mongoose.model('Node', nodeSchema)