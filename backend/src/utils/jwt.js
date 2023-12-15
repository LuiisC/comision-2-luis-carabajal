import jwt from 'jsonwebtoken';
import { env } from '../settings/envs.js';

export const createJWT = async ({ userId }) => {
  return new Promise((res, rej) => {
    jwt.sign(
      { userId },
      env.jwt_secret,
      (err, token) => {
        if (err) rej(err);
        res(token);
      }
    );
  });
};

export const verifyJWT = async ({ token }) => {
  return new Promise((res, rej) => {
    jwt.verify(token, env.jwt_secret, (err, decoded) => {
      if (err || !decoded.userId) rej('Invalid token');
      res(decoded);
    });
  });
};