"use server"
const { MongoClient, ServerApiVersion } = require('mongodb');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const connectDb = async (
    mongoAuthUser, mongoAuthPass,
    user, password,
    databaseName, collectionName) => {
const uri = `mongodb+srv://${mongoAuthUser}:${mongoAuthPass}@vault.wsqakcv.mongodb.net/?retryWrites=true&w=majority&appName=Vault`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const hashPassword = async (password) => {
    return await bcrypt.hash(password, saltRounds);
  };
  

const db = client.db(databaseName);
const collection = db.collection(collectionName)

async function run() {
  try {
    await client.connect();
    const result = await collection.insertOne({"_id": user, "password": await hashPassword(password)})
    
  } finally {

    await client.close();
  }
}
    run().catch(console.dir);
}

export default connectDb