import Link from 'next/link';
import { FaUtensils, FaCarrot } from 'react-icons/fa'; // npm install react-icons

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">
          Yemek Tarifi Uygulaması
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <Link 
            href="/recipes" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Tarifleri Görüntüle
          </Link>
          <Link 
            href="/ingredients" 
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Malzemelerim
          </Link>
        </div>
      </div>
    </div>
  );
}
