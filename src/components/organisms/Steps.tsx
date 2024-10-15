import type { Step as StepType } from "@/types";
import type { Tip as TipType } from "@/types";
import Step from "@/components/molecules/Step";
import Tip from "@/components/molecules/Tip";

interface StepsProps {
    steps: StepType[];
    tip?: TipType;
}

const Steps: React.FC<StepsProps> = ({ steps, tip }) => {
    return (
        <div className="flex flex-col items-start">
            <ol className="list-none flex flex-col gap-7">
                {steps.map((step, index) => (
                    <li key={index} className="relative mb-4">
                        <Step n={index + 1} step={step} images={step.images}/>
                    </li>
                ))}
            </ol>
            {tip && <Tip tip={tip} />}
        </div>
    );
};

export default Steps;
