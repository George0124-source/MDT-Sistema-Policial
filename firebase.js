import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where, orderBy } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// --- ⚠️ PEGA AQUÍ TUS CLAVES DE FIREBASE ⚠️ ---
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

// Exportamos las herramientas
export { db, collection, addDoc, getDocs, query, where, orderBy };
