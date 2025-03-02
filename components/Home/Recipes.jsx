import React from 'react';
import Link from 'next/link';
import RecipeCard from '../RecipeCard';

const Recipes = () => {
  const popularRecipes = [
    {
      title: "Pasta Tarifi",
      time: "80",
      difficulty: "Orta",
      ingredients: ["Un", "Su", "Yumurta", "Süt", "Şeker"],
    },
    {
      title: "Köfte Tarifi",
      time: "35",
      difficulty: "Orta",
      ingredients: ["Kıyma", "Soğan", "Baharatlar", "Ekmek", "Yumurta"],
    },
    {
      title: "Çorba Tarifi",
      time: "20",
      difficulty: "Kolay",
      ingredients: ["Mercimek", "Soğan", "Tuz", "Biber", "Sıvı Yağ"],
    },
    {
      title: "Salata Tarifi",
      time: "10",
      difficulty: "Kolay",
      ingredients: ["Domates", "Salatalık", "Marul", "Zeytinyağı", "Limon"],
    },
  ];

  return (
    <div className="px-6 py-12 container mx-auto">
      <div className="flex flex-col items-start gap-4 mb-8">
        <h2 className="text-3xl font-bold text-left text-gray-800 ">
          Popüler Tarifler
        </h2>
        <p className="text-neutral-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, soluta?</p>
      </div>

      {/* Tarif Kartları */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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

      {/* Bütün tariflere gitme butonu */}
      <div className="text-left mt-12">
        <Link href="/tarifler">
          <button className="bg-orange-500 text-white text-lg px-8 py-3 rounded-full hover:bg-orange-600 transition duration-300">
            Bütün Tarifleri Gör
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Recipes;
