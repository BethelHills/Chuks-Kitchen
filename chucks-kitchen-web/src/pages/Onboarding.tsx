import { Link } from "react-router-dom";
import "../styles/auth.css";
import { IMAGES } from "@/lib/images";

export default function Onboarding() {
  return (
    <div className="auth-page" id="top">
      <section className="auth-card">
        {/* LEFT IMAGE SIDE - same as Signup */}
        <div className="auth-left auth-left-onboarding">
          <img
            src={IMAGES.onboarding}
            alt="Chuks Kitchen - Family enjoying Nigerian meals"
            className="auth-left-img"
            onError={(e) => {
              e.currentTarget.src = "/images/Onboarding%20%3A%20Welcome%20Responsive.jpg";
            }}
          />
          <div className="auth-left-content">
            <h1 className="auth-brand">Chuks Kitchen</h1>
            <p className="auth-left-text">
              Your journey to delicious, authentic Nigerian meals starts here.
              Sign up or log in to order your favorites today!
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT SIDE */}
        <div className="auth-right">
          <div className="auth-form">
            <div className="auth-header-row">
              <div className="auth-logo-small">Chuks Kitchen</div>
              <Link to="/login" className="auth-signin-btn">
                Sign In
              </Link>
            </div>

            <h2 className="auth-title">Your Authentic Taste of Nigeria</h2>
            <p className="auth-desc">
              Experience homemade flavors delivered fresh to your desk or home.
              We bring the rich culinary heritage of Nigeria right to your doorstep.
            </p>

            <div className="auth-features">
              <div className="auth-feature">
                <span className="auth-feature-icon" aria-hidden="true">🍴</span>
                <span>Freshly Prepared</span>
              </div>
              <div className="auth-feature">
                <span className="auth-feature-icon" aria-hidden="true">🍴</span>
                <span>Support Local Business</span>
              </div>
              <div className="auth-feature auth-feature-wide">
                <span className="auth-feature-icon" aria-hidden="true">🚚</span>
                <span>Fast &amp; Reliable Delivery</span>
              </div>
            </div>

            <div className="auth-actions">
              <Link to="/home" className="auth-btn-primary">
                Start Your Order
              </Link>
              <button type="button" className="auth-btn-outline">
                Learn More About Us
              </button>
            </div>

            <div className="auth-bottom-links">
              <span className="auth-copy">© 2024 Chuks Kitchen.</span>
              <span className="auth-links">
                <a href="#" className="auth-link">Privacy Policy</a>
                <a href="#" className="auth-link">Terms of Service</a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER - matches Home, Explore */}
      <footer className="auth-footer">
        <div className="auth-footer-inner">
          <div className="auth-footer-col">
            <Link to="/" className="auth-footer-logo">Chuks Kitchen</Link>
            <p>
              Bringing the authentic flavors of Nigerian home cooking to your
              table, with passion and care.
            </p>
          </div>

          <div className="auth-footer-col">
            <h4>Quick Links</h4>
            <Link to="/home">Home</Link>
            <Link to="/explore">Explore</Link>
            <Link to="/orders">My Order</Link>
            <Link to="/account">Account</Link>
            <a href="#">Contact</a>
          </div>

          <div className="auth-footer-col">
            <h4>Contact Us</h4>
            <a href="tel:+2348012345678">+234 801 234 5678</a>
            <a href="mailto:hello@chuckskitchen.com">hello@chuckskitchen.com</a>
            <span>123 Taste Blvd, Lagos, Nigeria</span>
          </div>

          <div className="auth-footer-col">
            <h4>Follow</h4>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>

        <div className="auth-footer-bottom footer-bottom">
          © 2026 Chuks Kitchen. All rights reserved. <br />
          Designed & Developed by <span className="brand-name">BCodeStack</span>
        </div>
      </footer>

      <a href="#top" className="auth-scroll" aria-label="Scroll to top">↑</a>
    </div>
  );
}
