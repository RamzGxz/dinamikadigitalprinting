import Image from "next/image"
import Link from "next/link"

const PrintingServicesSection = ({ name }: { name: string }) =>{
  return(
    <div className="w-full flex flex-col">
      <div className="w-full flex justify-between items-center py-20 lg:flex-row flex-col lg:gap-0 gap-5">
        <div className="lg:w-1/2 w-full flex justify-center items-center">
          <Image src={'/fcban.png'} width={500} height={500} className="w-auto h-auto" alt="banner fc" />
        </div>
        <div className="lg:w-1/2 w-full flex flex-col justify-start items-start gap-5">
          <h1 className="text-5xl font-bold uppercase">{name.replace(/-/g, ' ')}</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quia voluptate iusto quis deserunt totam, ea sit necessitatibus harum a dicta at ducimus. Explicabo repellat amet velit cupiditate ad assumenda.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vel fugiat enim vitae aspernatur distinctio veniam accusantium, similique et autem!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur dolor praesentium nihil, repellendus ullam distinctio eligendi cumque dolorem maiores libero quam atque fuga temporibus eum placeat officiis esse accusantium.</p>
          <div className="flex w-full justify-start items-start gap-5">
            <Link href={`/services/${name}#galery`}>
              <button className="px-3 py-2 border border-primary rounded-md bg-primary hover:bg-background hover:text-textColor text-background">Lihat Galery</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 items-center w-full py-20" id="galery">
        <h1 className="text-5xl font-bold">Galery</h1>
        <div className="w-full grid lg:grid-cols-3 gap-8 grid-cols-1 place-items-center">
          <div className="py-28 rounded-md w-full lg:hover:scale-110 hover:scale-105 transition-all duration-300 object-cover bg-center bg-[url('/str4.jpg')]"></div>
          <div className="py-28 rounded-md w-full lg:hover:scale-110 hover:scale-105 transition-all duration-300 object-cover bg-center bg-[url('/str4.jpg')]"></div>
          <div className="py-28 rounded-md w-full lg:hover:scale-110 hover:scale-105 transition-all duration-300 object-cover bg-center bg-[url('/str4.jpg')]"></div>
        </div>
        <div className="w-full grid lg:grid-cols-4 gap-8 grid-cols-1 place-items-center">
          <div className="py-28 rounded-md w-full lg:hover:scale-110 hover:scale-105 transition-all duration-300 object-cover bg-center bg-[url('/str4.jpg')]"></div>
          <div className="py-28 rounded-md w-full lg:hover:scale-110 hover:scale-105 transition-all duration-300 object-cover bg-center bg-[url('/str4.jpg')]"></div>
          <div className="py-28 rounded-md w-full lg:hover:scale-110 hover:scale-105 transition-all duration-300 object-cover bg-center bg-[url('/str4.jpg')]"></div>
          <div className="py-28 rounded-md w-full lg:hover:scale-110 hover:scale-105 transition-all duration-300 object-cover bg-center bg-[url('/str4.jpg')]"></div>
        </div>
      </div>
    </div>
  )
}

export default PrintingServicesSection
