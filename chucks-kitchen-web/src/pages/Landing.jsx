import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="app">
      <Navbar />

      <main className="page">
        <section className="split">
          <div
            className="split-left"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&w=1600&q=70)",
            }}
          />

          <div className="split-right">
            <div className="panel">
              <h1 className="h1">Your Authentic Taste of Nigeria</h1>
              <p className="muted">
                Experience homemade flavors delivered fresh to your door. We bring the rich culinary heritage of Nigeria right to your doorstep.
              </p>

              <div className="feature-row">
                <div className="pill">Freshly Prepared</div>
                <div className="pill">Support Local Business</div>
              </div>
              <div className="feature-row">
                <div className="pill">Fast & Reliable Delivery</div>
              </div>

              <div className="btn-row">
                <Link className="btn btn-primary" to="/home">Start Your Order</Link>
                <button className="btn btn-outline">Learn More About Us</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
