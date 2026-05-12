const Button = ({
  className = "",
  variant = "primary",
  size = "md",
  children,
  ...props
}) => {

  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-medium transition duration-300";

  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900",
    outline: "border border-gray-300 hover:bg-gray-100 text-gray-900",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;