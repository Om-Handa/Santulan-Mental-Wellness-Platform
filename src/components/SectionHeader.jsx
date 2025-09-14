import Button from "./Button";

const SectionHeader = ({ title, subtitle, actionLabel, onAction, children }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          {subtitle && (
            <p className="text-muted-foreground mt-1 text-xl">{subtitle}</p>
          )}
        </div>
        {actionLabel && onAction && (
          <Button onClick={onAction}>{actionLabel}</Button>
        )}
      </div>
      {children}
    </div>
  );
};

export default SectionHeader;