const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.NEXT_PUBLIC_MONGO_SECRET_NAME}:${process.env.NEXT_PUBLIC_MONGO_SECRET_PASS}@vault.wsqakcv.mongodb.net/?retryWrites=true&w=majority&appName=Vault`;
let db

const connectDB = async () => {
    if (db) return db;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    db = client.db('your_database_name');
    return db;
  };
  
  module.exports = connectDB;




