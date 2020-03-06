import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("open", (ref) => {
    console.log("Connected to mongo server.");
});

mongoose.connection.on("error", (err) => {
    console.log("Could not connect to mongo server!",err);
});

module.exports = mongoose;
