var mongoose = require('mongoose');

var single_connection;

var url = "mongodb://natansevero:12345@ds161162.mlab.com:61162/messages";

module.exports = app => {
  if(!single_connection) single_connection = mongoose.connect(url);

  return single_connection;
}
