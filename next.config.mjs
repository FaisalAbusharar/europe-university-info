/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['tsx', 'ts'],
    env: {
      mongoDatabaseUser: process.env.NEXT_PUBLIC_MONGO_SECRET_NAME,
      mongoDatabasePass: process.env.NEXT_PUBLIC_MONGO_SECRET_PASS,
      mongoDatabaseName: process.env.NEXT_PUBLIC_MONGO_DATABASE_NAME,
      mongoCollectionName: process.env.NEXT_PUBLIC_MONGO_COLLECTION_NAME,
      saltRounds: process.env.NEXT_PUBLIC_MONGO_SALT_ROUNDS,
      JWT_SECRET: process.env.NEXT_PUBLIC_JWT_SECRET,
      GOOGLE_GENAI_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_GENAI_API_KEY,
    }
  };
  
  export default nextConfig;
  