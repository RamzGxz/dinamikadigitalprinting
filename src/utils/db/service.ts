import { collection, getDocs, getFirestore } from 'firebase/firestore'
import app from './firebase'
import { User } from '@/components/types/userType';


const firestore = getFirestore(app)

export default async function retrieveData(name: string) {
  const snapshot = await getDocs(collection(firestore, name))

  const data = snapshot.docs.map((item) => {
    const docData = item.data();
    return {
      id: item.id,
      email: docData.email,
      password: docData.password,
      birthday: docData.birthday,
      username: docData.username,
      phone: docData.phone
    } as User;
  });

  return data
}