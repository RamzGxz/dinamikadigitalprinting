import { NextApiRequest, NextApiResponse } from 'next';
import data from './data';
import { authMiddleware } from '../../../lib/authMiddleware';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({
    status: 200,
    data: data,
  });
};

export default handler;
