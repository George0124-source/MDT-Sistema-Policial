// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsw_4hr5GQPKjjevEzIz9XMIMxqmuBe84",
  authDomain: "mdt-nacional.firebaseapp.com",
  projectId: "mdt-nacional",
  storageBucket: "mdt-nacional.firebasestorage.app",
  messagingSenderId: "525461846922",
  appId: "1:525461846922:web:1a038550dd2d15da6c6673"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Hacemos estas funciones globales para que funcionen siempre
window.db = db;
window.collection = collection;
window.addDoc = addDoc;
window.getDocs = getDocs;
window.query = query;
window.where = where;

export { db };
