import { ArrowRight } from "@phosphor-icons/react"
import Link from "next/link"
import { ReactNode } from "react"

type serviceCardType = {
  icon: ReactNode,
  title: string,
  description: string
}


const ServiceCard = ({ icon, title, description }: serviceCardType) => {
  return (
    <div className="w-full border-2 border-primary rounded-md p-5 flex flex-col gap-3 justify-start items-center">
      {icon}
      <p className="font-bold text-xl">{title}</p>
      <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam placeat praesentium repellendus quos at assumenda possimus maiores vitae delectus. Est saepe quidem nemo iusto rem aliquid aperiam corporis dolores maiores.</p>
      <Link href={'/'} className="text-accent hover:text-textColor font-medium text-sm flex items-center gap-1">
        Learn more
        <ArrowRight weight="bold"/>
      </Link>
    </div>
  )
}

export default ServiceCard