import { IUser, IToken } from '../interfaces';
import { connection, UserModel } from '../models';
import { messages } from '../helpers';
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
    const token = this.jwt.generateToken(newUser);
    return token;
  }

  public async login(username:string, password:string):Promise<IToken> {
    const foundUser = await this.model.getUserByName(username);
    if (!foundUser[0] || foundUser[0].password !== password) {
      const err = new Error(messages.USER_PASS_INVALID);
      throw err;
    }
    const token = this.jwt.generateToken(foundUser[0]);
    return token as IToken;
  }
}

export default UserServices;