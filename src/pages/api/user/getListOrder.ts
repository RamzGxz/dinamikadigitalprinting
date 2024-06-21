import prisma from "@/utils/db/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query
  if (req.method === 'GET') {
    try {
      const resp = await prisma.user.findMany({
        where: { id: String(id) }
      })
      if (resp[0].id) {
        res.status(200).json({
          orderList: resp[0].orderList
        })
      } else {
        res.status(404).json({
          message: 'ID not Found!!!'
        })
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({
        message: "Server Error",
        error
      })
    }
  } else {
    res.status(405).send('Method not Allowed!!')
  }
}

export default handler