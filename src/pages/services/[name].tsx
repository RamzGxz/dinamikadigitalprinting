import Head from "next/head"
import { useRouter } from "next/router"

const ServicesPage = () => {
  const { query } = useRouter()

  return (
    <>
      <Head>
        <title>Dinamika - {query.name?.toString().replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}</title>
      </Head>
      <div className="h-screen w-full flex justify-between items-center text-black xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm mx-auto gap-16 lg:px-0 px-6">
        
      </div>
    </>
  )
}

export default ServicesPage