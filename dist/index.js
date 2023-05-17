"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_Instacnce = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const database_1 = require("./database");
const cors_1 = __importDefault(require("cors"));
const bodyParser = require("body-parser");
dotenv_1.default.config();
const app = (0, express_1.default)();
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
app.use((0, cors_1.default)({
    origin: [
        'http://commercenexgen.com',
        'http://127.0.0.1:5173',
        'http://localhost:5173',
    ],
    methods: ['GET', 'POST'],
}));
app.use(routes_1.default);
exports.SQL_Instacnce = new database_1.SQL_Instance();
// const server = http.createServer(app,{})
app.listen(PORT, () => {
    console.log('server started running at port : ' + PORT);
});
