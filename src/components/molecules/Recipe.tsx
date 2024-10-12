import Image from "next/image";
import Typography from "@/components/atoms/Typography";
import Stats from "@/components/molecules/Stats";
import StatItem from "@/components/atoms/StatItem";

interface RecipeProps {
    imgPath: string;
    title: string;
    stats: { title: string; value: string }[];
}

const Recipe: React.FC<RecipeProps> = ({ imgPath, title, stats }) => {
    return (
        <section className="w-full flex flex-row justify-between items-center">
            <div className="flex items-center uppercase">
                <div className="aspect-square relative -mr-4" style={{ width: 'clamp(100px, 20vw, 180px)' }}>
                    <Image
                        src={imgPath}
                        alt={`Image of ${title}`}
                        layout="fill"
                        className="object-cover"
                    />
                </div>
                <div className="z-10 uppercase">
                    <Typography variant="h1">{title}</Typography>
                </div>
            </div>
            <div className="md:hidden">
                <StatItem title={stats[0].title} value={stats[0].value} />
            </div>
            <div className="hidden md:block">
                <Stats stats={stats} />
            </div>
        </section>
    );
};

export default Recipe;
