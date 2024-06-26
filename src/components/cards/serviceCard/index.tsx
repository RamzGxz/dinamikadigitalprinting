import { ArrowRight } from "@phosphor-icons/react"
import Link from "next/link"
import { ReactNode } from "react"

type serviceCardType = {
  icon: ReactNode,
  title: string,
  description: string,
  id: number,
  delay: number
}


const ServiceCard = ({ icon, title, description, id, delay }: serviceCardType) => {
  return (
    <div data-aos={`zoom-in`} data-aos-duration='1000' data-aos-delay={`${delay}`} className="w-full border-2 border-primary rounded-md p-5 flex flex-col gap-3 items-center">
      {icon}
      <p className="font-bold text-xl">{title}</p>
      <p className="text-center">{description}</p>
      <Link href={`/services/${title.toString().toLowerCase().replace(/ /g, '-')}`} className="text-accent hover:text-textColor font-medium text-sm flex items-center gap-1">
        Learn more
        <ArrowRight weight="bold"/>
      </Link>
    </div>
  )
}

export default ServiceCard