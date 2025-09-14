import Avatar from "./Avatar";

const UserProfile = ({ user, showLevel = true, size = "sm", className = "" }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <Avatar size={size}>
        {user.name?.charAt(0) || user.avatar || "U"}
      </Avatar>
      <div>
        <div className="font-medium text-sm">{user.name}</div>
        {showLevel && user.level && (
          <div className="text-xs text-muted-foreground">Level {user.level}</div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;