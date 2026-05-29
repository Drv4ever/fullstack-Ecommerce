import  { useState } from "react";
import "./index.css";

interface NavbarProps {
  cartCount: number;
  onSearch: (query: string) => void;
}

const Navbar = ({ cartCount, onSearch }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="animation-bar">
        <div className="marquee-track">
          <span>
            Welcome to our E-commerce Store! Free shipping on orders over $50!
            &nbsp;&nbsp;•&nbsp;&nbsp;{" "}
          </span>
          <span>
            Welcome to our E-commerce Store! Free shipping on orders over $50!
            &nbsp;&nbsp;•&nbsp;&nbsp;{" "}
          </span>
        </div>
      </div>
      <div className="navbar">
        <div className="logo">E-commerce</div>
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {" "}
          {isMenuOpen ? "✖" : "☰"}
        </div>

        <div className={`navContent ${isMenuOpen ? "active" : ""}`}>
          <div className="nav-links">
            <a href="/">Explore</a>
            <a href="/Directory">Directory</a>
            <a href="/Academy">Academy</a>
            <a href="/Jobs">Jobs</a>
            <a href="/Market">Market</a>
          </div>
          <div className="search-bar">
            <input
              type="text"
              id="search"
              placeholder="Search products..."
              onChange={(e) => onSearch(e.target.value)}
            />
            <button>Search</button>
            <div className="cart-count">Cart: {cartCount}</div>
          </div>
          <div className="Login">
            <button>Login In</button>
          </div>
          <div className="SignUp">
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
