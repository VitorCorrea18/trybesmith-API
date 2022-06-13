import { IUser, IToken, ErrorHandler } from '../interfaces';
import { connection, UserModel } from '../models';
import { httpStatus, messages } from '../helpers';
import { JWT } from '../utils';

class UserServices {
  public model: UserModel;

  public jwt: JWT;

  constructor() {
    this.model = new UserModel(connection);
    this.jwt = new JWT();
  }

  public async create(newUser: IUser) {
    await this.model.create(newUser);
    const token: IToken = this.jwt.generateToken(newUser);
    return token;
  }

  public async login(username:string, password:string) {
    const foundUser = await this.model.getUserByName(username);
    if (!foundUser[0] || foundUser[0].password !== password) {
      const err: ErrorHandler = {
        name: 'unauthorized', // a name is required for the error interface
        status: httpStatus.UNAUTHORIZED,
        message: messages.USER_PASS_INVALID,
      };
      throw err;
    }
    const token: IToken = this.jwt.generateToken(foundUser[0]);
    return token;
  }
}

export default UserServices;