import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IUser } from '../interfaces';

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
}

export default JWT;