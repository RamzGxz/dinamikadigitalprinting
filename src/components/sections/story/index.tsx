import Image from "next/image";


const StorySection = () => {
  return (
    <div className="flex items-center py-16 justify-between w-full gap-5" id="story">
      <div className="w-1/2 lg:block hidden">
        <Image src={'/undraw_empty_street_re_atjq.svg'} alt="None" width={500} height={500} />
      </div>
      <div className="lg:w-1/2 w-full flex flex-col gap-5 items-start">
        <div className="px-5 py-2 rounded-full border-2 border-primary flex gap-2 items-center">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <p className="font-bold text-xs">Our Story</p>
        </div>
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo, vero amet dolores ratione doloremque necessitatibus distinctio! Suscipit soluta magnam nulla hic ea itaque pariatur obcaecati modi provident dolore iusto dolorem recusandae, laborum quod enim similique magni debitis repellendus. In cumque sapiente quae laudantium nisi consequatur doloribus voluptatem quia! Iusto.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam itaque, maxime quibusdam amet sunt autem temporibus adipisci dicta iusto illum consectetur cupiditate <span className="text-accent">vero sint optio sapiente incidunt, expedita aperiam. Inventore?</span></p>
        <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2">
          <div className="border w-full">
            <Image src={'https://placehold.co/500x500/png'} alt="" className="rounded-md" width={500} height={500}/>
          </div>
          <div className="border w-full">
            <Image src={'https://placehold.co/500x500/png'} alt="" className="rounded-md" width={500} height={500}/>
          </div>
          <div className="border w-full">
            <Image src={'https://placehold.co/500x500/png'} alt="" className="rounded-md" width={500} height={500}/>
          </div>
          <div className="border w-full">
            <Image src={'https://placehold.co/500x500/png'} alt="" className="rounded-md" width={500} height={500}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;