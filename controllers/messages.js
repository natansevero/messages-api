module.exports = app => {
  var MessagesModel = app.models.messages;

  var MessagesController = {
    create: (req, res) => {
      MessagesController.create(req.body, (err, result) => {
        if(err) return res.status(500).json({ "Error": err })
        return res.status(200).json(result);
      })
    },

    retrieve: (req, res) => {
      MessagesController.find({}, (err, result) => {
        if(err) return res.status(500).json({ "Error": err })
        return res.status(200).json(result);
      })
    }
  }

  return MessagesController;
}