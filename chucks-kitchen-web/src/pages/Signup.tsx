import { Link } from "react-router-dom";
import "../styles/auth.css";
import { IMAGES } from "@/lib/images";

export default function Signup() {
  return (
    <div className="auth-page" id="top">
      <section className="auth-card">
        {/* LEFT IMAGE SIDE */}
        <div className="auth-left auth-left-signup">
          <img
            src={IMAGES.signup}
            alt="Chuks Kitchen - Sign up for delicious Nigerian meals"
            className="auth-left-img"
            onError={(e) => {
              e.currentTarget.src = "/images/signup.jpg";
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

        {/* RIGHT FORM SIDE */}
        <div className="auth-right">
          <div className="auth-form">
            <div className="auth-logo-small">Chuks Kitchen</div>
            <h2 className="auth-title">Create Your Account</h2>

            <form>
              <div className="auth-field">
                <label>Email</label>
                <input type="email" placeholder="name@gmail.com" />
              </div>

              <div className="auth-field">
                <label>Phone Number</label>
                <input type="tel" placeholder="+234 801 234 5678" />
              </div>

              <div className="auth-field">
                <label>Password</label>
                <input type="password" placeholder="••••••••" />
              </div>

              <div className="auth-field">
                <label>Confirm Password</label>
                <input type="password" placeholder="••••••••" />
              </div>

              <button className="auth-btn-primary">Continue</button>

              <div className="auth-divider">Or continue with</div>

              <button type="button" className="auth-btn-social">
                Continue with Google
              </button>

              <button type="button" className="auth-btn-social">
                Continue with Apple
              </button>

              <p className="auth-alt">
                Already have an account?{" "}
                <Link to="/login" className="auth-link">
                  Login
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

        <div className="auth-footer-bottom">
          © 2020 Lift Media. All rights reserved.
        </div>
      </footer>

      <a href="#top" className="auth-scroll" aria-label="Scroll to top">↑</a>
    </div>
  );
}
