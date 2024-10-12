import Step from "@/components/molecules/Step";
import Tip from "@/components/molecules/Tip";

interface StepsProps {
    steps: { step: string; specification?: string; images?: { path: string }[]; }[];
    tip?: string;
}

const Steps: React.FC<StepsProps> = ({ steps, tip }) => {
    return (
        <div className="flex flex-col gap-4 items-start">
            <ol className="list-none">
                {steps.map((step, index) => (
                    <li key={index} className="relative mb-4">
                        <Step index={index + 1} step={step.step} specification={step.specification} images={step.images} />
                    </li>
                ))}
            </ol>
            {tip && <Tip tip={tip} />}
        </div>
    );
};

export default Steps;
