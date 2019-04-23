const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const dataFeedSchema = new Schema({
  pricePerCall: Number,
  creator: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  useCase: String,
  website: String, 
  endpoints: [{ type: Schema.Types.ObjectId, ref: 'Endpoint' }],
  apiKey: String
}, {
    timestamps: true
  });

module.exports = mongoose.model('DataFeed', dataFeedSchema)