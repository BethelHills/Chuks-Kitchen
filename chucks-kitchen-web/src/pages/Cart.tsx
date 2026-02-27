import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/lib/store";
import "../styles/cart.css";

function money(n: number) {
  return `₦${n.toLocaleString("en-NG")}`;
}

export default function Cart() {
  const { items, removeItem, updateQuantity, total } = useCart();
  const totalAmount = total();

  const inc = (id: string) => {
    const item = items.find((i) => i.menuItem.id === id);
    if (item) updateQuantity(id, item.quantity + 1);
  };

  const dec = (id: string) => {
    const item = items.find((i) => i.menuItem.id === id);
    if (item) {
      if (item.quantity > 1) updateQuantity(id, item.quantity - 1);
      else removeItem(id);
    }
  };

  if (items.length === 0) {
    return (
      <div className="ct" id="top">
        <header className="ct-nav">
          <div className="ct-nav-inner">
            <Link to="/" className="ct-logo">Chuks Kitchen</Link>
            <nav className="ct-links">
              <Link className="ct-link" to="/home">Home</Link>
              <Link className="ct-link" to="/explore">Explore</Link>
              <Link className="ct-link active" to="/cart">My Orders</Link>
              <Link className="ct-link" to="/account">Account</Link>
            </nav>
            <Link to="/login" className="ct-login">Login</Link>
          </div>
        </header>
        <main className="ct-wrap">
          <h1 className="ct-title">Your Cart</h1>
          <div className="ct-empty">
            <p>Your cart is empty.</p>
            <Link to="/menu" className="ct-more">+ Add items from Chuks Kitchen</Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="ct" id="top">
      {/* NAV */}
      <header className="ct-nav">
        <div className="ct-nav-inner">
          <Link to="/" className="ct-logo">Chuks Kitchen</Link>

          <nav className="ct-links">
            <Link className="ct-link" to="/home">Home</Link>
            <Link className="ct-link" to="/explore">Explore</Link>
            <Link className="ct-link active" to="/cart">My Orders</Link>
            <Link className="ct-link" to="/account">Account</Link>
          </nav>

          <Link to="/login" className="ct-login">Login</Link>
        </div>
      </header>

      {/* CONTENT */}
      <main className="ct-wrap">
        <h1 className="ct-title">Your Cart</h1>

        <section className="ct-box">
          {items.map((ci) => (
            <div className="ct-row" key={ci.menuItem.id}>
              <div className="ct-img">
                <img src={String(ci.menuItem.image)} alt={ci.menuItem.name} />
              </div>

              <div className="ct-info">
                <div className="ct-name">{ci.menuItem.name}</div>
                <div className="ct-note">
                  {ci.protein && `${ci.protein} • `}
                  {ci.extras?.length ? ci.extras.join(", ") : "Default"}
                </div>
              </div>

              <div className="ct-qty">
                <button className="ct-btn" type="button" onClick={() => inc(ci.menuItem.id)}>
                  +
                </button>
                <div className="ct-count">{ci.quantity}</div>
                <button className="ct-btn" type="button" onClick={() => dec(ci.menuItem.id)}>
                  −
                </button>
              </div>

              <div className="ct-price">{money(ci.menuItem.price * ci.quantity)}</div>

              <button
                className="ct-remove"
                type="button"
                onClick={() => removeItem(ci.menuItem.id)}
                aria-label="Remove item"
              >
                ×
              </button>
            </div>
          ))}

          <Link to="/menu" className="ct-more">
            +&nbsp;&nbsp;Add more items from Chuks Kitchen
          </Link>
        </section>

        <div className="ct-total">Total: {money(totalAmount)}</div>
      </main>

      {/* FOOTER */}
      <footer className="ct-footer">
        <div className="ct-footer-inner">
          <div>
            <Link to="/" className="ct-footer-logo">Chuks Kitchen</Link>
            <p className="ct-footer-text">
              Bringing the authentic flavors of Nigerian home cooking to your table,
              with passion and care.
            </p>
          </div>

          <div>
            <div className="ct-footer-title">Quick Links</div>
            <div className="ct-footer-links">
              <Link to="/home">Home</Link>
              <Link to="/explore">Explore</Link>
              <Link to="/orders">My Order</Link>
              <Link to="/account">Account</Link>
              <a href="#">Contact</a>
            </div>
          </div>

          <div>
            <div className="ct-footer-title">Contact Us</div>
            <div className="ct-footer-links">
              <a href="tel:+2348012345678">+234 801 234 5678</a>
              <a href="mailto:hello@chuckskitchen.com">hello@chuckskitchen.com</a>
              <span>123 Taste Blvd, Lagos, Nigeria</span>
            </div>
          </div>

          <div>
            <div className="ct-footer-links ct-social">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Linkedin</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>

        <div className="ct-footer-bottom">© 2026 Chuck's Kitchen. All rights reserved.</div>
      </footer>

      <a className="ct-float" href="#top" aria-label="Scroll to top">↑</a>
    </div>
  );
}
