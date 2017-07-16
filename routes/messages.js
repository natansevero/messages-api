module.exports = app => {
  var MessagesController = app.controllers.messages;

  app.post('/send', MessagesController.create);
  app.get('/messages', MessagesController.retrieve);
}
