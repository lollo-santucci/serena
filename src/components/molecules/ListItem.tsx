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
                <Typography variant="sm" className={`text-right ${isTool ? "hidden" : ""} className="w-[4ch] text-right block`}>
                    <span className="w-[3ch] text-right">{unit === "null" ? " " : unit}</span> <span className="w-[3ch] text-right">{quantity || " "}</span>
                </Typography>
                <Typography variant="sm" className="ml-2">{name}</Typography>
            </div>
        </div>
    );
};

export default ListItem;
