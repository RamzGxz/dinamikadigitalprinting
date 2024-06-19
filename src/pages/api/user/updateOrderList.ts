import prisma from "@/utils/db/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Pastikan hanya menerima metode POST atau PUT
  if (req.method !== 'POST' && req.method !== 'PUT') {
    return res.status(405).json({ msg: 'Method not allowed!' });
  }

  const { id } = req.query;

  // Validasi input
  if (!id || typeof id !== 'string') {
    return res.status(400).json({ msg: 'Invalid ID' });
  }

  if (!Array.isArray(req.body)) {
    return res.status(400).json({ msg: 'Invalid order list data' });
  }

  try {
    // Ambil data pengguna saat ini termasuk orderList dari database
    const user = await prisma.user.findUnique({
      where: { id: String(id) }
    });

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Gabungkan orderList yang ada dengan data baru
    const updatedOrderList = [...user.orderList, ...req.body];

    // Perbarui orderList di database
    await prisma.user.update({
      where: { id: String(id) },
      data: { orderList: updatedOrderList }
    });

    res.status(200).send('Order list updated successfully!');
  } catch (error) {
    console.error('Error updating order list:', error);
    res.status(500).json({
      msg: 'Internal server error!',
      error: error
    });
  }
};

export default handler