import prisma from "@/utils/db/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcrypt'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'POST') {
      const { email, password, phone, type, image, username, birthday } = req.body;

      // Memeriksa apakah email sudah ada
      const user = await prisma.user.findMany({
        where: { email }
      });

      if (user.length > 0) {
        return res.status(409).json({ message: 'Conflict: Email already exists' });
      }

      // Mengenkripsi password
      const hashedPassword = await bcrypt.hash(password as string, 10);

      // Menyimpan pengguna baru ke database dengan password yang di-hash
      await prisma.user.create({
        data: { email, password: hashedPassword, phone, username, type, image, birthday }
      });

      res.status(200).json({ message: 'User created successfully' });
    } else {
      res.status(405).json({ message: 'Method Not Allowed: Only POST requests are allowed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export default handler;
