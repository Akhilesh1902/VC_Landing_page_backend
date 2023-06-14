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
const sendNewUserMail = (data) => __awaiter(void 0, void 0, void 0, function* () {
    /* This code is creating a nodemailer transporter object that will be used to send an email. The
    transporter object is created using the `createTransport` method of the nodemailer module. The
    transporter object is configured with the SMTP settings required to send an email using a Gmail
    account. The SMTP settings include the host name, port number, authentication details, and
    security settings. The authentication details include the OAuth2 credentials required to
    authenticate the Gmail account. The transporter object is returned and stored in the
    `transporter` constant. */
    const transporter = nodemailer_1.default.createTransport({
        service: 'gmail',
        auth: {
            user: 'viscommercesite@gmail.com',
            pass: 'udvdjccqcaikmksv',
        },
    });
    let info = transporter.sendMail({
        from: 'viscommercesite@gmail.com',
        to: 'info@viscommerce.com',
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
    let userRes = transporter.sendMail({
        from: 'viscommercesite@gmail.com',
        to: data.email,
        subject: 'Welcome to Viscommerse',
        //text: JSON.stringify(data), // plain text body
        html: `
      <div>
        <p>Than you for Reaching out to VisCommerse Team, Our Executive will soon be in touch with you</p>
        </br>
        </br>
        <p>Thank You</p>
      </div>
      `, // html body
    }, (err) => {
        console.log(err);
    });
});
exports.sendNewUserMail = sendNewUserMail;
