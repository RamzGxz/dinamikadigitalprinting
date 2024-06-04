import { collection, getDocs, getFirestore } from 'firebase/firestore'
import app from './firebase'

const firestore = getFirestore(app)

export default async function retrieveData (name: string) {
  const snapshot = await getDocs(collection(firestore, name))

  const data = snapshot.docs.map((item)=>({
    id: item.id,
    ...item.data()
  }))

  return data
}