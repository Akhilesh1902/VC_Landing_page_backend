"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mailer_1 = require("./mailer");
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.send('home Route');
});
router.post('/newContact', (req, res) => {
    console.log(req.body);
    // SQL_Instacnce.insertUser(req.body);
    (0, mailer_1.sendNewUserMail)(req.body);
    res.send('response');
});
exports.default = router;
