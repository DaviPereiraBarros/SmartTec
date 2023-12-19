import { NextApiRequest, NextApiResponse } from 'next';
import { SMTPClient } from "emailjs"

export default async function SendEmail(req: NextApiRequest, res:NextApiResponse){
    
    const {messageBody} = req.body;

    const client = new SMTPClient({       
        user: process.env.EMAIL,
        password: process.env.PASSWORD,
        host: "smtp.gmail.com",
        ssl: true
    });

    try {
        const message = await client.sendAsync({
        text: messageBody,
		from: 'smarttech.servtec@gmail.com',
		to: 'smarttech.servtec@gmail.com',
		subject: 'Lead - LandingPage',
        });
        console.log(message);
    } catch (err) {
        console.error(err)
    }
   
    res.status(200).json({message:'Send Mail'})
}