import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { userData } from './types';

export const sendNewUserMail = async (data: any) => {
  /* This code is creating a nodemailer transporter object that will be used to send an email. The
  transporter object is created using the `createTransport` method of the nodemailer module. The
  transporter object is configured with the SMTP settings required to send an email using a Gmail
  account. The SMTP settings include the host name, port number, authentication details, and
  security settings. The authentication details include the OAuth2 credentials required to
  authenticate the Gmail account. The transporter object is returned and stored in the
  `transporter` constant. */

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'viscommercesite@gmail.com',
      pass: 'udvdjccqcaikmksv',
    },
  } as SMTPTransport.Options);

  let info = transporter.sendMail(
    {
      from: 'viscommercesite@gmail.com', // sender address
      to: 'info@viscommerce.com', // list of receivers
      subject: 'New User From the Site', // Subject line
      text: JSON.stringify(data), // plain text body
      html: `
      <div>
      ${Object.keys(data).map((item) => `<p>${item} : ${data[`${item}`]}</p>`)}
      </div>
      `, // html body
    },
    (err) => {
      console.log(err);
    }
  );
  let userRes = transporter.sendMail(
    {
      from: 'viscommercesite@gmail.com', // sender address
      to: data.email, // list of receivers
      subject: 'Welcome to Viscommerse', // Subject line
      //text: JSON.stringify(data), // plain text body
      html: `
      <div>
        <p>Than you for Reaching out to VisCommerse Team, Our Executive will soon be in touch with you</p>
        </br>
        </br>
        <p>Thank You</p>
      </div>
      `, // html body
    },
    (err) => {
      console.log(err);
    }
  );
};
