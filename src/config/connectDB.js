const { Sequelize } = require('sequelize');


// Passing parameters separately (other dialects)
const sequelize = new Sequelize('huydz2', 'root', null, {
  host: 'localhost',
  dialect: 'mysql'
});

let connectDB = () => {
    sequelize.authenticate()
        .then(() => {
        console.log('Connection has been established successfully.');
        })
        .catch((error) => {
        console.error('Unable to connect to the database:', error);
        });

}

module.exports = connectDB;