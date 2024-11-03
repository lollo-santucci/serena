import Typography from "@/components/atoms/Typography";

interface StatItemProps {
  title: string;
  value: string;
}

const StatItem: React.FC<StatItemProps> = ({ title, value }) => {
  return (
    <div className="flex w-[10ch] lg:w-[18ch] p-[15px_5px] lg:p-[25px_10px] flex-col justify-center items-center gap-[20px] self-stretch border border-black/50">
      <Typography variant="xxs">
        {title}
      </Typography>
      <Typography variant="h5">
        {value}
      </Typography>
    </div>
  );
};

export default StatItem;
