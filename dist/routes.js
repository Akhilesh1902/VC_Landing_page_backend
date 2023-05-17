"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const _1 = require(".");
const mailer_1 = require("./mailer");
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.send('home Route');
});
router.post('/newContact', (req, res) => {
    console.log(req.body);
    /* `SQL_Instacnce.insertUser(req.body)` is inserting a new user into a SQL database using the
  `insertUser` method of the `SQL_Instacnce` object. */
    _1.SQL_Instacnce.insertUser(req.body);
    (0, mailer_1.sendNewUserMail)(req.body);
    res.send('response');
});
exports.default = router;
