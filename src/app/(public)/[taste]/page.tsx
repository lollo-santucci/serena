import { GetStaticPropsContext } from "next";
import type { Taste } from "@/types";
import type { Recipe } from "@/types";
import { fetchTastes } from "@/lib/api/tastes";
import { fetchRecipes } from "@/lib/api/recipes";
import Header from "@/components/organisms/Header";
import Recipes from "@/components/organisms/Recipes";

interface RecipePageProps {
  taste: string;
}

export default async function Taste({ params }: { params: RecipePageProps }) {
  const taste = params.taste;
  const tastes: Taste[] = await fetchTastes();
  // get taste id from tastes
  const tasteId = tastes.find((t) => t.taste === taste)?.id;
  // get recipes by taste id
  const recipes: Recipe[] = await fetchRecipes('', tasteId);

  return (
    <>
    <Header tastes={tastes} variant="sm" />
      <main>
        <Recipes title={taste} recipes={recipes.map((recipe) => ({
          imgPath: '/imgs/copertina.webp',
          title: recipe.name,
          stats: [
            { title: 'Preparazione', value: recipe.prepTime },
            { title: 'Cottura', value: recipe.cookTime },
            { title: 'Porzioni', value: recipe.serves },
          ],
        }))} />
      </main>
    </>
  );
}

// Generazione SSG (Static Site Generation)
export async function generateStaticParams() {
  const tastes: Taste[] = await fetchTastes();
  return tastes.map((taste) => ({
    params: { taste: taste.taste },
  }));
}