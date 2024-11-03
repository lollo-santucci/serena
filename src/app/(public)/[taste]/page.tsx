import type { Taste } from "@/types";
import type { Recipe } from "@/types";
import { fetchTastes } from "@/lib/api/tastes";
import { fetchRecipes } from "@/lib/api/recipes";
import Header from "@/components/organisms/Header";
import Recipes from "@/components/organisms/Recipes";

interface TastePageProps {
  taste: string;
}

export default async function Taste({ params }: { params: TastePageProps }) {
  const taste = params.taste;
  const tastes: Taste[] = await fetchTastes();
  const tasteId = tastes.find((t) => t.taste === taste)?.id;
  const recipes: Recipe[] = await fetchRecipes('', tasteId);

  return (
    <div className="p-6">
      <Header tastes={tastes} />
      <main className="flex flex-col py-8 px-8 md:px-52 gap-16">
        <Recipes title={taste} recipes={recipes} />
      </main>
    </div>
  );
}

// Generazione SSG (Static Site Generation)
export async function generateStaticParams() {
  const tastes: Taste[] = await fetchTastes();
  return tastes.map((taste) => ({
    params: { taste: taste.taste },
  }));
}
