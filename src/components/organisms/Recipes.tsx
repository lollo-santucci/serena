import Typography from "@/components/atoms/Typography";
import Recipe from "@/components/molecules/Recipe";

interface RecipesProps {
    title: string;
    recipes: { imgPath: string; title: string; stats: { title: string; value: string }[] }[];
}

const Recipes: React.FC<RecipesProps> = ({ title, recipes }) => {
    return (
        <section className="flex flex-col items-center gap-6 w-full">
            <Typography variant="h1">{title}</Typography>
            {recipes.map((recipe, index) => <Recipe key={index} imgPath={recipe.imgPath} title={recipe.title} stats={recipe.stats}/>)}
        </section>
    );
};

export default Recipes;
