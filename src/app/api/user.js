import clientPromise from './database';
import bcrypt from 'bcryptjs';

export const createUser = async (username, password) => {
  const client = await clientPromise;
  const db = client.db();
  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await db.collection('users').insertOne({ username, password: hashedPassword });
  return result;
};

export const findUserByUsername = async (username) => {
  const client = await clientPromise;
  const db = client.db();
  const user = await db.collection('users').findOne({ username });
  return user;
};

export const validatePassword = async (inputPassword, storedPassword) => {
  return await bcrypt.compare(inputPassword, storedPassword);
};
