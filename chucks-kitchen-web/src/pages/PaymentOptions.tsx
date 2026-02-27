import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/payment-options.css";

type PayMethod = "card" | "bank" | "transfer";

export default function PaymentOptions() {
  const [method, setMethod] = useState<PayMethod>("card");

  return (
    <div className="pay" id="top">
      {/* NAV */}
      <header className="pay-nav">
        <div className="pay-nav-inner">
          <Link to="/" className="pay-logo">Chuks Kitchen</Link>

          <nav className="pay-links">
            <Link className="pay-link" to="/home">Home</Link>
            <Link className="pay-link" to="/explore">Explore</Link>
            <Link className="pay-link" to="/cart">My Orders</Link>
            <Link className="pay-link" to="/account">Account</Link>
          </nav>

          <Link to="/login" className="pay-login">Login</Link>
        </div>
      </header>

      {/* BODY */}
      <main className="pay-wrap">
        <section className="pay-card">
          <h1 className="pay-title">Payment</h1>
          <div className="pay-rule" />

          <div className="pay-sub">Pay With:</div>

          <div className="pay-methods">
            <label className="pay-method">
              <input
                type="radio"
                name="method"
                checked={method === "card"}
                onChange={() => setMethod("card")}
              />
              <span>Card</span>
            </label>

            <label className="pay-method muted">
              <input
                type="radio"
                name="method"
                checked={method === "bank"}
                onChange={() => setMethod("bank")}
              />
              <span>Bank</span>
            </label>

            <label className="pay-method muted">
              <input
                type="radio"
                name="method"
                checked={method === "transfer"}
                onChange={() => setMethod("transfer")}
              />
              <span>Transfer</span>
            </label>
          </div>

          <div className="pay-form">
            <div className="pay-label">Card Number</div>
            <input
              className="pay-input"
              placeholder="1234  5678  9101  1121"
              disabled={method !== "card"}
            />

            <div className="pay-row">
              <div>
                <div className="pay-label">Expiration Date</div>
                <input
                  className="pay-input"
                  placeholder="MM/YY"
                  disabled={method !== "card"}
                />
              </div>

              <div>
                <div className="pay-label">CVV</div>
                <input
                  className="pay-input"
                  placeholder="123"
                  disabled={method !== "card"}
                />
              </div>
            </div>

            <label className="pay-save">
              <input type="checkbox" disabled={method !== "card"} />
              <span>Save card details</span>
            </label>

            <button className="pay-btn" type="button">
              Pay ₦9,900
            </button>

            <p className="pay-note">
              Your personal data will be used to process your order, support your
              experience throughout this website, and for other purposes described
              in our privacy policy.
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="pay-footer">
        <div className="pay-footer-inner">
          <div>
            <Link to="/" className="pay-footer-logo">Chuks Kitchen</Link>
            <p className="pay-footer-text">
              Bringing the authentic flavors of Nigerian home cooking to your table,
              with passion and care.
            </p>
          </div>

          <div>
            <div className="pay-footer-title">Quick Links</div>
            <div className="pay-footer-links">
              <Link to="/home">Home</Link>
              <Link to="/explore">Explore</Link>
              <Link to="/orders">My Order</Link>
              <Link to="/account">Account</Link>
              <a href="#">Contact</a>
            </div>
          </div>

          <div>
            <div className="pay-footer-title">Contact Us</div>
            <div className="pay-footer-links">
              <a href="tel:+2348012345678">+234 801 234 5678</a>
              <a href="mailto:hello@chuckskitchen.com">hello@chuckskitchen.com</a>
              <span>123 Taste Blvd, Lagos, Nigeria</span>
            </div>
          </div>

          <div>
            <div className="pay-footer-links pay-social">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Linkedin</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>

        <div className="pay-footer-bottom footer-bottom">
          © 2026 Chuks Kitchen. All rights reserved. <br />
          Designed & Developed by <span className="brand-name">BCodeStack</span>
        </div>
      </footer>

      <a className="pay-float" href="#top" aria-label="Scroll to top">
        ↑
      </a>
    </div>
  );
}
