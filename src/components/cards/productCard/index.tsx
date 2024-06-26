import { productTypes } from "@/types/productTypes"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/router"

const ProductCard = ({ name, description, image, price, id }: productTypes) => {
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
    <div data-aos={`${id === 1? 'fade-up': id===2 ? 'fade-down': 'fade-up'}`} data-aos-duration={`${id === 1? '300': id===2 ? '400': '500'}`} data-aos-delay={`${id === 1? '': id===2 ? '500': '1000'}`} className="w-full flex flex-col gap-4 justify-between items-center p-5 rounded-md border shadow">
      <Image src={image} alt={name} width={200} height={100} className="w-auto h-auto" />
      <h1 className="font-bold text-4xl uppercase">{name}</h1>
      <p className="text-md text-center">{description}</p>
      <p className="font-bold px-3 py-1 bg-primary text-background rounded-full">Rp. {price} <span className="text-xs">/item</span> </p>
      <button onClick={handleClick} id={`order${name}`} name={name} className="w-full bg-secondary text-background py-2 uppercase rounded-md mt-3 hover:bg-primary font-bold">Order Now!</button>
    </div>
  )
}

export default ProductCard