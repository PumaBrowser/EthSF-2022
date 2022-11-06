// @ts-ignore
import type { NextApiRequest, NextApiResponse } from 'next';
import { ERROR_MESSAGE } from 'src/constants';
import { File, Web3Storage } from 'web3.storage';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Invalid method!' });
  }

  if (!req.body) {
    return res.status(400).json({ success: false, message: 'Bad request!' });
  }
  // Prepare the file
  const payload = JSON.stringify(req.body);
  const buffer = Buffer.from(JSON.stringify(payload));

  const file = new File([buffer], 'hello.json', {
    type: 'application/json'
  });

  try {
    const client = new Web3Storage({ token: process.env.WEB3STORAGE_TOKEN as string });

    const cid = await client.put([file]);

    return res.status(200).json({ success: true, id: cid });
  } catch {
    return res.status(500).json({ success: false, message: ERROR_MESSAGE });
  }
};

export default handler;
