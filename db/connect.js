const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        let resp = await mongoose.connect(process.env.URL_MONGODB,
            {
                useCreateIndex: true,
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useFindAndModify: false,
            });
        console.log('Connect DB Successfully');
    } catch (err) {
        console.log(err);
        throw err;
    }
}

module.exports = {
    dbConnection
}