import { IUser } from '../interfaces';
import { connection, UserModel } from '../models';
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
}

export default UserServices;