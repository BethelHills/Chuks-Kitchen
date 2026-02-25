import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import CategoryCard from "../components/CategoryCard";
import MealCard from "../components/MealCard.jsx";

const categories = [
  {
    title: "Jollof Delights",
    img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Swallow & Soups",
    img: "https://images.unsplash.com/photo-1604908176997-125f25cc500f?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Grills & BBQ",
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Sweet Treats",
    img: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Jollof Delights",
    img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Jollof Delights",
    img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=70",
  },
];

const meals = [
  {
    title: "Spicy Tilapia Pepper Soup",
    desc: "A comforting and spicy soup with tilapia fish, perfect for the Nigerian palette.",
    price: 1500,
    img: "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Jollof Rice & Fried Chicken",
    desc: "Our signature jollof rice, cooked to perfection, served with succulent fried chicken.",
    price: 3500,
    img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Jollof Rice & Fried Chicken",
    desc: "Our signature jollof rice, cooked to perfection, served with succulent fried chicken.",
    price: 3500,
    img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Jollof Rice & Smoked Chicken",
    desc: "Jollof rice with deep smoky flavor paired with tender smoked chicken.",
    price: 3500,
    img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Jollof Rice & Fried Chicken",
    desc: "Our signature jollof rice, cooked to perfection, served with succulent fried chicken.",
    price: 3500,
    img: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Egusi Soup & Pounded Yam",
    desc: "Rich and savory egusi soup with assorted meat, paired with fluffy pounded yam.",
    price: 4000,
    img: "https://images.unsplash.com/photo-1604908176997-125f25cc500f?auto=format&fit=crop&w=1200&q=70",
  },
];

export default function Home() {
  return (
    <div className="app">
      <Navbar active="home" />

      <main className="page">
        <section className="home-hero">
          <div className="home-hero-bg" />
          <div className="home-hero-overlay" />

          <div className="home-hero-content">
            <h1 className="home-title">The Heart of Nigerian Home Cooking</h1>
            <p className="home-sub">
              Handcrafted with passion, delivered with care.
            </p>
            <button className="btn btn-primary">Discover what's new</button>
          </div>

          <div className="searchbar">
            <span className="searchicon">🔎</span>
            <input placeholder="What are you craving for today?" />
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Popular Categories</h2>
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
          <h2 className="section-title">Chef's Specials</h2>
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
