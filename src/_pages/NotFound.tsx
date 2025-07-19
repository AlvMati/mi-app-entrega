import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Sorry, that page cannot be found.</p>
      <Link to="/">Back to the homepage...</Link>
    </div>
  );
}
export default NotFound;