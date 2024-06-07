import { addDoc, collection, doc, getDocs, getFirestore, query, updateDoc, where } from 'firebase/firestore'
import app from './firebase'
import { User } from '@/types/userType';
import bcrypt from 'bcrypt'

// Initialize Firestore
const firestore = getFirestore(app)

// Function to retrieve data from Firestore collection
export async function retrieveData(name: string) {
  const snapshot = await getDocs(collection(firestore, name))

  const data = snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data()
  }));

  return data
}

// Function to register a new user
export async function register(userData: { username: string, email: string, password: string, birthday: string, phone: string }, callback: Function) {
  try {
    // Query Firestore for existing user with the same email
    const q = query(collection(firestore, 'user'), where("email", "==", userData.email))
    const snapshot = await getDocs(q)

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
    })

    // Check if email already exists
    if (data.length > 0) {
      callback({ status: false, message: "email exists" })
      console.log(data)
    } else {
      // Hash the user's password
      userData.password = await bcrypt.hash(userData.password, 16)

      // Add the new user to the 'user' collection
      await addDoc(collection(firestore, 'user'), userData)
      callback({ status: true, message: "success" })
    }
  } catch (error) {
    // Type guard for error
    if (error instanceof Error) {
      callback({
        status: false,
        message: error.message
      });
    } else {
      callback({
        status: false,
        message: "An unknown error occurred"
      });
    }
  }
}


export async function login(userData: { email: string }) {
  const q = query(
    collection(firestore, 'user'),
    where('email', '==', userData.email)
  )

  const snapshot = await getDocs(q)
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }))

  if (data) {
    return data[0]
  }
}

export async function loginWithGoogle(userData: any, callback: Function) {
  const q = query(
    collection(firestore, 'user'),
    where('email', '==', userData.email)
  )

  const snapshot = await getDocs(q)
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }))

  if (data.length > 0) {
    try {
      await updateDoc(doc(firestore, 'user', data[0].id), userData)
      callback({ status: true, message: "update succes", data: userData })
    } catch (error) {
      callback({ status: false, message: "update failed" })
    }

  } else {
    try {
      await addDoc(collection(firestore, 'user'), userData)
      callback({ status: true, message: "success", data:userData })
    } catch (error) {
      callback({ status: false, message: "sign in error" })
    }
  }
}