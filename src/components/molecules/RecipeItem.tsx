'use client';

import { usePathname } from "next/navigation";
import Image from "next/image";
import Typography from "@/components/atoms/Typography";
import Stats from "@/components/molecules/Stats";
import StatItem from "@/components/atoms/StatItem";

interface RecipeProps {
    variant?: "list" | "recommended";
    imgPath?: string;
    title: string;
    stats: { title: string; value: string }[];
}

const RecipeItem: React.FC<RecipeProps> = ({ variant = "list", imgPath, title, stats }) => {
    const isRecommended = variant === "recommended";
    const pathname = usePathname();

    return (
        <section className="w-full flex flex-row justify-between items-center">
            <div className="flex items-center uppercase">
                <div
                    className="aspect-square relative -mr-2"
                    style={{ width: isRecommended ? 'clamp(50px, 5vw, 100px)' : 'clamp(100px, 20vw, 180px)' }}>
                    <Image
                        src={imgPath ?? '/imgs/placeholder.webp'}
                        alt={`Image of ${title}`}
                        layout="fill"
                        className="object-cover"
                    />
                </div>
                <div className="z-10 uppercase">
                    <a href={`${pathname}/${title}`}>
                        <Typography variant={isRecommended ? "h4" : "h2"} className="transform transition-transform duration-300 hover:scale-105">{title}</Typography>
                    </a>
                </div>
            </div>
            <div className={`${isRecommended ? "hidden" : "block"}`}>
                <div className="lg:hidden">
                    <StatItem title={stats[0].title} value={stats[0].value} />
                </div>
                <div className="hidden lg:block">
                    <Stats stats={stats} />
                </div>
            </div>
        </section>
    );
};

export default RecipeItem;
