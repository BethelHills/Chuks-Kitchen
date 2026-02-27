import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/cart.css";

type CartItem = {
  id: string;
  title: string;
  note: string;
  price: number;
  qty: number;
  img: string;
};

function money(n: number) {
  return `₦${n.toLocaleString("en-NG")}`;
}

export default function Cart() {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: "1",
      title: "Jollof Rice & Fried Chicken",
      note: "With plantain, extra pepper sauce",
      price: 3200,
      qty: 1,
      img: "/images/Jollof Rice & Fried Chicken.jpg",
    },
    {
      id: "2",
      title: "Jollof Rice & Fried Chicken",
      note: "With plantain, extra pepper sauce",
      price: 3200,
      qty: 1,
      img: "/images/meal-jollof-fried.jpg",
    },
    {
      id: "3",
      title: "Jollof Rice & Fried Chicken",
      note: "With plantain, extra pepper sauce",
      price: 3200,
      qty: 1,
      img: "/images/meal-jollof-smoked.jpg",
    },
    {
      id: "4",
      title: "Jollof Rice & Fried Chicken",
      note: "With plantain, extra pepper sauce",
      price: 3200,
      qty: 1,
      img: "/images/meal-egusi.jpg",
    },
  ]);

  const total = useMemo(
    () => items.reduce((sum, it) => sum + it.price * it.qty, 0),
    [items]
  );

  const inc = (id: string) =>
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, qty: it.qty + 1 } : it))
    );

  const dec = (id: string) =>
    setItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, qty: Math.max(1, it.qty - 1) } : it
      )
    );

  const remove = (id: string) =>
    setItems((prev) => prev.filter((it) => it.id !== id));

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
          {items.map((it) => (
            <div className="ct-row" key={it.id}>
              <div className="ct-img">
                <img src={encodeURI(it.img)} alt={it.title} />
              </div>

              <div className="ct-info">
                <div className="ct-name">{it.title}</div>
                <div className="ct-note">{it.note}</div>
              </div>

              <div className="ct-qty">
                <button className="ct-btn" type="button" onClick={() => inc(it.id)}>
                  +
                </button>
                <div className="ct-count">{it.qty}</div>
                <button className="ct-btn" type="button" onClick={() => dec(it.id)}>
                  −
                </button>
              </div>

              <div className="ct-price">{money(it.price * it.qty)}</div>

              <button
                className="ct-remove"
                type="button"
                onClick={() => remove(it.id)}
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

        <div className="ct-total">Total: {money(total)}</div>
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
