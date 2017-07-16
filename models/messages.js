var mongoose = require('mongoose');

module.exports = app => {
  var db = app.libs.db;
  var Schema = mongoose.Schema;

  var MessagesSchema = new Schema({
    user: { type: String, require: true },
    message: { type: String },
    data: { type: Date, default: Date.now }
  });

  return mongoose.model('messages', MessagesSchema);
}
