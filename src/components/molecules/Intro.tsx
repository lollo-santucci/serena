import Typography from "@/components/atoms/Typography";

const Intro: React.FC = () => {
    return (
        <div className="flex flex-col">
            <Typography variant="h3">
                Chi è Serena?
            </Typography>
            <Typography variant="base" className="text-justify">
                Megatesto su serena e la sua passione per la cucina che è una cosa che wow non ci si può
                credere è proprio bravissima ma è proprio una passione fa cene squisite a casa sua una 
                volta ci ha fatto il pollo fritto io le ho portato dei fiori
            </Typography>
        </div>
    );
};

export default Intro;
