import { Link } from "react-router-dom";
import { useCart, menuItems } from "@/lib/store";
import "../styles/explore.css";

type Item = {
  id: string;
  title: string;
  desc: string;
  price: string;
  img: string;
};

const popular: Item[] = [
  {
    id: "1",
    title: "Jollof Rice & Fried Chicken",
    desc: "Our signature Jollof rice, served with crispy fried chicken and plantain.",
    price: "₦3,500",
    img: "/images/Jollof Rice & Fried Chicken.jpg",
  },
  {
    id: "3",
    title: "Eba & Egusi Soup (Goat Meat)",
    desc: "Hearty Egusi soup with tender goat meat, served with soft Eba.",
    price: "₦3,500",
    img: "/images/Eba & Egusi Soup (Goat Meat).jpg",
  },
  {
    id: "3",
    title: "Pounded Yam & Edikaikong",
    desc: "Traditional pounded yam with rich, leafy Edikaikong soup.",
    price: "₦3,800",
    img: "/images/Pounded Yam & Edikaikong.jpg",
  },
  {
    id: "4",
    title: "Peppered Snail",
    desc: "Spicy and savory peppered snail, perfect as a starter.",
    price: "₦2,500",
    img: "/images/Peppered Snail.jpg",
  },
  {
    id: "2",
    title: "Grilled Tilapia Fish",
    desc: "Whole grilled tilapia seasoned with our special spices.",
    price: "₦4,500",
    img: "/images/Grilled Tilapia Fish.jpg",
  },
  {
    id: "1",
    title: "Jollof Rice & Fried Chicken",
    desc: "Our signature Jollof rice, served with crispy fried chicken and plantain.",
    price: "₦3,500",
    img: "/images/meal-jollof-fried.jpg",
  },
];

const jollof: Item[] = [
  {
    id: "1",
    title: "Jollof Rice & Smoked Fish",
    desc: "Flavorful jollof rice served with perfectly smoked fish.",
    price: "₦3,500",
    img: "/images/Jollof Rice & Smoked Fish.jpg",
  },
  {
    id: "1",
    title: "Party Jollof Rice (Veg)",
    desc: "Vegetarian party jollof, full of rich flavors.",
    price: "₦2,800",
    img: "/images/Jollof Rice.jpg",
  },
  {
    id: "1",
    title: "Party Jollof Rice (Veg)",
    desc: "Vegetarian party jollof, full of rich flavors.",
    price: "₦3,500",
    img: "/images/meal-jollof-smoked.jpg",
  },
];

const swallow: Item[] = [
  {
    id: "3",
    title: "Amala with Gbegiri & Ewedu",
    desc: "Classic Amala served with Gbegiri (beans) and Ewedu (jute leaf) soup.",
    price: "₦3,100",
    img: "/images/Amala with Gbegiri & Ewedu.jpg",
  },
  {
    id: "3",
    title: "Fufu & Okra Soup (Fish)",
    desc: "Light Fufu served with fresh okra soup and tilapia fish.",
    price: "₦3,300",
    img: "/images/Fufu & Okra Soup (Fish).jpg",
  },
  {
    id: "3",
    title: "Fufu & Okra Soup (Fish)",
    desc: "Light Fufu served with fresh okra soup and tilapia fish.",
    price: "₦3,500",
    img: "/images/Fufu & Okra Soup 1 (Fish).jpg",
  },
];

function FoodCard({ item, onAddToCart }: { item: Item; onAddToCart: (id: string) => void }) {
  const menuItem = menuItems.find((m) => m.id === item.id) || menuItems[0];
  return (
    <div className="ex-card">
      <Link to={`/food/${menuItem.id}`} className="ex-card-img-wrap">
        <img className="ex-card-img" src={encodeURI(item.img)} alt={item.title} />
      </Link>
      <div className="ex-card-body">
        <Link to={`/food/${menuItem.id}`} className="ex-card-title">{item.title}</Link>
        <div className="ex-card-desc">{item.desc}</div>

        <div className="ex-card-bottom">
          <div className="ex-price">{item.price}</div>
          <button
            className="ex-plus"
            type="button"
            aria-label="Add to cart"
            onClick={(e) => {
              e.preventDefault();
              onAddToCart(item.id);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Explore() {
  const addItem = useCart((s) => s.addItem);

  const handleAddToCart = (id: string) => {
    const menuItem = menuItems.find((m) => m.id === id) || menuItems[0];
    addItem({ menuItem, quantity: 1 });
  };

  return (
    <div className="ex" id="top">
      {/* NAV */}
      <header className="ex-nav">
        <div className="ex-nav-inner">
          <Link to="/" className="ex-logo">Chuks Kitchen</Link>

          <nav className="ex-links">
            <Link className="ex-link" to="/home">Home</Link>
            <Link className="ex-link active" to="/explore">Explore</Link>
            <Link className="ex-link" to="/orders">My Orders</Link>
            <Link className="ex-link" to="/account">Account</Link>
          </nav>

          <Link to="/login" className="ex-login">Login</Link>
        </div>
      </header>

      {/* HERO */}
      <section
        className="ex-hero"
        style={{ backgroundImage: "url(/images/explore-hero.jpg)" }}
      >
        <div className="ex-hero-overlay" />
        <div className="ex-hero-inner">
          <h1 className="ex-hero-title">Chuks Kitchen</h1>
          <div className="ex-hero-sub">
            Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)
          </div>
        </div>
      </section>

      {/* BODY */}
      <main className="ex-wrap">
        <div className="ex-cats">
          <div className="ex-cats-title">Menu Categories</div>

          <div className="ex-cat active">Popular</div>
          <div className="ex-cat">Jollof Rice &amp; Entrees</div>
          <div className="ex-cat">Swallow &amp; Soups</div>
          <div className="ex-cat">Grills &amp; sides</div>
          <div className="ex-cat">Beverages</div>
          <div className="ex-cat">Desserts</div>
        </div>

        <div className="ex-list">
          <section className="ex-section">
            <h2 className="ex-h2">Popular</h2>
            <div className="ex-grid">
              {popular.map((item, i) => (
                <FoodCard key={i} item={item} onAddToCart={handleAddToCart} />
              ))}
            </div>
          </section>

          <section className="ex-section">
            <h2 className="ex-h2">Jollof Rice &amp; Entrees</h2>
            <div className="ex-grid">
              {jollof.map((item, i) => (
                <FoodCard key={i} item={item} onAddToCart={handleAddToCart} />
              ))}
            </div>
          </section>

          <section className="ex-section">
            <h2 className="ex-h2">Swallow &amp; Soups</h2>
            <div className="ex-grid">
              {swallow.map((item, i) => (
                <FoodCard key={i} item={item} onAddToCart={handleAddToCart} />
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="ex-footer">
        <div className="ex-footer-inner">
          <div>
            <Link to="/" className="ex-footer-logo">Chuks Kitchen</Link>
            <p className="ex-footer-text">
              Bringing the authentic flavors of Nigerian home cooking to your table,
              with passion and care.
            </p>
          </div>

          <div>
            <div className="ex-footer-title">Quick Links</div>
            <div className="ex-footer-links">
              <Link to="/home">Home</Link>
              <Link to="/explore">Explore</Link>
              <Link to="/orders">My Order</Link>
              <Link to="/account">Account</Link>
              <a href="#">Contact</a>
            </div>
          </div>

          <div>
            <div className="ex-footer-title">Contact Us</div>
            <div className="ex-footer-links">
              <a href="tel:+2348012345678">+234 801 234 5678</a>
              <a href="mailto:hello@chuckskitchen.com">hello@chuckskitchen.com</a>
              <span>123 Taste Blvd, Lagos, Nigeria</span>
            </div>
          </div>

          <div>
            <div className="ex-footer-links ex-social">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Linkedin</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>

        <div className="ex-footer-bottom footer-bottom">
          © 2026 Chuks Kitchen. All rights reserved. <br />
          Designed & Developed by <span className="brand-name">BCodeStack</span>
        </div>
      </footer>

      <a className="ex-float" href="#top" aria-label="Scroll to top">↑</a>
    </div>
  );
}
