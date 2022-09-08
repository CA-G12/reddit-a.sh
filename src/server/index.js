const app = require('./app');

const port = app.get('port');

app.listen(port, () => {
  console.log(`SERVER IS RUNNING ON PORT ${port}`);
});
