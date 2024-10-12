import Typography from "@/components/atoms/Typography";
import ImageGrid from "@/components/molecules/ImageGrid";

interface StepProps {
    index: number;
    step: string;
    specification?: string;
    images?: { path: string }[];
}

const Step: React.FC<StepProps> = ({ index, step, specification, images }) => {
    return (
        <div className="flex flex-col mx-6 gap-2">
            <Typography variant="h5">{index}.&nbsp;{step}</Typography>
            <Typography variant="base">&nbsp;&nbsp;&nbsp;&nbsp;{specification}</Typography>
            {images && <ImageGrid images={images} />}
        </div>
    );
};

export default Step;
