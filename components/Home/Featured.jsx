import React from 'react';
import { FaUtensils, FaRobot, FaSearch, FaFilter, FaStar } from 'react-icons/fa';
import Link from 'next/link';
import RecipeCard from '../RecipeCard'; // RecipeCard bileşenini import ediyoruz

const Featured = () => {
  // Popüler tarifler verilerini simüle edelim
  const popularRecipes = [
    {
      title: 'Fırın Tavuk Tarifi',
      time: 45,
      difficulty: 'Orta',
      ingredients: ['Tavuk', 'Baharatlar', 'Zeytinyağı', 'Sebzeler']
    },
    {
      title: 'Vegan Sebze Çorbası',
      time: 30,
      difficulty: 'Kolay',
      ingredients: ['Havuç', 'Kabak', 'Domates', 'Mercimek']
    },
    {
      title: 'Spagetti Bolonez',
      time: 60,
      difficulty: 'Orta',
      ingredients: ['Spagetti', 'Kıyma', 'Domates Sosu', 'Soğan']
    }
  ];

  return (
    <div className="px-6 py-12 container mx-auto">
      {/* Başlık */}
      <h2 className="text-3xl font-bold text-left text-gray-800 mb-8">
        Yapay Zeka ile Yemek Tariflerinizi Keşfedin
      </h2>

      {/* Kategoriler */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        <div className="border border-gray-200 p-6 rounded-lg text-left hover:shadow-lg transition-shadow duration-300">
          <FaUtensils className="text-4xl text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Yapay Zeka Yemek Önerileri</h3>
          <p className="text-sm text-gray-600">Evdeki malzemelere göre yapabileceğiniz en lezzetli yemekleri keşfedin.</p>
        </div>
        <div className="border border-gray-200 p-6 rounded-lg text-left hover:shadow-lg transition-shadow duration-300">
          <FaRobot className="text-4xl text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-4">AI Destekli Tarifler</h3>
          <p className="text-sm text-gray-600">Yapay zeka, evdeki malzemelere göre en uygun tarifleri sunar.</p>
        </div>
        <div className="border border-gray-200 p-6 rounded-lg text-left hover:shadow-lg transition-shadow duration-300">
          <FaSearch className="text-4xl text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Yemek Tarifi Arama</h3>
          <p className="text-sm text-gray-600">Kullanıcı dostu arama özelliğiyle, yemek tariflerinizi kolayca bulun.</p>
        </div>
        <div className="border border-gray-200 p-6 rounded-lg text-left hover:shadow-lg transition-shadow duration-300">
          <FaFilter className="text-4xl text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Filtreleme Seçenekleri</h3>
          <p className="text-sm text-gray-600">Malzeme, yemek türü ve diyet seçenekleri ile tariflerinizi filtreleyin.</p>
        </div>
      </div>

      {/* Yemek Arama ve Filtreleme */}
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <FaSearch />
            <input
              type="text"
              placeholder="Yemek Tarifi Ara..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <FaFilter />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option value="all">Hepsi</option>
              <option value="vegetarian">Vejeteryan</option>
              <option value="vegan">Vegan</option>
              <option value="glutenfree">Glutensiz</option>
            </select>
          </div>
        </div>
        <Link href="/recipes">
          <div className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300">
            Tüm Tarifleri Gör
          </div>
        </Link>
      </div>

      {/* Popüler Tarifler */}
      <h3 className="text-2xl font-bold text-left text-gray-800 mb-6">
        Popüler Yemek Tarifleri
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {popularRecipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            title={recipe.title}
            time={recipe.time}
            difficulty={recipe.difficulty}
            ingredients={recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;
