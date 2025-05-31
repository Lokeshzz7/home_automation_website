export const Button = ({ children, className = "", ...props }) => (
  <button
    className={`px-6 py-3 rounded-xl transition-all font-medium ${className}`}
    {...props}
  >
    {children}
  </button>
);
