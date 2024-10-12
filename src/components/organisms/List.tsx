import ListItem from "@/components/molecules/ListItem";
import Typography from "@/components/atoms/Typography";

interface ListPros {
    variant: "ingredient" | "tool";
    items: { name: string; quantity: string; unit: string }[];
}

const List: React.FC<ListPros> = ({ variant, items }) => {
    return (
        <section>
            <Typography variant="h3">
                {variant === "ingredient" ? "Ingredienti" : "Strumenti"}
            </Typography>
            <div className="flex flex-col gap-2">
                {items.map((item, index) => (
                    <ListItem
                        key={index}
                        version={variant}
                        name={item.name}
                        quantity={item.quantity}
                        unit={item.unit}
                    />
                ))}
            </div>
        </section>
    );
};

export default List;
