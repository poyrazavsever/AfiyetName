import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { faker } from '@faker-js/faker/locale/tr';

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

// Gerçek malzeme isimleri
const realIngredientNames = {
  "Sebze": ["Domates", "Salatalık", "Patlıcan", "Biber", "Havuç", "Kabak", "Ispanak", "Marul", "Lahana", "Karnabahar"],
  "Meyve": ["Elma", "Armut", "Muz", "Portakal", "Mandalina", "Çilek", "Kiraz", "Karpuz", "Kavun", "Üzüm"],
  "Bakliyat": ["Pirinç", "Bulgur", "Mercimek", "Nohut", "Fasulye", "Barbunya", "Börülce", "Mısır", "Buğday", "Kinoa"],
  "Et": ["Dana Kıyma", "Kuzu Pirzola", "Tavuk Göğüs", "Hindi But", "Kuzu Kuşbaşı", "Dana Antrikot", "Dana Bonfile", "Kuzu İncik"],
  "Süt Ürünleri": ["Süt", "Yoğurt", "Peynir", "Kaşar", "Tereyağı", "Ayran", "Kefir", "Krema", "Lor", "Çökelek"],
  "Baharatlar": ["Karabiber", "Kırmızı Biber", "Kimyon", "Nane", "Kekik", "Zerdeçal", "Tarçın", "Zencefil", "Köri", "Sumak"],
  "Yağlar": ["Zeytinyağı", "Ayçiçek Yağı", "Tereyağı", "Fındık Yağı", "Mısırözü Yağı", "Hindistan Cevizi Yağı"],
  "Unlu Mamuller": ["Un", "Ekmek", "Makarna", "Yufka", "Erişte", "Mantı", "Lazanya", "Kraker", "Galeta", "Grissini"],
  "Kuruyemişler": ["Fındık", "Ceviz", "Badem", "Antep Fıstığı", "Kaju", "Yer Fıstığı", "Çekirdek", "Leblebi"],
  "İçecekler": ["Su", "Meyve Suyu", "Çay", "Kahve", "Limonata", "Ayran", "Soda", "Gazoz", "Kola", "Şalgam"],
  "Deniz Ürünleri": ["Hamsi", "Levrek", "Çipura", "Somon", "Karides", "Kalamar", "Ahtapot", "Midye", "Sardalya"],
  "Şarküteri": ["Sucuk", "Salam", "Sosis", "Jambon", "Pastırma", "Füme Et", "Kavurma", "Zeytin"],
  "Soslar ve Çeşniler": ["Ketçap", "Mayonez", "Hardal", "Barbekü Sos", "Soya Sosu", "Acı Sos", "Pesto Sos", "Ranch Sos"],
  "Atıştırmalıklar": ["Cips", "Çikolata", "Bisküvi", "Gofret", "Kek", "Kurabiye", "Kraker", "Çubuk Kraker"],
  "Konserveler": ["Domates Konservesi", "Bezelye Konservesi", "Mısır Konservesi", "Ton Balığı", "Turşu", "Zeytin"]
};

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
      const realNames = realIngredientNames[category];
      
      // Her kategori için gerçek ve rastgele isimler karışık olarak ekle
      for (let i = 0; i < 50; i++) {
        const useRealName = i < realNames.length;
        const name = useRealName ? realNames[i] : `${faker.commerce.productName()} ${category}`;
        
        const ingredient = {
          name: name,
          category: category,
          image: `https://source.unsplash.com/featured/400x400/?${encodeURIComponent(name.toLowerCase())}`,
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