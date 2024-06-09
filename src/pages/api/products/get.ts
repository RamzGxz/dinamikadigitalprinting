import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = [
    {
      name: "photocopy",
      description: "Perangkat yang digunakan untuk menduplikasi dokumen, laporan, dan bahan kertas lainnya.",
      image: "/fc.png",
      price: 300
    },
    {
      name: "print",
      description: "printer multifungsi yang dapat mencetak, memindai, menyalin, dan mengirim faks.",
      image: "/printer.png",
      price: 1000
    },
    {
      name: "lamination",
      description: "Laminasi adalah proses yang melibatkan pemasukan dokumen atau barang lain ke dalam kantong plastik pelindung.",
      image: "/banner.png",
      price: 6000
    }
  ]

  return (
    res.status(200).json({
      status: 200,
      data: data
    })
  );
};

export default handler;