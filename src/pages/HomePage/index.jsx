import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h2>Home Page</h2>

      <Link to="/login">
        <button type="button">Login</button>
      </Link>
    </>
  );
}

export default HomePage;
