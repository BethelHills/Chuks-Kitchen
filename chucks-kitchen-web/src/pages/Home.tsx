import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  const categories = [
    { title: "Jollof Delights", img: "/images/cat-jollof.jpg" },
    { title: "Swallow & Soups", img: "/images/cat-swallow.jpg" },
    { title: "Grills & BBQ", img: "/images/cat-grills.jpg" },
    { title: "Sweet Treats", img: "/images/cat-sweet.jpg" },
    { title: "Jollof Delights", img: "/images/cat-jollof.jpg" },
    { title: "Jollof Delights", img: "/images/cat-jollof.jpg" },
  ];

  const specials = [
    {
      title: "Spicy Tilapia Pepper Soup",
      desc: "A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.",
      price: "₦3,500",
      img: "/images/meal-pepper-soup.jpg",
    },
    {
      title: "Jollof Rice & Fried Chicken",
      desc: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      price: "₦3,500",
      img: "/images/meal-jollof-fried.jpg",
    },
    {
      title: "Jollof Rice & Fried Chicken",
      desc: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      price: "₦3,500",
      img: "/images/meal-jollof-fried.jpg",
    },
    {
      title: "Jollof Rice & Smoked Chicken",
      desc: "Our signature Jollof rice paired with tender smoked chicken for deep flavor.",
      price: "₦3,500",
      img: "/images/meal-jollof-smoked.jpg",
    },
    {
      title: "Jollof Rice & Fried Chicken",
      desc: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      price: "₦3,500",
      img: "/images/meal-jollof-fried.jpg",
    },
    {
      title: "Egusi Soup & Pounded Yam",
      desc: "Rich and savory egusi soup with assorted meats, paired with freshly pounded yam.",
      price: "₦3,500",
      img: "/images/meal-egusi.jpg",
    },
  ];

  return (
    <div className="hm" id="top">
      {/* NAV */}
      <header className="hm-nav">
        <div className="hm-nav-inner">
          <Link to="/" className="hm-logo">Chuks Kitchen</Link>

          <nav className="hm-links">
            <Link className="hm-link active" to="/home">Home</Link>
            <Link className="hm-link" to="/explore">Explore</Link>
            <Link className="hm-link" to="/orders">My Orders</Link>
            <Link className="hm-link" to="/account">Account</Link>
          </nav>

          <Link to="/login" className="hm-login">Login</Link>
        </div>
      </header>

      {/* HERO */}
      <section
        className="hm-hero"
        style={{ backgroundImage: "url(/images/home-hero.jpg)" }}
      >
        <div className="hm-hero-overlay" />

        <div className="hm-hero-inner">
          <h1 className="hm-hero-title">The Heart of Nigerian Home Cooking</h1>
          <p className="hm-hero-sub">Handcrafted with passion, delivered with care.</p>
          <Link to="/menu" className="hm-cta">Discover what's new</Link>
        </div>

        <div className="hm-search">
          <span className="hm-search-ico">🔍</span>
          <input placeholder="What are you craving for today?" />
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="hm-section">
        <h2 className="hm-title">Popular Categories</h2>

        <div className="hm-grid hm-grid-cats">
          {categories.map((c, i) => (
            <Link to={`/menu?category=${encodeURIComponent(c.title)}`} className="hm-cat" key={i}>
              <img src={c.img} alt={c.title} />
              <div className="hm-cat-name">{c.title}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* SPECIALS */}
      <section className="hm-section">
        <h2 className="hm-title">Chef's Specials</h2>

        <div className="hm-grid hm-grid-meals">
          {specials.map((m, i) => (
            <div className="hm-meal" key={i}>
              <img className="hm-meal-img" src={m.img} alt={m.title} />

              <div className="hm-meal-body">
                <div className="hm-meal-title">{m.title}</div>
                <div className="hm-meal-desc">{m.desc}</div>

                <div className="hm-meal-bottom">
                  <div className="hm-price">{m.price}</div>
                  <button className="hm-add">Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROMO */}
      <section
        className="hm-promo"
        style={{ backgroundImage: "url(/images/promo.jpg)" }}
      >
        <div className="hm-promo-overlay" />
        <div className="hm-promo-inner">
          <h2 className="hm-promo-title">Introducing Our New Menu Additions!</h2>
          <p className="hm-promo-desc">
            Explore exciting new dishes, crafted with the freshest ingredients and authentic
            Nigerian flavors. Limited time offer!
          </p>
          <Link to="/menu" className="hm-cta">Discover what's new</Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="hm-footer">
        <div className="hm-footer-inner">
          <div>
            <Link to="/" className="hm-footer-logo">Chuks Kitchen</Link>
            <p className="hm-footer-text">
              Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.
            </p>
          </div>

          <div>
            <div className="hm-footer-title">Quick Links</div>
            <div className="hm-footer-links">
              <Link to="/home">Home</Link>
              <Link to="/explore">Explore</Link>
              <Link to="/orders">My Order</Link>
              <Link to="/account">Account</Link>
            </div>
          </div>

          <div>
            <div className="hm-footer-title">Contact Us</div>
            <div className="hm-footer-links">
              <a href="tel:+2348012345678">+234 801 234 5678</a>
              <a href="mailto:hello@chuckskitchen.com">hello@chuckskitchen.com</a>
              <span>123 Taste Blvd, Lagos, Nigeria</span>
            </div>
          </div>

          <div>
            <div className="hm-footer-title">Follow</div>
            <div className="hm-footer-links">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>

        <div className="hm-footer-bottom">© 2026 Chuck's Kitchen. All rights reserved.</div>
      </footer>

      <a className="hm-float" href="#top" aria-label="Scroll to top">↑</a>
    </div>
  );
}
