import type { Step as StepType } from "@/types";
import type { Image as ImageType } from "@/types";
import Typography from "@/components/atoms/Typography";
import ImageGrid from "@/components/molecules/ImageGrid";

interface StepProps {
    n: number;
    step: StepType;
    images?: ImageType[];
}

const Step: React.FC<StepProps> = ({ n, step, images }) => {
    return (
        <div className="flex flex-col mr-3 lg:mx-6 text-justify">
            <Typography variant="h5" className="flex items-start">
                <span className="mr-2">{n}.</span>
                <div className="flex flex-col gap-3">
                    <span>{step.step}</span>
                    <Typography variant="base">{step.specification}</Typography>
                    {images && <ImageGrid images={images} />}
                </div>
            </Typography>
        </div>
    );
};

export default Step;
