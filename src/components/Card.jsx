const Card = ({ children, className = "", padding = "p-6" }) => {
  return (
    <div className={`bg-card rounded-xl border ${padding} ${className}`}>
      {children}
    </div>
  );
};

export default Card;