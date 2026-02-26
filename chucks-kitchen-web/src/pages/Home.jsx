import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import CategoryCard from "../components/CategoryCard";
import FoodCard from "../components/FoodCard";
import { IMAGES, categories, menuItems } from "@/lib/store";

const categoryImages = {
  "Jollof Rice & Entrees": IMAGES.jollof,
  "Seafood & Soups": IMAGES.soup,
  "Grills & Sides": IMAGES.grilled,
  Beverages: IMAGES.drink,
  Desserts: IMAGES.plantain,
};

export default function Home() {
  const navigate = useNavigate();
  const popular = menuItems.filter((i) => i.popular);

  return (
    <div className="app">
      <Navbar active="home" />

      <main className="page">
        <section className="home-hero">
          <Link to="/menu" className="block absolute inset-0 z-[1] cursor-pointer" aria-label="Go to menu" />
          <div className="home-hero-bg" style={{ backgroundImage: `url(${IMAGES.hero})` }} />
          <div className="home-hero-overlay" />

          <div className="home-hero-content">
            <h1 className="home-title">The Heart of Nigerian Home Cooking</h1>
            <p className="home-sub">
              Handcrafted with passion, delivered with care.
            </p>
            <Link to="/menu" className="btn btn-primary inline-block">Discover what's new</Link>
          </div>

          <div className="searchbar">
            <span className="searchicon">🔎</span>
            <input placeholder="What are you craving for today?" />
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Popular Categories</h2>
          <div className="grid cats">
            {categories.map((cat) => (
              <CategoryCard
                key={cat}
                name={cat}
                image={categoryImages[cat] || IMAGES.jollof}
                onClick={() => navigate(`/menu?category=${encodeURIComponent(cat)}`)}
              />
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Chef's Specials</h2>
          <div className="grid meals">
            {popular.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
