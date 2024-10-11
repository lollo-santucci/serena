import Typography from "@/components/atoms/Typography";

interface StatItemProps {
  title: string;
  value: string;
}

const StatItem: React.FC<StatItemProps> = ({ title, value }) => {
  return (
    <div className="flex w-[150px] p-[20px_20px] flex-col justify-center items-center gap-[20px] self-stretch border border-black/50">
      <Typography variant="xs">
        {title}
      </Typography>
      <Typography variant="h5">
        {value}
      </Typography>
    </div>
  );
};

export default StatItem;
