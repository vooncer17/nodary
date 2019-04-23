const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const endPointSchema = new Schema({
  method: String,
  address: String,
  canonicalData: String,
  transformFn: [transformSchema],
  jobSpec: [{ type: Schema.Types.ObjectId, ref: 'JobSpec' }],
  tsform: [{ type: Schema.Types.ObjectId, ref: 'Transform' }]
}, {
    timestamps: true
  });

module.exports = mongoose.model('Endpoint', endPointSchema)

