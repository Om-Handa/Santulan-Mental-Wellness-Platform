import Button from "./Button";
import Card from "./Card";

const DiscussionCard = ({ discussion, onJoin }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2 hover:text-primary cursor-pointer">
            {discussion.title}
          </h3>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
            <span>By {discussion.author} • {discussion.authorLevel}</span>
            <span>{discussion.time}</span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {discussion.tags?.map((tag) => (
          <span key={tag} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <span>💬 {discussion.replies} replies</span>
          <span>❤️ {discussion.likes} likes</span>
        </div>
        <Button variant="outline" size="sm" onClick={() => onJoin?.(discussion)}>
          Join Discussion
        </Button>
      </div>
    </Card>
  );
};

export default DiscussionCard;