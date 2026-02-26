import { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import FoodCard from '@/components/FoodCard';
import CategoryCard from '@/components/CategoryCard';
import MobileNav from '@/components/MobileNav';
import { menuItems, categories } from '@/lib/store';

const categoryImages: Record<string, string> = {
  'Jollof Rice & Entrees': '/images/jollof-rice.jpg',
  'Seafood & Soups': '/images/pepper-soup.jpg',
  'Grills & Sides': '/images/suya.jpg',
  'Beverages': '/images/zobo.jpg',
  'Desserts': '/images/plantain.jpg',
};

const Menu = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  const filtered = menuItems.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = !activeCategory || item.category === activeCategory;
    return matchSearch && matchCategory;
  });

  const popular = menuItems.filter((i) => i.popular);

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-food.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 to-foreground/80" />
          <div className="relative z-10 flex h-full flex-col justify-end p-5">
            <h1 className="font-display text-2xl font-bold text-primary-foreground">Chuka's Kitchen</h1>
            <p className="mt-1 text-sm text-primary-foreground/80">The Heart of Nigerian Home Cooking</p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="px-5 -mt-5 relative z-20">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="What are you craving for today?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-full border-border bg-card pl-10 shadow-md"
          />
        </div>
      </div>

      {/* Menu Categories */}
      <section className="mt-6 px-5">
        <h2 className="font-display text-lg font-bold text-foreground">Menu Categories</h2>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
          {['Popular', ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat === 'Popular' ? null : cat)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                (cat === 'Popular' && !activeCategory) || activeCategory === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Popular Categories */}
      {!activeCategory && !search && (
        <section className="mt-6 px-5">
          <h2 className="font-display text-lg font-bold text-foreground">Popular Categories</h2>
          <div className="mt-3 flex gap-4 overflow-x-auto pb-2">
            {categories.slice(0, 4).map((cat) => (
              <CategoryCard
                key={cat}
                name={cat}
                image={categoryImages[cat] || '/images/jollof-rice.jpg'}
                onClick={() => setActiveCategory(cat)}
              />
            ))}
          </div>
        </section>
      )}

      {/* Chef's Specials or filtered results */}
      <section className="mt-6 px-5">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-bold text-foreground">
            {activeCategory || (search ? 'Search Results' : "Chef's Specials")}
          </h2>
          {!search && !activeCategory && (
            <button
              onClick={() => setActiveCategory(null)}
              className="text-sm font-medium text-primary"
            >
              View All Specials
            </button>
          )}
        </div>
        <div className="mt-4 grid gap-4">
          {(activeCategory || search ? filtered : popular).map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* All items by category when no filter */}
      {!activeCategory && !search && (
        <>
          {categories.map((cat) => {
            const catItems = menuItems.filter((i) => i.category === cat);
            if (catItems.length === 0) return null;
            return (
              <section key={cat} className="mt-8 px-5">
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-lg font-bold text-foreground">{cat}</h2>
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className="text-sm font-medium text-primary"
                  >
                    View All
                  </button>
                </div>
                <div className="mt-3 grid gap-3">
                  {catItems.slice(0, 3).map((item) => (
                    <FoodCard key={item.id} item={item} variant="compact" />
                  ))}
                </div>
              </section>
            );
          })}
        </>
      )}

      {/* Banner */}
      {!search && !activeCategory && (
        <section className="mt-8 px-5 pb-4">
          <div className="relative overflow-hidden rounded-xl">
            <img src="/images/hero-food.jpg" alt="New menu" className="h-48 w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="font-display text-xl font-bold text-primary-foreground">
                Introducing Our New Menu Additions
              </h3>
              <p className="mt-1 text-xs text-primary-foreground/80">
                Explore exciting new dishes including jollof spaghetti and plantain fritters!
              </p>
              <button className="mt-3 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground">
                Explore New Items
              </button>
            </div>
          </div>
        </section>
      )}

      <MobileNav />
    </div>
  );
};

export default Menu;
