"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_Instance = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
class SQL_Instance {
    constructor() {
        this.connection = mysql2_1.default.createConnection({
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
            }
            else {
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
            }
            else {
                console.log(result);
            }
        });
    }
    insertUser(userData) {
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
}
exports.SQL_Instance = SQL_Instance;
// console.log(connection);
