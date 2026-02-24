import { Link, NavLink } from "react-router-dom";

export default function Navbar({ active = "landing" }) {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link className="brand" to="/">Chuck's Kitchen</Link>

        {active === "home" ? (
          <nav className="nav-links">
            <NavLink to="/home" className="navlink">Home</NavLink>
            <NavLink to="/explore" className="navlink">Explore</NavLink>
            <NavLink to="/orders" className="navlink">My Orders</NavLink>
            <NavLink to="/account" className="navlink">Account</NavLink>
          </nav>
        ) : (
          <div />
        )}

        <Link className="btn btn-outline" to="/login">Sign in</Link>
      </div>
    </header>
  );
}
