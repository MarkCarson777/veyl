type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
