import { FaCar, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <div className="top-nav">
        <Link to="/" className="logo">
          <span>My Vehicle</span>
          <FaCar />
        </Link>
        
        <form className="search-box" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Search car"
            aria-label="Search for cars"
          />
          <button type="submit" aria-label="Search">
            <FaSearch />
          </button>
        </form>

        <div className="nav-right">
          <div className="auth-buttons">
            <Link to="/signup" className="signup-btn">
              Sign Up
            </Link>
            <Link to="/login" className="login-btn">
              Login
            </Link>
          </div>
          
          <Link to="/cart" className="cart-box">
            <FaShoppingCart aria-label="Shopping cart" />
            <span className="cart-count">0</span>
          </Link>
        </div>
      </div>

      <ul className="bottom-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;