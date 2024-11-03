import { getRecipePageData } from "@/lib/getRecipePageData";
import type { Recipe } from "@/types";
import { fetchRecipes } from "@/lib/api/recipes";
import Header from "@/components/organisms/Header";
import Headline from "@/components/organisms/Headline";
import Image from "next/image";
import List from "@/components/organisms/List";
import Steps from "@/components/organisms/Steps";
import Recipes from "@/components/organisms/Recipes";

interface RecipePageProps {
  recipe: string;
}

export default async function Recipe({ params }: { params: RecipePageProps }) {
  const recipeId = params.recipe;
  const { tastes, recipe, ingredients, steps, tips, tools, suggestions } = await getRecipePageData(recipeId);

  return (
    <div className="p-6">
      <Header tastes={tastes} />
      <main className="flex flex-col py-8 px-12 md:px-52 gap-16">
        <Headline
          title={recipe.name}
          stats={[
            { title: "Preparazione", value: `${recipe.prepTime} min` },
            { title: "Cottura", value: `${recipe.cookTime} min` },
            { title: "Porzioni", value: `${recipe.serves}` },
          ]}
        />
        <section className="flex flex-col md:flex-row justify-between items-center md:mx-12">
        <div className="relative h-[50vh] w-[50vh] aspect-square">
            <Image
              src={recipe.imagePath ?? "/imgs/placeholder.png"}
              alt={recipe.name}
              layout="fill"  // Usa fill per assicurare che l'immagine riempia il contenitore
              objectFit="cover"  // Mantieni il rapporto d'aspetto
              priority={true}
            />
          </div>
          <List ingredients={ingredients} />
        </section>
        <section className="flex flex-col justify-between items-center">
          <Steps steps={steps} tip={tips[0]} />
        </section>
        <section className="flex flex-col md:flex-row justify-between items-center">
          <List variant="tool" tools={tools} />
          <Recipes variant="recommended" title="Altre ricette" recipes={suggestions} />
        </section>
      </main>
    </div>
  );
}

// Generazione SSG (Static Site Generation)
export async function generateStaticParams() {
  const recipes: Recipe[] = await fetchRecipes('');
  return recipes.map((recipe) => ({
    params: { taste: recipe.name },
  }));
}
