import { Link } from "react-router-dom";
import "../styles/explore.css";

type Item = {
  title: string;
  desc: string;
  price: string;
  img: string;
};

const popular: Item[] = [
  {
    title: "Jollof Rice & Fried Chicken",
    desc: "Our signature Jollof rice, served with crispy fried chicken and plantain.",
    price: "₦3,500",
    img: "/images/Jollof Rice & Fried Chicken.jpg",
  },
  {
    title: "Eba & Egusi Soup (Goat Meat)",
    desc: "Hearty Egusi soup with tender goat meat, served with soft Eba.",
    price: "₦3,500",
    img: "/images/Eba & Egusi Soup (Goat Meat).jpg",
  },
  {
    title: "Pounded Yam & Edikaikong",
    desc: "Traditional pounded yam with rich, leafy Edikaikong soup.",
    price: "₦3,800",
    img: "/images/Pounded Yam & Edikaikong.jpg",
  },
  {
    title: "Peppered Snail",
    desc: "Spicy and savory peppered snail, perfect as a starter.",
    price: "₦2,500",
    img: "/images/Peppered Snail.jpg",
  },
  {
    title: "Grilled Tilapia Fish",
    desc: "Whole grilled tilapia seasoned with our special spices.",
    price: "₦4,500",
    img: "/images/Grilled Tilapia Fish.jpg",
  },
  {
    title: "Jollof Rice & Fried Chicken",
    desc: "Our signature Jollof rice, served with crispy fried chicken and plantain.",
    price: "₦3,500",
    img: "/images/meal-jollof-fried.jpg",
  },
];

const jollof: Item[] = [
  {
    title: "Jollof Rice & Smoked Fish",
    desc: "Flavorful jollof rice served with perfectly smoked fish.",
    price: "₦3,500",
    img: "/images/Jollof Rice & Smoked Fish.jpg",
  },
  {
    title: "Party Jollof Rice (Veg)",
    desc: "Vegetarian party jollof, full of rich flavors.",
    price: "₦2,800",
    img: "/images/Jollof Rice.jpg",
  },
  {
    title: "Party Jollof Rice (Veg)",
    desc: "Vegetarian party jollof, full of rich flavors.",
    price: "₦3,500",
    img: "/images/meal-jollof-smoked.jpg",
  },
];

const swallow: Item[] = [
  {
    title: "Amala with Gbegiri & Ewedu",
    desc: "Classic Amala served with Gbegiri (beans) and Ewedu (jute leaf) soup.",
    price: "₦3,100",
    img: "/images/Amala with Gbegiri & Ewedu.jpg",
  },
  {
    title: "Fufu & Okra Soup (Fish)",
    desc: "Light Fufu served with fresh okra soup and tilapia fish.",
    price: "₦3,300",
    img: "/images/Fufu & Okra Soup (Fish).jpg",
  },
  {
    title: "Fufu & Okra Soup (Fish)",
    desc: "Light Fufu served with fresh okra soup and tilapia fish.",
    price: "₦3,500",
    img: "/images/Fufu & Okra Soup 1 (Fish).jpg",
  },
];

function FoodCard({ item }: { item: Item }) {
  return (
    <div className="ex-card">
      <img className="ex-card-img" src={encodeURI(item.img)} alt={item.title} />
      <div className="ex-card-body">
        <div className="ex-card-title">{item.title}</div>
        <div className="ex-card-desc">{item.desc}</div>

        <div className="ex-card-bottom">
          <div className="ex-price">{item.price}</div>
          <button className="ex-plus" type="button" aria-label="Add to cart">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Explore() {
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
                <FoodCard key={i} item={item} />
              ))}
            </div>
          </section>

          <section className="ex-section">
            <h2 className="ex-h2">Jollof Rice &amp; Entrees</h2>
            <div className="ex-grid">
              {jollof.map((item, i) => (
                <FoodCard key={i} item={item} />
              ))}
            </div>
          </section>

          <section className="ex-section">
            <h2 className="ex-h2">Swallow &amp; Soups</h2>
            <div className="ex-grid">
              {swallow.map((item, i) => (
                <FoodCard key={i} item={item} />
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

        <div className="ex-footer-bottom">© 2026 Chuck's Kitchen. All rights reserved.</div>
      </footer>

      <a className="ex-float" href="#top" aria-label="Scroll to top">↑</a>
    </div>
  );
}
