const mongo = require('mongodb');

let client = new mongo.MongoClient("mongodb+srv://dbUser:"+process.env.dbpass+"@cluster0.amkya.mongodb.net/db?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = {
  getDb: async function() {
    await client.connect();
    return client.db('db');
  },
};