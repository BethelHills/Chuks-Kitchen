import "../styles/card-loading.css";

export default function CardLoading() {
  return (
    <div className="cl" id="top">
      {/* NAV */}
      <header className="cl-nav">
        <div className="cl-nav-inner">
          <div className="cl-logo">Chuks Kitchen</div>

          <nav className="cl-links">
            <a className="cl-link" href="#">Home</a>
            <a className="cl-link" href="#">Explore</a>
            <a className="cl-link" href="#">My Orders</a>
            <a className="cl-link" href="#">Account</a>
          </nav>

          <button className="cl-login">Login</button>
        </div>
      </header>

      {/* BODY */}
      <main className="cl-wrap">
        <div className="cl-spinner" aria-label="Loading" />
      </main>

      {/* FOOTER */}
      <footer className="cl-footer">
        <div className="cl-footer-inner">
          <div>
            <div className="cl-footer-logo">Chuks Kitchen</div>
            <p className="cl-footer-text">
              Bringing the authentic flavors of Nigerian home cooking to your table,
              with passion and care.
            </p>
          </div>

          <div>
            <div className="cl-footer-title">Quick Links</div>
            <div className="cl-footer-links">
              <a href="#">Home</a>
              <a href="#">Explore</a>
              <a href="#">My Order</a>
              <a href="#">Account</a>
              <a href="#">Contact</a>
            </div>
          </div>

          <div>
            <div className="cl-footer-title">Contact Us</div>
            <div className="cl-footer-links">
              <a href="#">+234 801 234 5678</a>
              <a href="#">hello@chuckskitchen.com</a>
              <a href="#">123 Taste Blvd, Lagos, Nigeria</a>
            </div>
          </div>

          <div>
            <div className="cl-footer-links cl-social">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Linkedin</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>

        <div className="cl-footer-bottom footer-bottom">
          © 2026 Chuks Kitchen. All rights reserved. <br />
          Designed & Developed by <span className="brand-name">BCodeStack</span>
        </div>
      </footer>

      <a className="cl-float" href="#top" aria-label="Scroll to top">
        ↑
      </a>
    </div>
  );
}
