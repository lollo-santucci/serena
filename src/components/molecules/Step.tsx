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
        <div className="flex flex-col mx-6 gap-2">
            <Typography variant="h5">{n}.&nbsp;{step.step}</Typography>
            <Typography variant="base">&nbsp;&nbsp;&nbsp;&nbsp;{step.specification}</Typography>
            {images && <ImageGrid images={images} />}
        </div>
    );
};

export default Step;
