import jwt from 'jsonwebtoken';

export const generateToken = (user, time) => {
  const payload = {
    idToken: user._id,
    username: user.username,
    email: user.email,
    password: user.password,
    location: user.location
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: time,
  });

  return token;
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};