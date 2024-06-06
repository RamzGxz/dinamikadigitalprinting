import { useRouter } from "next/router"


const Pages = () => {
  const { query } = useRouter()
  console.log(query.slug)
  return (
    <div>
      <h1>Products of: </h1>
    </div>
  )
}

export default Pages