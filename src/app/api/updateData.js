"use server";
const { MongoClient, ServerApiVersion } = require('mongodb');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
import { generateToken } from '../lib/jwt';

const updateDatabase = async (
    mongoAuthUser, mongoAuthPass,
    user, whatToUpdate, updateValue,
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
  const collection = db.collection(collectionName);

  try {
    await client.connect();
    try {
      // Find the user by _id or email
      const result = await collection.findOne({ $or: [{ "username": user }, { "email": user }] });
      if (!result) {
        throw new Error("UserNotFound");
      }


      

      // Update the result object to reflect the new location, only if the update value is location
      if (whatToUpdate == 'location') {

        await collection.updateOne(
        { _id: result._id }, 
        { $set: { location: updateValue } } 
      );
      
        result["location"] = updateValue;
    }

    if (whatToUpdate == 'username') {
      await collection.updateOne(
        {_id: result._id},
        {$set: {username: updateValue}}
      )

      result["username"] = updateValue
    }

      // Generate a new token with the updated information
      const token = generateToken(result, '5h');

      return token;

    } catch (err) {
      throw err;
    }

  } finally {
    await client.close();
  }
};

export default updateDatabase;
