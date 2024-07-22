import { MongoClient } from 'mongodb';
const uri = `mongodb+srv://${process.env.NEXT_PUBLIC_MONGO_SECRET_NAME}:${process.env.NEXT_PUBLIC_MONGO_SECRET_PASS}@vault.wsqakcv.mongodb.net/?retryWrites=true&w=majority&appName=Vault`;
// lib/mongodb.js

const options = {};

let client;
let clientPromise;

if (!process.env.NEXT_PUBLIC_MONGO_SECRET_NAME) {
  throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable to preserve the client instance across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
