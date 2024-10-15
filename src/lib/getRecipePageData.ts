// /lib/getRecipePageData.ts
import { fetchTastes, fetchRecipes, fetchIngredients, fetchSteps, fetchImages, fetchTips, fetchTools } from "@/lib/api";
import type { Recipe, Taste, Ingredient, Step, Image as ImageType, Tip, Tool } from "@/types";

export async function getRecipePageData(recipe: string) {
  const [tastes, recipeData, allRecipes]: [Taste[], Recipe[], Recipe[]] = await Promise.all([
    fetchTastes(),
    fetchRecipes(recipe),
    fetchRecipes(''),
  ]);

  const currentRecipe = recipeData[0];
  const steps: Step[] = await fetchSteps(currentRecipe.id);
  const [ingredients, images, tips, tools]: [Ingredient[], ImageType[], Tip[], Tool[]] = await Promise.all([
    fetchIngredients(currentRecipe.id),
    fetchImages(steps.map(step => step.id)),
    fetchTips(currentRecipe.id),
    fetchTools(currentRecipe.id),
  ]);

  const stepsWithImages = steps.map(step => ({
    ...step,
    images: images.filter(image => image.stepId === step.id),
  }));

  const suggestions = allRecipes
    .filter(r => r.id !== currentRecipe.id && r.tasteId === currentRecipe.tasteId)
    .slice(0, 2);

  return {
    tastes,
    recipe: currentRecipe,
    ingredients,
    steps: stepsWithImages,
    tips,
    tools,
    suggestions,
  };
}
