import { register } from "@/utils/db/service";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === 'POST') {
    await register(req.body, ({ status, message }: { status: boolean, message: string }) => {
      if (status) {
        res.status(200).json({ status, message })
      } else {
        res.status(400).json({ status, message })
      }
    })
  } else {
    res.status(405).json({status:false, message: 'method not allowed!'})
  }
}