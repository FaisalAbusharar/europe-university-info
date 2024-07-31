"use server"
const { MongoClient, ServerApiVersion } = require('mongodb');

const bcrypt = require('bcrypt');

const connectDb = async (
    mongoAuthUser, mongoAuthPass,
    user, password,
    databaseName, collectionName, saltRounds) => {
const uri = `mongodb+srv://${mongoAuthUser}:${mongoAuthPass}@vault.wsqakcv.mongodb.net/?retryWrites=true&w=majority&appName=Vault`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const hashPassword = async (password) => {
    return await bcrypt.hash(password, parseInt(saltRounds));
  };
  

const db = client.db(databaseName);
const collection = db.collection(collectionName)


  try {
    await client.connect();
    const isExist = await collection.findOne({"_id": user})
    if (isExist) {
      throw new Error("UserAlreadyExists")
    }
    const result = await collection.insertOne({"_id": user, "password": await hashPassword(password)})
    
  } finally {

    await client.close();
  }
}


export default connectDb