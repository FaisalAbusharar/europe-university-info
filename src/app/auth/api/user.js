const bcrypt = require('bcryptjs')
const connectDB = require('./database')


const createUser = async (email, password) => {
    const db = await connectDB();
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await db.collection('users').insertOne({email, password: hashedPassword})
    return result
};


const findUserByUser = async (email) => {
    const db = await connectDB();
    const user = await db.collection('users').findOne({email})
    return user;
}

const validatePassword = async (inputPassword, storedPassword) => {
    return await bcrypt.compare(inputPassword, storedPassword)
}

module.exports = {
    createUser, findUserByUser, validatePassword
}