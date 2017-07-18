module.exports = app => {
  var MessagesModel = app.models.messages;

  var MessagesController = {
    create: (req, res) => {
      var message = {
        user: req.query.user,
        message: req.query.message
      }

      MessagesModel.create(message, (err, result) => {
        if(err) return res.status(500).json({ "Error": err })
        return res.status(200).json(result);
      })
    },

    retrieve: (req, res) => {
      MessagesModel.find({}, (err, result) => {
        if(err) return res.status(500).json({ "Error": err })
        return res.status(200).json(result);
      })
    }
  }

  return MessagesController;
}
