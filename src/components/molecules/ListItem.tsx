import Checkbox from "@/components/atoms/Checkbox";
import Typography from "@/components/atoms/Typography";

interface ListItemProps {
    version: "ingredient" | "tool";
    name: string;
    quantity?: string;
    unit?: string;
}

const ListItem: React.FC<ListItemProps> = ({ version, name, quantity, unit }) => {
    const isTool = version === "tool";

    return (
        <div className="flex items-center justify-between py-1">
            <div className="flex items-center">
                <Checkbox />
                <Typography variant="sm" className={`text-right ${isTool ? "hidden" : ""}`}>
                    {unit} {quantity}
                </Typography>
                <Typography variant="sm" className="ml-2">{name}</Typography>
            </div>
        </div>
    );
};

export default ListItem;
