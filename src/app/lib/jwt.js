import jwt from 'jsonwebtoken';

export const generateToken = (user, time) => {
  const payload = {
    username: user._id,
    email: user.email,
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