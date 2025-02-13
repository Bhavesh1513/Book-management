import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => (
  <div className="not-found">
    <h2>Page Not Found</h2>
    <Link to="/">Go Home</Link>
  </div>
);

export default NotFound;
