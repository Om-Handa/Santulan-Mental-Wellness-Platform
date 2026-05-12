const ProgressBar = ({ current, target, label, showText = true, height = "h-2" }) => {
  const percentage = Math.min((current / target) * 100, 100);
  
  return (
    <div>
      {showText && (
        <div className="flex justify-between text-sm mb-2">
          <span className="font-medium">{label}</span>
          <span className="text-gray-500">
            {current}/{target}
          </span>
        </div>
      )}
      <div className={`w-full bg-gray-100 rounded-full ${height}`}>
        <div 
          className="bg-blue-500 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%`, height: '100%' }}
        ></div>
      </div>
      {!showText && (
        <div className="text-center text-sm text-gray-500 mt-1">
          {percentage.toFixed(0)}% Complete
        </div>
      )}
    </div>
  );
};

export default ProgressBar;