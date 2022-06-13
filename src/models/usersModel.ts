import { Pool } from 'mysql2/promise';
import { ResultSetHeader } from 'mysql2';
import queries from './queries';
import { IUser } from '../interfaces';

class UserModel {
  public connection:Pool;

  constructor(connection:Pool) {
    this.connection = connection;
  }

  public async create(newUser: IUser) {
    const { username, classe, level, password } = newUser;
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(queries.createUser, [username, classe, level, password]);
    return insertId;
  }

  public async getUserById(id: number): Promise<IUser[]> {
    const [user] = await this.connection.execute(queries.getUserById, [id]);
    return user as IUser[];
  }
}

export default UserModel;