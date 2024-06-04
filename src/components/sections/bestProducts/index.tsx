import ProductCard from "@/components/cards/productCard"
import { productTypes } from "@/components/types/productTypes"
import { useEffect, useState } from "react"

const BestProducts = () => {

  const [data, setData] = useState([])

  const getData = async () =>{
    try {
      const get = await fetch('/api/products/get')
      const resp = await get.json()
      setData(resp.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getData()
    console.log(data)
  }, [])

  


  return (
    <div className="w-full flex flex-col gap-16 py-16">
      <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className="text-5xl font-bold">Best Products</h1>
        <p className="text-center font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        { data && data.map((item : productTypes, index)=>{
          return(
            <ProductCard name={item.name} description={item.description} image={item.image} price={item.price} key={index}/>
          )
        })}
      </div>
    </div>
  )
}


export default BestProducts