import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAaprVEIPJQEJbffwTxWkAa3ExeUd2rjLc',
  authDomain: 'week7-wenling.firebaseapp.com',
  projectId: 'week7-wenling',
  storageBucket: 'week7-wenling.firebasestorage.app',
  messagingSenderId: '362969873861',
  appId: '1:362969873861:web:17ad44d863b1301a5edfac'
}

initializeApp(firebaseConfig)

const db = getFirestore()
export default db
