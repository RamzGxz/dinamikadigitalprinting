import prisma from "@/utils/db/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query
  if (req.method === 'DELETE') {
    try {
      const resp = await prisma.user.delete({
        where: { id: String(id) }
      })
      if (resp?.id) {
        res.status(200).send('success delete!')
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