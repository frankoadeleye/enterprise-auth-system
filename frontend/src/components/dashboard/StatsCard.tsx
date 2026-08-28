interface StatsCardProps {
  title: string;
  value: number;
}

function StatsCard({ title, value }: StatsCardProps) {
  return (
    <div className="card bg-base-100 border border-base-300 shadow-sm">
      <div className="card-body items-center text-center">
        <p className="text-sm opacity-70">{title}</p>

        <h3 className="text-3xl font-bold">{value}</h3>
      </div>
    </div>
  );
}

export default StatsCard;
