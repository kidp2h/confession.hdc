let mongoose = require("mongoose");
require('dotenv').config()

const URI = process.env.URI
let resultConnect = async () => {
    mongoose.connect(URI,{useNewUrlParser: true,  useUnifiedTopology: true });
}

module.exports = resultConnect;
