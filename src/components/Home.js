import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <nav>
        <Link to="/contact">Contact</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/details">Details</Link>
      </nav>

      <h1>This is Home Page</h1>
    </>
  );
}