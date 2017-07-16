var mongoose = require('mongoose');

module.exports = app => {
  var db = app.libs.db;
  var Schema = mongoose.Schema;

  var ObjectSchema = new Schema({
    user: { type: String, require: true },
    message: { type: String },
    data: { type: Date, default: Date.now }
  });

  var MessagesSchema = new Schema({
    messages: [ ObjectSchema ]
  });

  return mongoose.model('messages', MessagesSchema);
}
