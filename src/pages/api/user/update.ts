import prisma from "@/utils/db/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  try {
    if (req.method === 'POST') {
      const userId = typeof id === "string" ? id : undefined;

      // Parse string JSON menjadi objek sebelum digunakan dalam operasi Prisma
      const bodyData = JSON.parse(req.body);

      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: bodyData,
      });
      res.status(200).json(updatedUser);
    } else {
      res.status(405).send('Method Not Allowed!');
    }
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Failed to update user." });
  }
};

export default handler;
