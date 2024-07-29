/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['tsx', 'ts'],
    env: {
      mongoDatabaseUser: process.env.NEXT_PUBLIC_MONGO_SECRET_NAME,
      mongoDatabasePass: process.env.NEXT_PUBLIC_MONGO_SECRET_PASS,
      mongoDatabaseName: process.env.NEXT_PUBLIC_MONGO_DATABASE_NAME,
      mongoCollectionName: process.env.NEXT_PUBLIC_MONGO_COLLECTION_NAME
    }
  };
  
  export default nextConfig;
  