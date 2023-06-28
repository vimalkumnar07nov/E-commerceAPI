const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

// uri = "mongodb+srv://vimalkumar07nov:bnPbaz3GeN46fp6J@ecomapi.erjq1ll.mongodb.net/ecomAPI?retryWrites=true&w=majority";

const connectDB = (uri) => {
    console.log("Hi, i am connected database");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    });
};

module.exports = connectDB;