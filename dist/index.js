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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((0, cors_1.default)({
    origin: [
        'http://commercenexgen.com',
        'http://127.0.0.1:5173',
        // 'http://localhost:5173',
    ],
    methods: ['GET', 'POST'],
}));
app.use(routes_1.default);
exports.SQL_Instacnce = new database_1.SQL_Instance();
// const server = http.createServer(app,{})
app.listen(PORT, () => {
    console.log('server started running at port : ' + PORT);
});
