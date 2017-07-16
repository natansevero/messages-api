module.exports = app => {
  app.listen(app.get('port'), () => {
  	console.log(`App running in port ${app.get('port')}`);
  });
}
