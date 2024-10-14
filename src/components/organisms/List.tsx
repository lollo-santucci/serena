import type { Ingredient } from "@/types";
import type { Tool } from "@/types";
import ListItem from "@/components/molecules/ListItem";
import Typography from "@/components/atoms/Typography";

interface ListPros {
    variant?: "ingredient" | "tool";
    ingredients?: Ingredient[] 
    tools?: Tool[];
}

const List: React.FC<ListPros> = ({ variant = "ingredient", ingredients, tools }) => {
    const items = variant === "ingredient" ? ingredients : tools;

    return (
        <section>
            <Typography variant="h3">
                {variant === "ingredient" ? "Ingredienti" : "Strumenti"}
            </Typography>
            <div className="flex flex-col gap-2">
                {items && items.map((item, index) => (
                    <ListItem
                        key={index}
                        version={variant}
                        name={variant === "ingredient" && 'ingredient' in item ? `${item.ingredient}` : 'tool' in item ? `${item.tool}` : ''}
                        quantity={variant === "ingredient" && 'ingredient' in item ? `${item.qt}` : ''}
                        unit={variant === "ingredient" && 'ingredient' in item ? `${item.measure}` : ''}
                    />
                ))}
            </div>
        </section>
    );
};

export default List;
