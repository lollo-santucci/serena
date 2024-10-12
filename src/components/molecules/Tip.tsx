import Typography from "@/components/atoms/Typography";

interface StepProps {
    hidden?: boolean;
    tip?: string;
}

const Tip: React.FC<StepProps> = ({ hidden = false, tip }) => {
    return (
        <div className={`flex flex-col items-center gap-2 ${hidden ? 'hidden' : ''}`}>
            <Typography variant="h5"><span style={{color: "#BB0000"}}>*.Tips</span></Typography>
            <Typography variant="base">&nbsp;&nbsp;&nbsp;&nbsp;{tip}</Typography>
        </div>
    );
};

export default Tip;
