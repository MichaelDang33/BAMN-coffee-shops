import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/coffeeshops">Coffee Shops</Link>
      &nbsp; | &nbsp;
      <Link to="/createCS">Create A Coffee Shop Listing</Link>
      &nbsp; | &nbsp;
      <Link to="/coffeeshops/details">Coffee Shop Details</Link>

    </nav>
  );
}