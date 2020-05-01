const app = require('./app');
const mongoose = require('mongoose');
const config = require('./config');

const connect = url => {
  return mongoose.connect(url, config.db.options);
};

if (require.main === module) {
  app.listen(config.port, () => console.log('App running on', config.port));
  connect(config.db.prod)
  .then((result) => {
    console.log("Connected To MongoDB on :", {
      Database: result.connection.name,
      Port: result.connection.port,
      Host: result.connection.host
    })

    result.connection.on('error' , (err) => console.error(err) )
  })
  .catch((err) => {
     console.error(err)
     process.exit(1)
  })


}

module.exports = { connect };
