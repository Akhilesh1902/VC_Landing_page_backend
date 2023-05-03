import express, { Request, Response } from 'express';
import { SQL_Instacnce } from '.';
import { sendNewUserMail } from './mailer';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('home Route');
});

router.post('/newContact', (req: Request, res: Response) => {
  console.log(req.body);
  SQL_Instacnce.insertUser(req.body);
  sendNewUserMail(req.body);
  res.send('response');
});

export default router;
