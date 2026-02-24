import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const nav = useNavigate();

  return (
    <div className="app">
      <Navbar />

      <main className="page">
        <section className="split">
          <div
            className="split-left overlay-orange"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&w=1600&q=70)",
            }}
          >
            <div className="left-copy">
              <div className="left-title">Chuks Kitchen</div>
              <div className="left-sub">
                Your journey to delicious, authentic Nigerian meals starts here.
                Sign up or log in to order your favorites today!
              </div>
            </div>
          </div>

          <div className="split-right">
            <div className="auth">
              <div className="auth-brand">Chuck's Kitchen</div>
              <h2 className="h2">Create Your Account</h2>

              <label className="field">
                <span>Email</span>
                <input placeholder="name@gmail.com" />
              </label>

              <label className="field">
                <span>Phone number</span>
                <input placeholder="+234..." />
              </label>

              <label className="field">
                <span>Password</span>
                <input type="password" placeholder="Create password" />
              </label>

              <label className="field">
                <span>Confirm password</span>
                <input type="password" placeholder="Confirm password" />
              </label>

              <label className="check">
                <input type="checkbox" />
                <span>I agree to the Terms & Conditions and Privacy Policy</span>
              </label>

              <button className="btn btn-primary w100" onClick={() => nav("/home")}>
                Continue
              </button>

              <div className="divider"><span />Or continue with<span /></div>

              <button className="btn btn-outline w100">Continue with Google</button>
              <button className="btn btn-outline w100">Continue with Apple</button>

              <div className="auth-bottom">
                Already have an account? <Link className="link" to="/login">Sign in</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
