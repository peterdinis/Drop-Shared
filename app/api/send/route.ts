import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY as unknown as string);
      
      const { username } = req.body;
      const { data } = await resend.emails.send({
        from: '', // currentUser
        to: '', // email 
        subject: `New filed shared ${username}`, // file name
        html: `Username: ${username}`, // somehow get here image
      });

      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}