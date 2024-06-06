import ServiceCard from "@/components/cards/serviceCard"
import { AndroidLogo, Basket, Code, Palette, Printer, Scroll } from "@phosphor-icons/react"

const ServiceSection = () => {
  return (
    <div className="flex flex-col gap-16 py-16 ju" id="services">
      <div className="flex flex-col gap-5 w-full items-center">
        <h1 className="text-center text-5xl font-bold">Services</h1>
        <p className=" font-semibold capitalize text-center">Jasa Dinamika Digital Printing yang kami tawarkan</p>
      </div>
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        <ServiceCard icon={<Scroll color="#1b1b1b" size={52} weight="fill" />} description="Layanan Fotocopy kami menyediakan solusi fotocopy cepat dan berkualitas untuk dokumen hitam putih dan berwarna. Kami menyediakan berbagai ukuran kertas seperti (A4, F4, A3, B5) dan layanan jilid untuk memenuhi kebutuhan Anda dan saudara" title="Photocopy" />
        <ServiceCard icon={<Printer color="#1b1b1b" size={52} weight="fill" />} description="Layanan Printing Services kami memungkinkan Anda untuk mencetak banner, poster, flyer, spanduk, dan materi promosi lainnya dengan kualitas tinggi. Kami juga menyediakan layanan cetak foto dengan berbagai ukuran dan finishing. Kualitas terbaik" title="Printing Services" />
        <ServiceCard icon={<Basket color="#1b1b1b" size={52} weight="fill" />} description="Dinamika Mart bukan hanya toko kebutuhan rumah tangga biasa, melainkan solusi serbaguna untuk memenuhi berbagai kebutuhan Anda di Banyuwangi. Kami menawarkan beragam produk dan layanan dengan kualitas terbaik dan harga yang terjangkau" title="Dinamika Mart" />
        <ServiceCard icon={<Code color="#1b1b1b" size={52} weight="fill" />} description=" Kami membantu Anda membangun website profesional dan responsif yang sesuai dengan kebutuhan Anda. Tim desainer dan developer kami yang berpengalaman akan menciptakan website yang menarik, mudah digunakan, dan optimal untuk mesin pencari" title="Web Development" />
        <ServiceCard icon={<AndroidLogo color="#1b1b1b" size={52} weight="fill" />} description=" Kami menyediakan jasa untuk mengembangkan aplikasi Android yang inovatif dan fungsional. Kami akan membantu Anda merancang aplikasi yang user-friendly dan menarik, serta mengintegrasikannya dengan berbagai platform dan layanan lainnya" title="Android App Development" />
        <ServiceCard icon={<Palette color="#1b1b1b" size={52} weight="fill" />} description=" kami menyediakan desain grafis kreatif dan menarik untuk berbagai kebutuhan, seperti desain logo, banner, brosur, kartu nama, dan lainnya.  kami akan membantu Anda membangun identitas brand yang kuat dan sesuai dengan target audience Anda yang terbaik" title="Design Services" />
      </div>
    </div>
  )
}

export default ServiceSection