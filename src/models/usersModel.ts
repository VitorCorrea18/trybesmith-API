import { Pool } from 'mysql2/promise';
import { ResultSetHeader } from 'mysql2';
import queries from './queries';
// import { IUser } from '../interfaces';

class UserModel {
  public connection:Pool;

  constructor(connection:Pool) {
    this.connection = connection;
  }

  public async create(username:string, classe:string, level:number, password:string) {
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(queries.createUser, [username, classe, level, password]);
    return insertId;
  }
}

export default UserModel;