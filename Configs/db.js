const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
const connectDB = (uri) => {
    mongoose.connect(uri)
        .then(() => console.log('Connected to moviesDB'))
        .catch((error) => console.log(error));
}
const connection = mongoose.connection;
connection.once("open", () =>
    console.log('connetion established')
 )
module.exports = connectDB;
