import mongoose from 'mongoose';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
};

mongoose.connect('mongodb://localhost/splitwise', options);

mongoose.connection.on("open", (ref) => {
    console.log("Connected to mongo server.");
});

mongoose.connection.on("error", (err) => {
    console.log("Could not connect to mongo server!",err);
});

export default mongoose;
