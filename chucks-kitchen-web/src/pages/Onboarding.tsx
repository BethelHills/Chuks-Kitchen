import { Link } from "react-router-dom";
import "../styles/auth.css";
import { IMAGES } from "@/lib/images";

export default function Onboarding() {
  return (
    <div className="auth-page" id="top">
      <section className="auth-card">
        {/* LEFT IMAGE SIDE - same as Signup */}
        <div className="auth-left">
          <img
            src={IMAGES.onboarding}
            alt="Chuks Kitchen"
            className="auth-left-img"
            onError={(e) => {
              e.currentTarget.src = "/images/onboarding.jpg";
            }}
          />
          <div className="auth-overlay" />
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

      {/* FOOTER - same as Signup */}
      <footer className="auth-footer">
        <div className="auth-footer-inner">
          <div className="auth-footer-col">
            <div className="auth-footer-logo">Chuks Kitchen</div>
            <p>
              Bringing the authentic flavors of Nigerian home cooking to your
              table, with passion and care.
            </p>
          </div>

          <div className="auth-footer-col">
            <h4>Quick Links</h4>
            <a href="#">Home</a>
            <a href="#">Explore</a>
            <a href="#">My Order</a>
            <a href="#">Account</a>
            <a href="#">Contact</a>
          </div>

          <div className="auth-footer-col">
            <h4>Contact Us</h4>
            <a href="#">+234 801 234 5678</a>
            <a href="#">hello@chuckskitchen.com</a>
            <a href="#">123 Taste Blvd, Lagos, Nigeria</a>
          </div>

          <div className="auth-footer-col auth-social">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Linkedin</a>
            <a href="#">Instagram</a>
          </div>
        </div>

        <div className="auth-footer-bottom">
          © 2020 Lift Media. All rights reserved.
        </div>
      </footer>

      <a href="#top" className="auth-scroll" aria-label="Scroll to top">↑</a>
    </div>
  );
}
