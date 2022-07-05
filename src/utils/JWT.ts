import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IUser, ErrorHandler } from '../interfaces';
import { httpStatus, messages } from '../helpers';

dotenv.config();

const jwtSecret:string = process.env.JWT_SECRET || 'BatinhaFrita123';
const jwtConfig:jwt.SignOptions = { 
  expiresIn: '7d',
  algorithm: 'HS256',
};

class JWT {
  public generateToken = (payload: IUser) => {
    const token = jwt.sign({ data: payload }, jwtSecret, jwtConfig);
    return { token };
  };

  public decodeToken = (token: string) => {
    try {
      const decoded = jwt.verify(token, jwtSecret) as JwtPayload;
      return decoded;
    } catch (error) {
      const err: ErrorHandler = {
        name: 'unauthorized', // a name is required for the error interface
        status: httpStatus.UNAUTHORIZED,
        message: messages.INVALID_TOKEN,
      };
      throw err;
    }
  };
}

export default JWT;