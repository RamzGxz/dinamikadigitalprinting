import ListProdCard from "@/components/cards/listProdCard"
import Sidebar from "@/components/sidebar"
import Head from "next/head"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { Pagination } from "@nextui-org/pagination"
import SkeletonCard from "@/components/cards/skeletonCard"
import { Skeleton } from "@nextui-org/skeleton"

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
  const [loading, setLoading] = useState(false)
  const [filters, setFilters] = useState<string[]>([])

  const shuffleArray = (array: Product[]): Product[] => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const fetchProd = async () => {
      setLoading(true)
      try {
        const resp = await fetch('https://api.dinamikaprinting.my.id/products/get');
        const data: Product[] = await resp.json();
        const shuffledData = shuffleArray(data); // Mengacak data
        setProdData(shuffledData);
        setSplittedData(splitData(shuffledData, 10));
        setLoading(false)
      } catch (error) {
        toast.error('Err Network', { autoClose: 1500 });
        setLoading(false)
      }
    };

    fetchProd();
  }, []);

  useEffect(() => {
    // Filter data based on selected filters
    const filteredData = prodData.filter(product => 
      filters.length === 0 || filters.includes(product.category)
    );
    setSplittedData(splitData(filteredData, 10));
    setPage(1); // Reset to first page when filters change
  }, [filters, prodData]);

  const handleChecked = (category: string) => {
    setFilters(prevFilters =>
      prevFilters.includes(category)
        ? prevFilters.filter(filter => filter !== category)
        : [...prevFilters, category]
    );
    console.log(filters)
  };



  return (
    <>
      <Head>
        <title>Dinamika - Products</title>
      </Head>
      <div className="flex lg:flex-row flex-col lg:h-screen justify-between xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm mx-auto w-full">
        <Sidebar handleChecked={handleChecked} />

        <div className="lg:w-5/6 w-full px-6 lg:py-20 py-5 flex flex-col gap-8 lg:max-h-screen h-auto lg:relative">
          <div className="inline-flex items-center justify-between">
            <div className="inline-flex items-center gap-2">
              <h1 className="lg:text-3xl text-xl font-semibold">Product List</h1>
              <p className="text-textColor/40 lg:text-3xl text-xl font-medium">{'('}
                <span className="lg:text-2xl text-lg">{prodData.length}</span>
                {')'}</p>
            </div>
            
          </div>

          <div className="w-full grid lg:grid-cols-5 grid-cols-2 gap-3">
            {loading ? (
              <SkeletonCard value={10} />
            ) : (
              splittedData.length > 0 && splittedData[page - 1].map((item: Product, index) => {
                return (
                  <ListProdCard _id={item._id} category={item.category} image={item.image} price={item.price} name={item.name} quantity={item.quantity} key={index} />
                )
              })
            )}
          </div>
          <div className="w-full flex justify-center items-center lg:absolute bottom-5 left-0 right-0">
            {loading ? (
              <Skeleton className="w-1/4 rounded-md h-5 dark:bg-gray-200" />
            ) : (
              <Pagination total={splittedData.length} initialPage={1} showControls size='sm' variant="flat" page={page} onChange={setPage} color="primary" />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Pages
