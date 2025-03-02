import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function RecipeDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const recipeRef = doc(db, 'recipes', id);
        const snapshot = await getDoc(recipeRef);
        if (snapshot.exists()) {
          setRecipe(snapshot.data());
        }
      } catch (error) {
        console.error('Error fetching recipe:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{recipe?.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-1">
          <h2 className="text-xl font-semibold mb-2">Tarif Bilgileri</h2>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Zorluk: {recipe?.difficulty}</span>
            <span>{recipe?.duration} dakika</span>
          </div>
        </div>
        <div className="md:col-span-1">
          <h2 className="text-xl font-semibold mb-2">Malzemeler</h2>
          <ul className="list-disc pl-6">
            {recipe?.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Tarif</h2>
        <p>{recipe?.instructions}</p>
      </div>
    </div>
  );
} 