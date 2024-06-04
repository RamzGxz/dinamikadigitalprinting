import ServiceCard from "@/components/cards/serviceCard"
import { AndroidLogo, Basket, Code, Palette, Printer, Scroll } from "@phosphor-icons/react"

const ServiceSection = () => {
  return (
    <div className="flex flex-col gap-16 py-16" id="services">
      <div className="flex flex-col gap-5 w-full items-center">
        <h1 className="text-center text-5xl font-bold">Services</h1>
        <p className=" font-semibold capitalize text-center">Jasa Dinamika Digital Printing yang kami tawarkan</p>
      </div>
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        <ServiceCard icon={<Scroll color="#1b1b1b" size={52} weight="fill" />} description="" title="Photocopy" />
        <ServiceCard icon={<Printer color="#1b1b1b" size={52} weight="fill" />} description="" title="Printing Services" />
        <ServiceCard icon={<Basket color="#1b1b1b" size={52} weight="fill" />} description="" title="Dinamika Mart" />
        <ServiceCard icon={<Code color="#1b1b1b" size={52} weight="fill" />} description="" title="Web Development" />
        <ServiceCard icon={<AndroidLogo color="#1b1b1b" size={52} weight="fill" />} description="" title="Android App Development" />
        <ServiceCard icon={<Palette color="#1b1b1b" size={52} weight="fill" />} description="" title="Design Services" />
      </div>
    </div>
  )
}

export default ServiceSection