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
exports.sendNewUserMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
// type transportOPtions = {
//   //
// };
const sendNewUserMail = (data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('sending mails');
    const transporter = nodemailer_1.default.createTransport({
        // host: 'smtp.ethereal.email',
        host: process.env.HOST_NAME,
        service: 'gmail',
        port: 465,
        secure: true,
        // port: 587,
        auth: {
            type: 'OAuth2',
            user: process.env.GMAIL_LOGIN_ID,
            pass: process.env.GMAIL_LOGIN_PASS,
            clientId: process.env.GMAIL_CLIENT_ID,
            clientSecret: process.env.GMAIL_CLIENT_SECRET,
            refreshToken: process.env.GMAIL_REFRESH_TOKEN,
            accessToken: process.env.GMAIL_ACCESS_TOKEN,
        },
    });
    let info = transporter.sendMail({
        from: 'spareakhil@gmail.com',
        to: 'akhil1922002@gmail.com',
        subject: 'New User From the Site',
        text: JSON.stringify(data),
        html: `
      <div>
      ${Object.keys(data).map((item) => `<p>${item} : ${data[`${item}`]}</p>`)}
      </div>
      `, // html body
    }, (err) => {
        console.log(err);
    });
});
exports.sendNewUserMail = sendNewUserMail;
