import ProductCard from "@/components/cards/productCard"
import { productTypes } from "@/types/productTypes"
import Link from "next/link"
import { useEffect, useState } from "react"

const BestProducts = () => {

  const [data, setData] = useState([])

  const getData = async () => {
    try {
      const get = await fetch('/api/products/get')
      const resp = await get.json()
      setData(resp.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])




  return (
    <div className="w-full flex flex-col gap-16 py-16" id="best-products">
      <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className="text-5xl font-bold">Best Products</h1>
        <p className="text-center font-medium">Temukan produk terbaik untuk kamu</p>
      </div>
      <div className="flex flex-col gap-3">
        <Link href={'/product'} className="text-end text-sm text-accent font-medium hover:text-primary">See More {'->'}</Link>
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {data && data.map((item: productTypes, index) => {
            return (
              <ProductCard id={index + 1} name={item.name} description={item.description} image={item.image} price={item.price} key={index} />
            )
          })}
        </div>
      </div>
    </div>
  )
}


export default BestProducts