import React from 'react';
import { FaClock, FaChevronCircleDown, FaRegCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import classNames from 'classnames';

const RecipeCard = ({ title, time, difficulty, ingredients }) => {
  // Süreye göre renk belirleme
  const timeClass = classNames({
    'text-green-500': time <= 10, // 0-10 dakika yeşil
    'text-yellow-500': time > 10 && time <= 45, // 10-45 dakika sarı
    'text-red-500': time > 45, // 45+ dakika kırmızı
  });

  // Zorluk seviyesine göre renk belirleme
  const difficultyClass = classNames({
    'text-green-500': difficulty === 'Kolay', // Kolay yeşil
    'text-yellow-500': difficulty === 'Orta', // Orta sarı
    'text-red-500': difficulty === 'Zor', // Zor kırmızı
  });

  return (
    <motion.div
      className="shadow-lg rounded-lg p-6 mb-6 w-full mx-auto hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      whileHover={{ scale: 1.05 }} // Hover efekti
    >
      {/* Başlık */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>

      {/* Zaman ve Zorluk */}
      <div className="flex justify-between text-sm text-gray-600 mb-4">
        <div className="flex items-center">
          <FaClock className={`mr-2 ${timeClass}`} />
          <span>{time} dakika</span>
        </div>
        <div className="flex items-center">
          <FaChevronCircleDown className={`mr-2 ${difficultyClass}`} />
          <span>{difficulty}</span>
        </div>
      </div>

      {/* Malzemeler */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Malzemeler:</h3>
        <ul className="list-disc pl-5 text-gray-700 text-sm">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="flex items-center">
              <FaRegCheckCircle className="text-green-500 mr-2" />
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default RecipeCard;
