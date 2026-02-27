import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="auth-page" id="top">
      <section className="auth-card auth-card-login">
        <div className="auth-right">
          <div className="auth-form">
            <div className="auth-logo-small">Chuks Kitchen</div>
            <h2 className="auth-title">Login your Account</h2>

            <form>
              <div className="auth-field">
                <label>Email or phone number</label>
                <input type="email" placeholder="name@gmail.com" />
              </div>

              <div className="auth-field">
                <label>Password</label>
                <input type="password" placeholder="••••••••" />
              </div>

              <div className="auth-row">
                <div />
                <Link to="#" className="auth-link">Forgot Password</Link>
              </div>

              <button
                type="button"
                className="auth-btn-primary"
                onClick={() => navigate("/home")}
              >
                Continue
              </button>

              <div className="auth-divider">Or continue with</div>

              <button type="button" className="auth-btn-social">
                Continue with Google
              </button>

              <button type="button" className="auth-btn-social">
                Continue with Apple
              </button>

              <p className="auth-alt">
                Do not have an account?{" "}
                <Link to="/signup" className="auth-link">
                  Create account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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

        <div className="auth-footer-bottom footer-bottom">
          © 2026 Chuks Kitchen. All rights reserved. <br />
          Designed & Developed by <span className="brand-name">BCodeStack</span>
        </div>
      </footer>

      <a href="#top" className="auth-scroll" aria-label="Scroll to top">↑</a>
    </div>
  );
}
