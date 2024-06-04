import { productTypes } from "@/components/types/productTypes"
import Image from "next/image"


const ProductCard = ({name, description, image, price}: productTypes) => {
  return (
    <div className="w-full flex flex-col gap-4 justify-between items-center p-5 rounded-md border shadow">
      <Image src={image} alt="" width={200} height={100}/>
      <h1 className="font-bold text-4xl uppercase">{name}</h1>
      <p className="text-md text-center">{description}</p>
      <p className="font-bold px-3 py-1 bg-primary text-background rounded-full">Rp. {price} /item</p>
      <button className="w-full bg-accent text-background py-2 uppercase rounded-md mt-3 hover:bg-primary font-bold">Order Now!</button>
    </div>
  )
}

export default ProductCard