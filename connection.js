const mongoose = require("mongoose");


async function connectMongoDb(url) {
    return  mongoose.connect(url).then(()=>{
        console.log("Database connect successfully ")
     })
}

module.exports = {
    connectMongoDb,
};

'mongodb+srv://Try:Prejan@cluster0.manu3yk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'