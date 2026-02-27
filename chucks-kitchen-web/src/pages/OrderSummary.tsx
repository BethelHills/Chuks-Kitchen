import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/order-summary.css";

function money(n: number) {
  return `₦${n.toLocaleString("en-NG")}`;
}

export default function OrderSummary() {
  const [mode, setMode] = useState<"delivery" | "pickup">("delivery");

  const subtotal = 9200;
  const deliveryFee = 500;
  const serviceFee = 200;
  const tax = 0;
  const total = subtotal + deliveryFee + serviceFee + tax;

  return (
    <div className="os" id="top">
      {/* NAV */}
      <header className="os-nav">
        <div className="os-nav-inner">
          <Link to="/" className="os-logo">Chuks Kitchen</Link>

          <nav className="os-links">
            <Link className="os-link" to="/home">Home</Link>
            <Link className="os-link" to="/explore">Explore</Link>
            <Link className="os-link active" to="/cart">My Orders</Link>
            <Link className="os-link" to="/account">Account</Link>
          </nav>

          <Link to="/login" className="os-login">Login</Link>
        </div>
      </header>

      {/* BODY */}
      <main className="os-wrap">
        <section className="os-card">
          <h1 className="os-title">Order Summary</h1>
          <div className="os-rule" />

          <div className="os-promo-title">Add a Promo Code</div>
          <div className="os-promo">
            <input placeholder="Enter Code here" />
            <button type="button">Apply</button>
          </div>

          <div className="os-breakdown">
            <div className="os-row">
              <span>Subtotal</span>
              <span>{money(subtotal)}</span>
            </div>
            <div className="os-row">
              <span>Delivery Fee</span>
              <span>{money(deliveryFee)}</span>
            </div>
            <div className="os-row">
              <span>Service Fee</span>
              <span>{money(serviceFee)}</span>
            </div>
            <div className="os-row">
              <span>Tax</span>
              <span>{money(tax)}</span>
            </div>
          </div>

          <div className="os-rule" />

          <div className="os-total">
            <span>Total</span>
            <span>{money(total)}</span>
          </div>

          <div className="os-tabs">
            <button
              className={mode === "delivery" ? "active" : ""}
              type="button"
              onClick={() => setMode("delivery")}
            >
              Delivery
            </button>
            <button
              className={mode === "pickup" ? "active" : ""}
              type="button"
              onClick={() => setMode("pickup")}
            >
              Pick up
            </button>
          </div>

          <div className="os-notes-title">Special Instructions for Restaurant</div>
          <textarea
            className="os-notes"
            placeholder="E.g no onion, food is too spicy, food is too hot"
          />

          <Link to="/checkout" className="os-checkout">
            Proceed to Checkout
          </Link>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="os-footer">
        <div className="os-footer-inner">
          <div>
            <Link to="/" className="os-footer-logo">Chuks Kitchen</Link>
            <p className="os-footer-text">
              Bringing the authentic flavors of Nigerian home cooking to your table,
              with passion and care.
            </p>
          </div>

          <div>
            <div className="os-footer-title">Quick Links</div>
            <div className="os-footer-links">
              <Link to="/home">Home</Link>
              <Link to="/explore">Explore</Link>
              <Link to="/orders">My Order</Link>
              <Link to="/account">Account</Link>
              <a href="#">Contact</a>
            </div>
          </div>

          <div>
            <div className="os-footer-title">Contact Us</div>
            <div className="os-footer-links">
              <a href="tel:+2348012345678">+234 801 234 5678</a>
              <a href="mailto:hello@chuckskitchen.com">hello@chuckskitchen.com</a>
              <span>123 Taste Blvd, Lagos, Nigeria</span>
            </div>
          </div>

          <div>
            <div className="os-footer-links os-social">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Linkedin</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>

        <div className="os-footer-bottom">© 2026 Chuck's Kitchen. All rights reserved.</div>
      </footer>

      <a className="os-float" href="#top" aria-label="Scroll to top">↑</a>
    </div>
  );
}
