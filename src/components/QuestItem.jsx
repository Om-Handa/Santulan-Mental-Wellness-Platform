import Button from "./Button";

const QuestItem = ({ quest, onComplete }) => {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-muted/70 transition-colors">
      <div className="flex items-center space-x-4">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
          quest.completed ? 'bg-green-500' : 'bg-muted border-2 border-border'
        }`}>
          {quest.completed && <span className="text-white text-sm">✓</span>}
        </div>
        <div>
          <h3 className="font-semibold">{quest.title}</h3>
          <p className="text-sm text-muted-foreground">{quest.description}</p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <span className="text-sm font-medium text-primary">+{quest.xp} XP</span>
        {!quest.completed && (
          <Button size="sm" onClick={() => onComplete?.(quest.id)}>
            Complete
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuestItem;