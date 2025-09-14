import ProgressBar from "./ProgressBar";

const AchievementCard = ({ achievement, size = "normal" }) => {
  const isSmall = size === "small";
  
  return (
    <div className={`${
      achievement.unlocked 
        ? "bg-green-50 border border-green-200" 
        : "bg-muted/30 border border-border"
    } ${isSmall ? "p-3" : "p-4"} rounded-xl`}>
      <div className="flex items-start space-x-3">
        <span className={`${isSmall ? "text-xl" : "text-2xl"} ${!achievement.unlocked && 'grayscale opacity-50'}`}>
          {achievement.icon}
        </span>
        <div className="flex-1">
          <div className={`font-medium ${isSmall ? "text-sm" : ""} ${!achievement.unlocked && 'text-muted-foreground'}`}>
            {achievement.title}
          </div>
          <div className={`${isSmall ? "text-xs" : "text-sm"} text-muted-foreground mb-2`}>
            {achievement.description}
          </div>
          {achievement.unlocked ? (
            <div className={`${isSmall ? "text-xs" : "text-sm"} text-green-600`}>
              Earned {achievement.date}
            </div>
          ) : (
            achievement.progress !== undefined && (
              <div>
                <div className={`${isSmall ? "text-xs" : "text-sm"} text-muted-foreground mb-1`}>
                  Progress: {achievement.progress}%
                </div>
                <ProgressBar 
                  current={achievement.progress} 
                  target={100} 
                  showText={false}
                  height="h-1"
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;