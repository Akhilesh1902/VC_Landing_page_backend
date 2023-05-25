"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        this.connect();
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.connection.connect((err) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    }
                    else {
                        resolve('Successfully connected to Sql database ! ');
                        console.log('Successfully connected to Sql database ! ');
                    }
                });
            });
        });
    }
    showSchema() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            this.connection.query(`DESC ${this.tablename} ;`, (err, result, fields) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(result);
                }
            });
        });
    }
    insertUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Inserting new user');
            yield this.connect();
            this.connection.query(`INSERT INTO ${this.tablename} VALUES('${userData.name}','${userData.phone}','${userData.email}','${userData.message}','${userData.currentpage}','${userData.refUrl}','${userData.ipaddress}','${userData.addedon}');`, (err, res) => {
                if (err)
                    console.log({ err });
                if (res)
                    console.log({ res });
            });
        });
    }
}
exports.SQL_Instance = SQL_Instance;
