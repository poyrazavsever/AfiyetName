import { useState, useEffect } from 'react';
import Link from 'next/link';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const recipesRef = collection(db, 'recipes');
        const snapshot = await getDocs(recipesRef);
        const recipesData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setRecipes(recipesData);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tarifler</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link 
            href={`/recipes/${recipe.id}`} 
            key={recipe.id}
          >
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow bg-white">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Zorluk: {recipe.difficulty}</span>
                <span>{recipe.duration} dakika</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 