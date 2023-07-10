import { Link } from "react-router-dom";

function Error() {
  return (
    <div style={{ width: "18rem", margin: "2rem auto" }}>
      <h3>Ohh! Page not found</h3>
      <p>We can't seem to find the page you're looking for</p>
      <Link to="/">back home</Link>
    </div>
  );
}

export default Error;
