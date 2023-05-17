import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import router from './routes';
import { SQL_Instance } from './database';
import cors from 'cors';
import bodyParser = require('body-parser');
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3030;

/* These lines of code are configuring the Express app to use the `body-parser` middleware. The
`body-parser` middleware is used to parse the request body in HTTP requests. */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* This code is enabling Cross-Origin Resource Sharing (CORS) for the Express app. CORS is a security
feature implemented by web browsers to prevent web pages from making requests to a different domain
than the one that served the web page. By using the `cors` middleware, the Express app is allowing
requests from specified origins (`http://commercenexgen.com`, `http://127.0.0.1:5173`, and
`http://localhost:5173`) and methods (`GET` and `POST`). This allows the app to receive requests
from different domains and handle them appropriately. */
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
