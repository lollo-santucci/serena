import type { Recipe } from "@/types";
import Typography from "@/components/atoms/Typography";
import RecipeItem from "@/components/molecules/RecipeItem";

interface RecipesProps {
    variant?: "list" | "recommended";
    title: string;
    recipes: Recipe[];
}

const Recipes: React.FC<RecipesProps> = ({ variant = "list", title, recipes }) => {
    const isRecommended = variant === "recommended";
    return (
        <section className={`flex flex-col ${isRecommended ? "items-start gap-2 w-full" : "items-center gap-6"} `}>
            <Typography variant={`${isRecommended ? "h3" : "h1"}`}>{title}</Typography>
            {recipes.map((recipe, index) =>
                <RecipeItem
                    key={index}
                    variant={`${isRecommended ? "recommended" : "list"}`}
                    imgPath={recipe.imagePath} 
                    title={recipe.name}
                    stats={[
                        { title: "Preparazione", value: `${recipe.prepTime} min` },
                        { title: "Cottura", value: `${recipe.cookTime} min` },
                        { title: "Porzioni", value: `${recipe.serves}` },
                    ]}
                />
            )}
        </section>
    );
};

export default Recipes;
