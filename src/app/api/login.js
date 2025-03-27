"use server"
const { MongoClient, ServerApiVersion } = require('mongodb');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
import { generateToken } from '../lib/jwt';


const loginDatabase = async (
    mongoAuthUser, mongoAuthPass,
    user, password,
    databaseName, collectionName) => {


const uri = `mongodb+srv://${mongoAuthUser}:${mongoAuthPass}@eui.w3an34n.mongodb.net/?retryWrites=true&w=majority&appName=EUI`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



const db = client.db(databaseName);
const collection = db.collection(collectionName)


  try {

    await client.connect();
    try {
        const result = await collection.findOne({"_id": user}) || await collection.findOne({"email": user})
        if (!result) {
            throw new Error("UserNotFound")
        }
        const isMatch = await bcrypt.compare(password, result.password)
        if (!isMatch) {
            throw new Error('InvalidCredentials');
        }

       const token = generateToken(result, '5h');


       return token

    }
    catch (err) {
        throw err
        
    }


  } finally {

    await client.close();
  }
}
    


export default loginDatabase