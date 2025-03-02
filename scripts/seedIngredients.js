import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

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
}

const realIngredients = {
  "Sebze": ["Domates", "Salatalık", "Patlıcan", "Biber", "Havuç", "Kabak", "Ispanak"],
  "Meyve": ["Elma", "Armut", "Muz", "Portakal", "Mandalina", "Çilek", "Kiraz"],
  // ... diğer kategoriler için gerçek malzeme isimleri
}

async function main() {
  // Önce mevcut malzemeleri temizle
  await prisma.ingredient.deleteMany()

  for (const [category, units] of Object.entries(categories)) {
    const baseIngredients = realIngredients[category] || []
    
    // Her kategori için 50 malzeme ekle
    for (let i = 0; i < 50; i++) {
      const name = i < baseIngredients.length 
        ? baseIngredients[i] 
        : `${category} Malzeme ${i + 1}`

      await prisma.ingredient.create({
        data: {
          name,
          category,
          image: `https://source.unsplash.com/400x400/?${encodeURIComponent(name)}`,
          units
        }
      })
      
      console.log(`Added: ${name} (${category})`)
    }
    
    console.log(`Completed category: ${category}`)
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 