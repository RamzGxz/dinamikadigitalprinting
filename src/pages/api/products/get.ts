import retrieveData from "@/utils/db/service";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = [
    {
      name: "photocopy",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/fc.png",
      price: 300
    },
    {
      name: "print",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/printer.png",
      price: 1000
    },
    {
      name: "lamination",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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