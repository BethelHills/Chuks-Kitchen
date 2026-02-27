import "../styles/order-complete.css";

export default function OrderComplete() {
  return (
    <div className="oc" id="top">
      {/* NAV */}
      <header className="oc-nav">
        <div className="oc-nav-inner">
          <div className="oc-logo">Chuks Kitchen</div>

          <nav className="oc-links">
            <a className="oc-link" href="#">Home</a>
            <a className="oc-link" href="#">Explore</a>
            <a className="oc-link" href="#">My Orders</a>
            <a className="oc-link" href="#">Account</a>
          </nav>

          <button className="oc-login">Login</button>
        </div>
      </header>

      {/* BODY */}
      <main className="oc-wrap">
        <section className="oc-center">
          <div className="oc-check">
            <span className="oc-tick">✓</span>
          </div>

          <div className="oc-h1">Order Placed Successfully!</div>
          <div className="oc-sub">Your delicious Chuks Kitchen meal is on its way!</div>

          <div className="oc-dot" />

          <div className="oc-order">Order #123RGR231567Y Confirmed</div>

          <button className="oc-btn" type="button">
            Track Order
          </button>

          <div className="oc-receipt">Generate Receipt</div>

          <a className="oc-help" href="#">
            Need help with your order?
          </a>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="oc-footer">
        <div className="oc-footer-inner">
          <div>
            <div className="oc-footer-logo">Chuks Kitchen</div>
            <p className="oc-footer-text">
              Bringing the authentic flavors of Nigerian home cooking to your table,
              with passion and care.
            </p>
          </div>

          <div>
            <div className="oc-footer-title">Quick Links</div>
            <div className="oc-footer-links">
              <a href="#">Home</a>
              <a href="#">Explore</a>
              <a href="#">My Order</a>
              <a href="#">Account</a>
              <a href="#">Contact</a>
            </div>
          </div>

          <div>
            <div className="oc-footer-title">Contact Us</div>
            <div className="oc-footer-links">
              <a href="#">+234 801 234 5678</a>
              <a href="#">hello@chuckskitchen.com</a>
              <a href="#">123 Taste Blvd, Lagos, Nigeria</a>
            </div>
          </div>

          <div>
            <div className="oc-footer-links oc-social">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Linkedin</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>

        <div className="oc-footer-bottom">© 2020 Lift Media. All rights reserved.</div>
      </footer>

      <a className="oc-float" href="#top" aria-label="Scroll to top">
        ↑
      </a>
    </div>
  );
}
