const mongo = require('mongoose');

async function connect() {
    try {
        // mongoose.set("strictQuery", true);
        await mongo.connect('mongodb://0.0.0.0:27017/f8_education_dev'); //mongodb://localhost:27017 mongodb://localhost:27017/
        console.log('Connect Succesfully');
    } catch (error) {
        console.log('Connect falied ');
    }
}
module.exports = { connect };
