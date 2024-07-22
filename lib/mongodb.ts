import { MongoClient, MongoClientOptions } from 'mongodb';
const uri = `mongodb+srv://${process.env.NEXT_PUBLIC_MONGO_SECRET_NAME}:${process.env.NEXT_PUBLIC_MONGO_SECRET_PASS}@vault.wsqakcv.mongodb.net/?retryWrites=true&w=majority&appName=Vault`;


// Updated MongoClientOptions without deprecated properties
const options: MongoClientOptions = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable to prevent multiple connections
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(uri, options);
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  // In production mode, create a new client for each connection
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

