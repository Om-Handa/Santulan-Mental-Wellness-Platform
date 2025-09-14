const Avatar = ({ children, size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base", 
    lg: "w-16 h-16 text-2xl",
    xl: "w-24 h-24 text-4xl"
  };

  return (
    <div className={`${sizeClasses[size]} rounded-full bg-gradient-card flex items-center justify-center font-semibold text-white ${className}`}>
      {children}
    </div>
  );
};

export default Avatar;