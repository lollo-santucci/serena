import Typography from "@/components/atoms/Typography";
import Stats from "@/components/molecules/Stats";

interface HeadlineProps {
  title: string;
  stats: { title: string; value: string }[];
}

const Headline: React.FC<HeadlineProps> = ({ title, stats }) => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center">
      <Typography variant="h1">{title}</Typography>
      <Stats stats={stats}/>
    </section>
  );
};

export default Headline;
