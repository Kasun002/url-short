const mongoose = require( "mongoose");
const config =require ("config");

const db = config.get("mongodbUrl");
mongoose.set("strictQuery", false);
const dbConnector = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true
        });
    } catch (err) {
        process.exit(-1);
    }
};

module.exports =  { dbConnector };