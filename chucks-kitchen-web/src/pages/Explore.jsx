import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import CategoryCard from "../components/CategoryCard";
import MealCard from "../components/MealCard.jsx";
import { IMAGES } from "@/lib/store";

const categories = [
  { title: "Jollof Delights", img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=70" },
  { title: "Swallow & Soups", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=400&q=80" },
  { title: "Grills & BBQ", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=70" },
  { title: "Sweet Treats", img: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=1200&q=70" },
];

const meals = [
  { title: "Spicy Tilapia Pepper Soup", desc: "A comforting and spicy soup with tilapia fish.", price: 1500, img: "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=1200&q=70" },
  { title: "Jollof Rice & Fried Chicken", desc: "Our signature jollof rice with succulent fried chicken.", price: 3500, img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=70" },
  { title: "Egusi Soup & Pounded Yam", desc: "Rich egusi soup with assorted meat and fluffy pounded yam.", price: 4000, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=400&q=80" },
];

export default function Explore() {
  return (
    <div className="app">
      <Navbar active="home" />
      <main className="page">
        <section className="section">
          <div className="explore-hero">
            <img src={IMAGES.explore} alt="Explore our menu" className="explore-hero-img" />
          </div>
          <h2 className="section-title">Explore Menu</h2>
          <div className="grid cats">
            {categories.map((c, idx) => (
              <CategoryCard
                key={`${c.title}-${idx}`}
                name={c.title}
                image={c.img}
                onClick={() => {}}
              />
            ))}
          </div>
        </section>
        <section className="section">
          <h2 className="section-title">All Meals</h2>
          <div className="grid meals">
            {meals.map((m, idx) => (
              <MealCard key={`${m.title}-${idx}`} {...m} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
