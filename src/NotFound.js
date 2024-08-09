import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>Page Not Found</p>
      <Link to="/">Back to Home page ...</Link>
    </div>
  );
};

export default NotFound;
