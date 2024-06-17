import Sidebar from "@/components/sidebar"
import Head from "next/head"

const Pages = () => {

  return (
    <>
      <Head>
        <title>Dinamika - Products</title>
      </Head>
      <div className="flex h-screen justify-between xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm mx-auto w-full">
        <Sidebar />
        <div className="w-5/6 px-6 py-20 flex flex-col gap-10 max-h-screen">
          <div className="inline-flex items-center justify-between">
            <div className="inline-flex items-center gap-2 w-1/4">
              <h1 className="text-3xl font-semibold">Product List</h1>
              <p className="text-textColor/40 text-3xl font-medium">{'('}
                <span className="text-2xl">56</span>
                {')'}</p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Pages