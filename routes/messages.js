module.exports = app => {
  var MessagesController = app.controllers.messages;

  app.get('/send', MessagesController.create);
  app.get('/messages', MessagesController.retrieve);
}
