import prisma from "@/utils/db/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcrypt'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const { oldPassword, newPassword, type } = req.body;

  try {
    if (req.method === 'POST') {
      const userId = typeof id === "string" ? id : undefined;
      const oldPasswordUser = typeof oldPassword === 'string' ? oldPassword : undefined;

      // Cari pengguna berdasarkan ID
      const user = await prisma.user.findMany({ where: { id: userId } });

      // Jika pengguna tidak ditemukan, kirim respons 404
      if (user.length < 0) {
        return res.status(404).json({ error: "User not found." });
      }

      if (type === 'google') {
        const hashedNewPassword = await bcrypt.hash(newPassword, 10); // Tunggu hasil dari bcrypt.hash

        const resp = await prisma.user.update({
          where: { id: userId },
          data: { password: hashedNewPassword }
        });

        if (resp) {
          return res.status(200).json({ message: "success" });
        }
      } else {
        if (oldPasswordUser === undefined || newPassword === undefined) {
          return res.status(400).json({ error: "Old password or new password is missing." });
        }

        const isPasswordValid = await bcrypt.compare(oldPasswordUser, user[0].password);

        if (!isPasswordValid) {
          return res.status(400).json({ error: "Old password is incorrect." });
        }
      }

      const hashedNewPassword = await bcrypt.hash(newPassword, 10);

      // Lakukan operasi pembaruan password pengguna di database
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: { password: hashedNewPassword },
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
