import mysql from 'mysql2';
import { callbackify } from 'util';
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
    // this.showSchema();
    // this.insertUser({
    //   name: 'testUser',
    //   phone: '123123123',
    //   email: 'testemail@mail.com',
    //   message: 'test message',
    //   currentpage: 'test current page',
    //   refUrl: 'refurl.ocm',
    //   ipaddress: '1233-1231-1231-1312',
    //   addedon: '12312312312',
    // });
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
    console.log(`INSERT INTO ${this.tablename} VALUES(
      '${userData.name}',
      '${userData.phone}',
      '${userData.email}',
      '${userData.message}',
      '${userData.currentpage}',
      '${userData.refUrl}',
      '${userData.ipaddress}',
      '${userData.addedon}',
    );`);
    this.connection.query(`SELECT * from ${this.tablename}`, (err, res) => {
      console.log(res);
    });
    // this.connection.query(
    //   `INSERT INTO ${this.tablename} VALUES('${userData.name}','${userData.phone}','${userData.email}','${userData.message}','${userData.currentpage}','${userData.refUrl}','${userData.ipaddress}','${userData.addedon}');`,
    //   (err, res) => {
    //     if (err) console.log({ err });
    //     if (res) console.log({ res });
    //   }
    // );
  }

  // connection.connect((err) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log('connected');
  //     connection.query('DESC viscommerce_table ;', (err, result, fields) => {
  //       if (err) console.log(err);
  //       console.log({ result });
  //       // console.log({ fields });
  //     });
  //   }
  // });
}
// console.log(connection);
