import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

//این فایل یک آبجکت است که اطلاعات لازم برای اتصال به بک اندمون رو در اختیارمون میزاره
const firebaseConfig = {
  apiKey: "AIzaSyCnnJk2i5bt9363vjDTdLMLq85krLswx-4",
  authDomain: "opencode-food-site-35fe2.firebaseapp.com",
  projectId: "opencode-food-site-35fe2",
  storageBucket: "opencode-food-site-35fe2.appspot.com",
  messagingSenderId: "1084599279245",
  appId: "1:1084599279245:web:1c3be1cae49c90d9eb0cc4",
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
