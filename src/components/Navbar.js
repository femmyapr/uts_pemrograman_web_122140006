import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Femme Fashion</h1>
      <ul>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/wishlist">Wishlist</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
