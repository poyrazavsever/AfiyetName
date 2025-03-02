import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { faker } from '@faker-js/faker';

const firebaseConfig = {
  apiKey: "AIzaSyBc-6C3oxoqgby-S8S_XbBPklvLfOjdhzk",
  authDomain: "afiyatname.firebaseapp.com",
  projectId: "afiyatname",
  storageBucket: "afiyatname.firebasestorage.app",
  messagingSenderId: "531954822191",
  appId: "1:531954822191:web:f5acec83e9c169b5036ada"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const categories = {
  "Sebze": ["adet", "gram", "kg"],
  "Meyve": ["adet", "gram", "kg"],
  "Bakliyat": ["gram", "kg", "su bardağı"],
  "Et": ["gram", "kg"],
  "Süt Ürünleri": ["ml", "L", "gram", "kg"],
  "Baharatlar": ["gram", "çay kaşığı", "yemek kaşığı"],
  "Yağlar": ["ml", "L", "yemek kaşığı"],
  "Unlu Mamuller": ["gram", "kg", "su bardağı"],
  "Kuruyemişler": ["gram", "kg"],
  "İçecekler": ["ml", "L", "su bardağı"],
  "Deniz Ürünleri": ["gram", "kg", "adet"],
  "Şarküteri": ["gram", "kg", "dilim"],
  "Soslar ve Çeşniler": ["ml", "gram", "yemek kaşığı"],
  "Atıştırmalıklar": ["gram", "adet", "paket"],
  "Konserveler": ["gram", "kg", "adet"]
};

async function generateAndAddIngredients() {
  try {
    for (const [category, units] of Object.entries(categories)) {
      // Her kategori için 50 malzeme ekle
      for (let i = 0; i < 50; i++) {
        const ingredient = {
          name: `${faker.commerce.productName()} ${category}`,
          category: category,
          image: `https://source.unsplash.com/random/400x400/?${encodeURIComponent(category.toLowerCase())}`,
          units: units
        };

        await addDoc(collection(db, 'ingredients'), ingredient);
        console.log(`Added: ${ingredient.name} (${category})`);
      }
      console.log(`Completed category: ${category}`);
    }
    console.log('All ingredients added successfully!');
  } catch (error) {
    console.error('Error adding ingredients:', error);
  }
}

// Scripti çalıştır
generateAndAddIngredients(); 