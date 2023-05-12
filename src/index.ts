import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import router from './routes';
import { SQL_Instance } from './database';
import cors from 'cors';
import bodyParser = require('body-parser');
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3030;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    origin: [
      'http://commercenexgen.com',
      'http://127.0.0.1:5173',
      'http://localhost:5173',
    ],
    methods: ['GET', 'POST'],
  })
);
app.use(router);

export const SQL_Instacnce = new SQL_Instance();

// const server = http.createServer(app,{})

app.listen(PORT, () => {
  console.log('server started running at port : ' + PORT);
});
