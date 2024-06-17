import { Funnel } from "@phosphor-icons/react/dist/ssr"

const Sidebar = () => {
  return (
    <div className="lg:w-1/6 w-full flex flex-col lg:gap-10 gap-5  lg:h-screen lg:border-r border-b pt-20 pb-5 items-center lg:px-0 px-6">
      <div className="flex items-center lg:justify-start justify-center gap-2 w-full">
        <Funnel size={32} color="#1b1b1b" weight="fill" />
        <h1 className="text-3xl font-bold text-center">Filters</h1>
      </div>

      <div className="flex flex-col gap-3 w-full">
        <h1 className="text-lg font-medium text-start w-full">Categories</h1>
        <div className="lg:flex flex-col lg:gap-3 gap-1 w-full grid grid-cols-4">
          <div className="w-full flex items-center gap-2">
            <input type="checkbox" checked className="text-xl" />
            All
          </div>
          <div className="w-full flex items-center gap-2">
            <input type="checkbox" className="text-xl" />
            ATK
          </div>
          <div className="w-full flex items-center gap-2">
            <input type="checkbox" className="text-xl" />
            Service
          </div>
          <div className="w-full flex items-center gap-2">
            <input type="checkbox" className="text-xl" />
            Drink's
          </div>
          <div className="w-full flex items-center gap-2">
            <input type="checkbox" className="text-xl" />
            Food
          </div>
          <div className="w-full flex items-center gap-2">
            <input type="checkbox" className="text-xl" />
            Other
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar