// STEP-1 : IMPORT MONGOOSE PACKAGE
const mongoose = require('mongoose');

// Database Connection URL
const uri = "mongodb://cloudnative:CrizOP07@ac-ienuevu-shard-00-00.kffkreb.mongodb.net:27017,ac-ienuevu-shard-00-01.kffkreb.mongodb.net:27017,ac-ienuevu-shard-00-02.kffkreb.mongodb.net:27017/aupp?ssl=true&replicaSet=atlas-auwrve-shard-0&authSource=admin&appName=CloudNative";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    // STEP-2 : ESTABLISH CONNECTION WITH MONGODB DATABASE THROUGH MONGOOSE
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await mongoose.disconnect();
  }
}
run().catch(console.dir);

// STEP-3 : EXPORT MODULE mongoose because we need it in other JS file
module.exports = mongoose;
