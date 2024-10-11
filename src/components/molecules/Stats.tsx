import StatItem from "@/components/atoms/StatItem";

// props: vector of values
interface StatsProps {
  stats: { title: string, value: string }[];
}

const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <div className="flex flex-row gap-[0px]">
      {stats.map((stat, index) => <StatItem key={index} title={stat.title} value={stat.value}/>)}
    </div>
  );
};

export default Stats;
