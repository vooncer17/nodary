const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var commentSchema = new Schema({
  content: String,
  rating: { type: Number, min: 1, max: 5, default: 5 },
  creator: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, {
    timestamps: true
  });

const dataFeedSchema = new Schema({
  reputation: Number,
  upTime: Number,
  // nodarized: Boolean,
  // comments: [commentSchema],
  creator: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  subscribers: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, {
    timestamps: true
  });

module.exports = mongoose.model('DataFeed', dataFeedSchema)