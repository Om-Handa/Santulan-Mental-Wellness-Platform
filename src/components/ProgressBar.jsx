const ProgressBar = ({ current, target, label, showText = true, height = "h-2" }) => {
  const percentage = Math.min((current / target) * 100, 100);
  
  return (
    <div>
      {showText && (
        <div className="flex justify-between text-sm mb-2">
          <span className="font-medium">{label}</span>
          <span className="text-muted-foreground">
            {current}/{target}
          </span>
        </div>
      )}
      <div className={`w-full bg-muted rounded-full ${height}`}>
        <div 
          className="bg-gradient-hero rounded-full transition-all duration-300"
          style={{ width: `${percentage}%`, height: '100%' }}
        ></div>
      </div>
      {!showText && (
        <div className="text-center text-sm text-muted-foreground mt-1">
          {percentage.toFixed(0)}% Complete
        </div>
      )}
    </div>
  );
};

export default ProgressBar;