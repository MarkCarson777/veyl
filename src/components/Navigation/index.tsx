import { Link } from "@tanstack/react-router";

export const Navigation = () => {
  return (
    <div className="flex justify-between">
      <Link to="/">Home</Link>
      <Link to="/producers">Producers</Link>
      <Link to="/about-veyl">About Veyl</Link>
      <Link to="/get-in-touch">Get in Touch</Link>
      <Link to="/join-veyl">Join Veyl</Link>
    </div>
  );
};
