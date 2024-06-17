import ListProdCard from "@/components/cards/listProdCard"
import Sidebar from "@/components/sidebar"
import { SortAscending } from "@phosphor-icons/react/dist/ssr"
import Head from "next/head"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { Pagination, PaginationItem, PaginationCursor } from "@nextui-org/pagination";

interface Product {
  _id: string,
  name: string,
  price: number,
  quantity: number,
  category: string,
  image: string
}

// Definisikan tipe data untuk fungsi pembagi data
const splitData = (data: Product[], size: number): Product[][] => {
  const result: Product[][] = [];
  for (let i = 0; i < data.length; i += size) {
    result.push(data.slice(i, i + size));
  }
  return result;
};

const Pages = () => {
  const [prodData, setProdData] = useState<Product[]>([]);
  const [splittedData, setSplittedData] = useState<Product[][]>([]);
  const [page, setPage] = useState(1);

  const shuffleArray = (array: Product[]): Product[] => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const fetchProd = async () => {
      try {
        const resp = await fetch('https://api.dinamikaprinting.my.id/products/get');
        const data: Product[] = await resp.json();
        const shuffledData = shuffleArray(data); // Mengacak data
        setProdData(shuffledData);
        setSplittedData(splitData(shuffledData, 10));
      } catch (error) {
        toast.error('Err Network', { autoClose: 1500 });
      }
    };

    fetchProd();
  }, []);

  return (
    <>
      <Head>
        <title>Dinamika - Products</title>
      </Head>
      <div className="flex lg:flex-row flex-col lg:h-screen justify-between xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm mx-auto w-full">
        <Sidebar />

        <div className="lg:w-5/6 w-full px-6 lg:py-20 py-5 flex flex-col gap-8 lg:max-h-screen h-auto lg:relative">
          <div className="inline-flex items-center justify-between">
            <div className="inline-flex items-center gap-2">
              <h1 className="lg:text-3xl text-xl font-semibold">Product List</h1>
              <p className="text-textColor/40 lg:text-3xl text-xl font-medium">{'('}
                <span className="lg:text-2xl text-lg">{prodData.length}</span>
                {')'}</p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="font-medium">Price</p>
              <SortAscending size={20} color="#1b1b1b" weight="bold" />
            </div>
          </div>

          <div className="w-full grid lg:grid-cols-5 grid-cols-2 gap-3">
            {splittedData.length > 0 && splittedData[page - 1].map((item: Product, index) => {
              return (
                <ListProdCard _id={item._id} category={item.category} image={item.image} price={item.price} name={item.name} quantity={item.quantity} key={index} />
              )
            })}
          </div>
          <div className="w-full flex justify-center items-center lg:absolute bottom-5 left-0 right-0">
            <Pagination total={splittedData.length} showControls size='sm' variant="flat" page={page} onChange={setPage} color="primary" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Pages
