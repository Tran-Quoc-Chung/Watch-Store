const Sequelize = require('sequelize');

exports.sequelize = new Sequelize('WatchStore', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3307
});

exports.connectDB = async () => {
  try {
    await exports.sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
