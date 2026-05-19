import { Link } from "@tanstack/react-router";

export const Footer = () => {
  return (
    <div className="flex flex-col">
      <Link to="/terms">Terms</Link>
      <Link to="/privacy">Privacy</Link>
    </div>
  );
};
