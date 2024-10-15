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
    <>
      <Header tastes={tastes} variant="sm" />
      <main>
        <Headline
          title={recipe.name}
          stats={[
            { title: "Preparazione", value: `${recipe.prepTime} min` },
            { title: "Cottura", value: `${recipe.cookTime} min` },
            { title: "Porzioni", value: `${recipe.serves}` },
          ]}
        />
        <section className="flex flex-col md:flex-row justify-center items-center">
          <Image
            src={recipe.imagePath ?? "/imgs/placeholder.png"}
            alt={recipe.name}
            width={500}
            height={500}
            priority={true}
          />
          <List ingredients={ingredients} />
        </section>
        <section className="flex flex-col justify-between items-center">
          <Steps steps={steps} tip={tips[0]} />
        </section>
        <section className="flex flex-col md:flex-row justify-center items-center">
          <Recipes variant="recommended" title="Altre ricette" recipes={suggestions} />
          <List variant="tool" tools={tools} />
        </section>
      </main>
    </>
  );
}

// Generazione SSG (Static Site Generation)
export async function generateStaticParams() {
  const recipes: Recipe[] = await fetchRecipes('');
  return recipes.map((recipe) => ({
    params: { taste: recipe.name },
  }));
}
