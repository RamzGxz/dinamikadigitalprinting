import type { NextApiRequest, NextApiResponse } from 'next'
import { retrieveData } from '@/utils/db/service'


const hander = async (req: NextApiRequest, res: NextApiResponse) => {

  const data = await retrieveData('user')

  return (
    res.status(200).json({
      status: `Done!`,
      data
    })
  )
}

export default hander