import { Link } from "react-router-dom";
import "../styles/signup-continue.css";

export default function SignupContinue() {
  return (
    <div className="sc-page" id="top">
      <div className="sc-shell">
        <section className="sc-card">
          {/* LEFT */}
          <div
            className="sc-left"
            style={{ backgroundImage: "url(/images/signup.jpg)" }}
          >
            <div className="sc-overlay" />
            <div className="sc-left-content">
              <div className="sc-left-title">Chuks Kitchen</div>
              <div className="sc-left-sub">
                Your journey to delicious, authentic Nigerian meals starts here. Sign up
                or log in to order your favorites today!
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="sc-right">
            <div className="sc-form">
              <div className="sc-logo">Chuks Kitchen</div>
              <h1 className="sc-h1">Create Your Account</h1>

              <div className="sc-field">
                <label>Email</label>
                <div className="sc-input">
                  <span className="sc-ico" aria-hidden="true">✉️</span>
                  <input placeholder="name@gmail.com" />
                </div>
              </div>

              <div className="sc-field">
                <label>Phone number</label>
                <div className="sc-input">
                  <span className="sc-ico" aria-hidden="true">📞</span>
                  <input placeholder="8123340690" />
                </div>
              </div>

              <div className="sc-field">
                <label>Password</label>
                <div className="sc-input sc-input-focus">
                  <span className="sc-ico" aria-hidden="true">🔒</span>
                  <input type="password" defaultValue="QWE123#" />
                  <button className="sc-eye" type="button" aria-label="Toggle password">
                    👁️
                  </button>
                </div>
              </div>

              <div className="sc-field">
                <label>Confirm password</label>
                <div className="sc-input">
                  <span className="sc-ico" aria-hidden="true">🔒</span>
                  <input type="password" defaultValue="QWE123#" />
                  <button className="sc-eye" type="button" aria-label="Toggle password">
                    👁️
                  </button>
                </div>
              </div>

              <label className="sc-check">
                <input type="checkbox" defaultChecked />
                <span>
                  I agree to the{" "}
                  <a className="sc-link" href="#">Terms &amp; Conditions</a> and{" "}
                  <a className="sc-link" href="#">Privacy Policy</a>
                </span>
              </label>

              <button className="sc-btn-primary">Continue</button>

              <div className="sc-divider">Or continue with</div>

              <button className="sc-btn-social" type="button">
                <span className="sc-social-ico">G</span>
                Continue with Google
              </button>

              <button className="sc-btn-social" type="button">
                <span className="sc-social-ico sc-fb">f</span>
                Continue with Apple
              </button>

              <div className="sc-bottom">
                Already have an account?{" "}
                <Link to="/login" className="sc-link">Sign In</Link>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="sc-footer">
          <div className="sc-footer-inner">
            <div className="sc-footer-col">
              <div className="sc-footer-logo">Chuks Kitchen</div>
              <p className="sc-footer-text">
                Bringing the authentic flavors of Nigerian home cooking to your table,
                with passion and care.
              </p>
            </div>

            <div className="sc-footer-col">
              <div className="sc-footer-title">Quick Links</div>
              <div className="sc-footer-links">
                <a href="#">Home</a>
                <a href="#">Explore</a>
                <a href="#">My Order</a>
                <a href="#">Account</a>
                <a href="#">Contact</a>
              </div>
            </div>

            <div className="sc-footer-col">
              <div className="sc-footer-title">Contact Us</div>
              <div className="sc-footer-links">
                <a href="#">+234 801 234 5678</a>
                <a href="#">hello@chuckskitchen.com</a>
                <a href="#">123 Taste Blvd, Lagos, Nigeria</a>
              </div>
            </div>

            <div className="sc-footer-col sc-footer-social">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Linkedin</a>
              <a href="#">Instagram</a>
            </div>
          </div>

          <div className="sc-footer-bottom">© 2020 Lift Media. All rights reserved.</div>
        </footer>
      </div>

      <a className="sc-float" href="#top" aria-label="Scroll to top">↑</a>
    </div>
  );
}
