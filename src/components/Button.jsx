export const Button = ({
  className = "",
  size = "default",
  children,
  href,
  ...props
}) => {
  const baseClasses = `
  relative overflow-hidden rounded-full font-medium
  focus:outline-none focus-visible:ring-2
  bg-[var(--color-primary)]
  text-[var(--color-primary-foreground)]
  hover:bg-[#1aa094]
  shadow-md
  inline-flex items-center justify-center
  `;

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  //  If href exists → render anchor
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        <span className="flex items-center justify-center gap-2">
          {children}
        </span>
      </a>
    );
  }

  //  Default button
  return (
    <button className={classes} {...props}>
      <span className="flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};