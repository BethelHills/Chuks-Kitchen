export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">Chuck's Kitchen</div>
          <p className="footer-text">
            Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.
          </p>
        </div>

        <div>
          <div className="footer-title">Quick Links</div>
          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#">Explore</a>
            <a href="#">My Orders</a>
            <a href="#">Account</a>
          </div>
        </div>

        <div>
          <div className="footer-title">Contact Us</div>
          <div className="footer-links">
            <a href="#">support@chuckskitchen.com</a>
            <a href="#">+234 000 000 0000</a>
            <a href="#">Lagos, Nigeria</a>
          </div>
        </div>

        <div>
          <div className="footer-title">Follow</div>
          <div className="footer-links">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Chuks Kitchen. All rights reserved. <br />
        Designed & Developed by <span className="brand-name">BCodeStack</span>
      </div>
    </footer>
  );
}
