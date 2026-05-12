const StatsCard = ({ number, label, className = "" }) => {
  return (
    <div className={`text-center p-5 rounded-xl w-1/2 md:w-auto ${className}`}>
      <div className="text-2xl lg:text-4xl font-bold text-blue-600 mb-1">
        {number}
      </div>
      <div className="text-sm lg:text-lg text-gray-500">
        {label}
      </div>
    </div>
  );
};

export default StatsCard;