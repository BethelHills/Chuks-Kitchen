import { Link } from "react-router-dom";
import "../styles/onboarding.css";

export default function Onboarding() {
  return (
    <div className="ob-page" id="top">
      <header className="ob-topbar">
        <div className="ob-topbar-inner">
          <div className="ob-logo">Chuks Kitchen</div>

          <Link to="/login" className="ob-signin">
            Sign In
          </Link>
        </div>
      </header>

      <main className="ob-wrap">
        <section className="ob-card">
          <div
            className="ob-left"
            style={{ backgroundImage: "url(/images/onboarding.jpg)" }}
          />

          <div className="ob-right">
            <div className="ob-content">
              <h1 className="ob-title">Your Authentic Taste of Nigeria</h1>

              <p className="ob-desc">
                Experience homemade flavors delivered fresh to your desk or home.
                We bring the rich culinary heritage of Nigeria right to your doorstep.
              </p>

              <div className="ob-features">
                <div className="ob-feature">
                  <span className="ob-iconbox" aria-hidden="true">🍴</span>
                  <span className="ob-feature-text">Freshly Prepared</span>
                </div>

                <div className="ob-feature">
                  <span className="ob-iconbox" aria-hidden="true">🍴</span>
                  <span className="ob-feature-text">Support Local Business</span>
                </div>

                <div className="ob-feature ob-feature-wide">
                  <span className="ob-iconbox" aria-hidden="true">🚚</span>
                  <span className="ob-feature-text">Fast &amp; Reliable Delivery</span>
                </div>
              </div>

              <div className="ob-actions">
                <Link to="/home" className="ob-btn ob-btn-primary">
                  Start Your Order
                </Link>

                <button type="button" className="ob-btn ob-btn-outline">
                  Learn More About Us
                </button>
              </div>

              <div className="ob-bottom">
                <span className="ob-copy">© 2024 Chuks Kitchen.</span>
                <span className="ob-links">
                  <a href="#" className="ob-link">Privacy Policy</a>
                  <a href="#" className="ob-link">Terms of Service</a>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="ob-footer">
        <div className="ob-footer-inner">
          <div className="ob-footer-col">
            <div className="ob-footer-logo">Chuks Kitchen</div>
            <p className="ob-footer-text">
              Bringing the authentic flavors of Nigerian home cooking to your table,
              with passion and care.
            </p>
          </div>

          <div className="ob-footer-col">
            <div className="ob-footer-title">Quick Links</div>
            <div className="ob-footer-links">
              <a href="#">Home</a>
              <a href="#">Explore</a>
              <a href="#">My Order</a>
              <a href="#">Account</a>
              <a href="#">Contact</a>
            </div>
          </div>

          <div className="ob-footer-col">
            <div className="ob-footer-title">Contact Us</div>
            <div className="ob-footer-links">
              <a href="#">+234 801 234 5678</a>
              <a href="#">hello@chuckskitchen.com</a>
              <a href="#">123 Taste Blvd, Lagos, Nigeria</a>
            </div>
          </div>

          <div className="ob-footer-col ob-footer-social">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Linkedin</a>
            <a href="#">Instagram</a>
          </div>
        </div>

        <div className="ob-footer-bottom">© 2020 Lift Media. All rights reserved.</div>
      </footer>

      <a className="ob-float" href="#top" aria-label="Scroll to top">↑</a>
    </div>
  );
}
