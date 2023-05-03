import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

// type transportOPtions = {
//   //
// };

export const sendNewUserMail = async (data: any) => {
  const transporter = nodemailer.createTransport({
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
  } as SMTPTransport.Options);

  let info = transporter.sendMail(
    {
      from: 'spareakhil@gmail.com', // sender address
      to: 'rk@viscommerce.com', // list of receivers
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
};
