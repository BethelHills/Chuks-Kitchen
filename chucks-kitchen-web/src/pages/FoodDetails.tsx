import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/food-details.css";

type Protein = "fried" | "fish" | "beef";

export default function FoodDetails() {
  const navigate = useNavigate();
  const [protein, setProtein] = useState<Protein>("fried");
  const [sides, setSides] = useState({
    plantain: false,
    coleslaw: false,
    pepper: false,
  });

  return (
    <div className="fd" id="top">
      {/* NAV */}
      <header className="fd-nav">
        <div className="fd-nav-inner">
          <Link to="/" className="fd-logo">Chuks Kitchen</Link>

          <nav className="fd-links">
            <Link className="fd-link" to="/home">Home</Link>
            <Link className="fd-link" to="/explore">Explore</Link>
            <Link className="fd-link" to="/orders">My Orders</Link>
            <Link className="fd-link" to="/account">Account</Link>
          </nav>

          <Link to="/login" className="fd-login">Login</Link>
        </div>
      </header>

      {/* BODY */}
      <main className="fd-wrap">
        <div
          className="fd-left"
          style={{ backgroundImage: "url(/images/food-detail.jpg)" }}
          aria-label="Food image"
        />

        <section className="fd-panel">
          <button
            className="fd-close"
            type="button"
            aria-label="Close"
            onClick={() => navigate(-1)}
          >
            ×
          </button>

          <h1 className="fd-title">Jollof Rice with Fried Chicken</h1>
          <div className="fd-price">₦2,800</div>

          <p className="fd-desc">
            Our signature Jollof rice, cooked to perfection with aromatic spices,
            served with juicy, golden-fried chicken. A classic Nigerian comfort food,
            rich in flavor and satisfying. Perfect for a quick lunch or a hearty dinner.
          </p>

          <div className="fd-tags">
            <span className="fd-tag">
              <span className="fd-dot" /> Mildly spicy
            </span>
            <span className="fd-tag">
              <span className="fd-dot" /> Vegetarian option available
            </span>
            <a className="fd-tag fd-tag-link" href="#">
              <span className="fd-dot" /> View Allergies
            </a>
          </div>

          <h2 className="fd-h2">Choose Your Protein</h2>

          <div className="fd-choice">
            <label className="fd-row">
              <input
                type="radio"
                name="protein"
                checked={protein === "fried"}
                onChange={() => setProtein("fried")}
              />
              <span className="fd-row-left">Fried Chicken</span>
              <span className="fd-row-right">(Default)</span>
            </label>

            <label className="fd-row">
              <input
                type="radio"
                name="protein"
                checked={protein === "fish"}
                onChange={() => setProtein("fish")}
              />
              <span className="fd-row-left">Grilled Fish</span>
              <span className="fd-row-right">+₦500</span>
            </label>

            <label className="fd-row">
              <input
                type="radio"
                name="protein"
                checked={protein === "beef"}
                onChange={() => setProtein("beef")}
              />
              <span className="fd-row-left">Beef</span>
              <span className="fd-row-right">+₦700</span>
            </label>
          </div>

          <h2 className="fd-h2">Extra Sides (Optional)</h2>

          <div className="fd-choice">
            <label className="fd-row">
              <input
                type="checkbox"
                checked={sides.plantain}
                onChange={(e) =>
                  setSides((s) => ({ ...s, plantain: e.target.checked }))
                }
              />
              <span className="fd-row-left">Fried Plantain</span>
              <span className="fd-row-right">+₦700</span>
            </label>

            <label className="fd-row">
              <input
                type="checkbox"
                checked={sides.coleslaw}
                onChange={(e) =>
                  setSides((s) => ({ ...s, coleslaw: e.target.checked }))
                }
              />
              <span className="fd-row-left">Coleslaw</span>
              <span className="fd-row-right">+₦500</span>
            </label>

            <label className="fd-row">
              <input
                type="checkbox"
                checked={sides.pepper}
                onChange={(e) =>
                  setSides((s) => ({ ...s, pepper: e.target.checked }))
                }
              />
              <span className="fd-row-left">Extra Pepper Sauce</span>
              <span className="fd-row-right">+₦300</span>
            </label>
          </div>

          <h2 className="fd-h2">Special Instructions</h2>

          <textarea
            className="fd-notes"
            placeholder="E.g no onion, food is too spicy, food is too hot"
          />
        </section>
      </main>

      {/* FOOTER */}
      <footer className="fd-footer">
        <div className="fd-footer-inner">
          <div>
            <Link to="/" className="fd-footer-logo">Chuks Kitchen</Link>
            <p className="fd-footer-text">
              Bringing the authentic flavors of Nigerian home cooking to your table,
              with passion and care.
            </p>
          </div>

          <div>
            <div className="fd-footer-title">Quick Links</div>
            <div className="fd-footer-links">
              <Link to="/home">Home</Link>
              <Link to="/explore">Explore</Link>
              <Link to="/orders">My Order</Link>
              <Link to="/account">Account</Link>
              <a href="#">Contact</a>
            </div>
          </div>

          <div>
            <div className="fd-footer-title">Contact Us</div>
            <div className="fd-footer-links">
              <a href="tel:+2348012345678">+234 801 234 5678</a>
              <a href="mailto:hello@chuckskitchen.com">hello@chuckskitchen.com</a>
              <span>123 Taste Blvd, Lagos, Nigeria</span>
            </div>
          </div>

          <div>
            <div className="fd-footer-links fd-social">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Linkedin</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>

        <div className="fd-footer-bottom">© 2026 Chuck's Kitchen. All rights reserved.</div>
      </footer>

      <a className="fd-float" href="#top" aria-label="Scroll to top">↑</a>
    </div>
  );
}
