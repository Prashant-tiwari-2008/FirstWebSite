const mongoose = require('mongoose');
const { MONGODB_URL } = process.env;

//we have to import this file in app so we export this file
exports.connect = () => {
    mongoose.connect(MONGODB_URL).then(() => {
        console.log("DATABASE IS CONNECTED SUCCESSFULLY")
    }).catch((err) => {
        console.log(`DATABASE CONNECTION ERROR ${err}`)
    })
}


