import { productTypes } from "@/components/types/productTypes"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

const ProductCard = ({ name, description, image, price }: productTypes) => {
  const { data } = useSession()
  const { push } = useRouter()
  const handleClick = () => {
    if (data) {
      return
    } else {
      push('/auth/login')
    }
  }

  return (
    <div className="w-full flex flex-col gap-4 justify-between items-center p-5 rounded-md border shadow">
      <Image src={image} alt="" width={200} height={100} fetchPriority="high" />
      <h1 className="font-bold text-4xl uppercase">{name}</h1>
      <p className="text-md text-center">{description}</p>
      <p className="font-bold px-3 py-1 bg-primary text-background rounded-full">Rp. {price} <span className="text-xs">/item</span> </p>
      <button onClick={handleClick} id={`order${name}`} name={name} className="w-full bg-secondary text-background py-2 uppercase rounded-md mt-3 hover:bg-primary font-bold">Order Now!</button>
    </div>
  )
}

export default ProductCard