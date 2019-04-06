const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const datafeedSchema = new Schema({
    initials: String,
    reputation: Number,
    upTime: Number,
    dataAccess: Array,
    nodarized: Boolean
} , {
    timestamps: true
});

scoreSchema.pre('save', function(next) {
    this.initials = this.initials.substr(0, 3).toUpperCase();
    next();
  });

module.exports = mongoose.model('DataFeed', datafeedSchema)