import { Link } from "react-router-dom";
import "../styles/delivery-details.css";

export default function DeliveryDetails() {
  return (
    <div className="dd" id="top">
      {/* NAV */}
      <header className="dd-nav">
        <div className="dd-nav-inner">
          <Link to="/" className="dd-logo">Chuks Kitchen</Link>

          <nav className="dd-links">
            <Link className="dd-link" to="/home">Home</Link>
            <Link className="dd-link" to="/explore">Explore</Link>
            <Link className="dd-link" to="/cart">My Orders</Link>
            <Link className="dd-link" to="/account">Account</Link>
          </nav>

          <Link to="/login" className="dd-login">Login</Link>
        </div>
      </header>

      {/* BODY */}
      <main className="dd-wrap">
        <section className="dd-card">
          <h1 className="dd-title">Delivery Details</h1>
          <div className="dd-rule" />

          <div className="dd-address">
            <div className="dd-address-left">
              <div>Home: 123 Main Street, Victoria Island, Lagos</div>
              <div>Apt 4B, Opposite Mega Plaza</div>
            </div>

            <a className="dd-change" href="#">Change Address</a>
          </div>

          <div className="dd-block">
            <div className="dd-label">Delivery Time</div>
            <input className="dd-input" defaultValue="ASAP(30-25)" />
          </div>

          <div className="dd-block">
            <div className="dd-label">Delivery Instructions (Optional)</div>
            <textarea
              className="dd-textarea"
              placeholder="E.g leave at the front of the door, knock twice.................."
            />
          </div>

          <div className="dd-subtitle">Contact Address</div>
          <input className="dd-input" defaultValue="+234 801 234 5678" />
        </section>
      </main>

      {/* FOOTER */}
      <footer className="dd-footer">
        <div className="dd-footer-inner">
          <div>
            <Link to="/" className="dd-footer-logo">Chuks Kitchen</Link>
            <p className="dd-footer-text">
              Bringing the authentic flavors of Nigerian home cooking to your table,
              with passion and care.
            </p>
          </div>

          <div>
            <div className="dd-footer-title">Quick Links</div>
            <div className="dd-footer-links">
              <Link to="/home">Home</Link>
              <Link to="/explore">Explore</Link>
              <Link to="/orders">My Order</Link>
              <Link to="/account">Account</Link>
              <a href="#">Contact</a>
            </div>
          </div>

          <div>
            <div className="dd-footer-title">Contact Us</div>
            <div className="dd-footer-links">
              <a href="tel:+2348012345678">+234 801 234 5678</a>
              <a href="mailto:hello@chuckskitchen.com">hello@chuckskitchen.com</a>
              <span>123 Taste Blvd, Lagos, Nigeria</span>
            </div>
          </div>

          <div>
            <div className="dd-footer-links dd-social">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Linkedin</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>

        <div className="dd-footer-bottom footer-bottom">
          © 2026 Chuks Kitchen. All rights reserved. <br />
          Designed & Developed by <span className="brand-name">BCodeStack</span>
        </div>
      </footer>

      <a className="dd-float" href="#top" aria-label="Scroll to top">
        ↑
      </a>
    </div>
  );
}
