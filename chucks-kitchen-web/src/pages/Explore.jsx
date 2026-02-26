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

export default function Explore() {
  const navigate = useNavigate();
  const popular = menuItems.filter((i) => i.popular);

  return (
    <div className="app">
      <Navbar active="home" />
      <main className="page">
        <section className="section">
          <div className="explore-hero">
            <Link to="/menu" className="block cursor-pointer">
              <img src={IMAGES.explore} alt="Explore our menu" className="explore-hero-img" />
            </Link>
          </div>
          <h2 className="section-title">Explore Menu</h2>
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
          <h2 className="section-title">All Meals</h2>
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
