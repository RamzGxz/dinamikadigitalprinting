import { NextApiRequest, NextApiResponse } from "next";

// lib/authMiddleware.js
export const authMiddleware = (handler: Function) => async (req: NextApiRequest, res: NextApiResponse) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      status: 401,
      message: 'Sorry youre not authorize!',
    });
  }

  const token = authorization.split(' ')[1];

  if (!token || token !== process.env.NEXTAUTH_SECRET) {
    return res.status(403).json({
      status: 403,
      message: 'Invalid or missing token',
    });
  }

  return handler(req, res);
};
