import mysql from 'mysql2';
import { userData } from './types';

export class SQL_Instance {
  // this.connection : null
  connection: mysql.Connection;
  tablename: string;

  constructor() {
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'vcdatabase',
      // port: 3306,
      // insecureAuth: true,
    });
    this.tablename = 'viscommerce_table';

    this.connection.connect((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Successfully connected to Sql database ! ');
      }
    });
  }

  showSchema() {
    this.connection.query(`DESC ${this.tablename} ;`, (err, result, fields) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    });
  }
  insertUser(userData: userData) {
    console.log('Inserting new user');

    this.connection.query(
      `INSERT INTO ${this.tablename} VALUES('${userData.name}','${userData.phone}','${userData.email}','${userData.message}','${userData.currentpage}','${userData.refUrl}','${userData.ipaddress}','${userData.addedon}');`,
      (err, res) => {
        if (err) console.log({ err });
        if (res) console.log({ res });
      }
    );
  }
}
