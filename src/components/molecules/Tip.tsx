import type { Tip as TipType } from "@/types";
import Typography from "@/components/atoms/Typography";

interface StepProps {
    hidden?: boolean;
    tip?: TipType;
}

const Tip: React.FC<StepProps> = ({ hidden = false, tip }) => {
    return (
        <div className={`flex flex-col items-start gap-2 ${hidden ? 'hidden' : ''}`}>
            <Typography variant="h5"><span style={{color: "#BB0000"}}>*.Tips</span></Typography>
            <Typography variant="base" className="mx-3">&nbsp;&nbsp;&nbsp;&nbsp;{tip?.tip}</Typography>
        </div>
    );
};

export default Tip;
