"use server"
const { MongoClient, ServerApiVersion } = require('mongodb');

const bcrypt = require('bcrypt');

const connectDb = async (
    mongoAuthUser, mongoAuthPass,
    user, email, password,
    databaseName, collectionName, saltRounds) => {
const uri = `mongodb+srv://${mongoAuthUser}:${mongoAuthPass}@eui.w3an34n.mongodb.net/?retryWrites=true&w=majority&appName=EUI`;


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
    const isExist = await collection.findOne({"email": email})
    if (isExist) {
      throw new Error("UserAlreadyExistsEmail")
    }

    const isExistUser = await collection.findOne({"_id": user})
    if (isExistUser) {
      throw new Error("UserAlreadyExistsUser")
    }
    
    const result = await collection.insertOne({"username": user, "email": email, "password": await hashPassword(password), "location": "European"})
    
  } finally {

    await client.close();
  }
}


export default connectDb
