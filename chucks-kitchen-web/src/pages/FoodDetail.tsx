import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { menuItems, useCart } from '@/lib/store';
import { useToast } from '@/hooks/use-toast';

const proteins = [
  { name: 'Fried Chicken', price: 0 },
  { name: 'Grilled Chicken', price: 200 },
  { name: 'Beef', price: 300 },
  { name: 'Goat', price: 500 },
];

const extras = [
  { name: 'Fried Plantain', price: 500 },
  { name: 'Coleslaw', price: 300 },
  { name: 'Extra Pepper Sauce', price: 200 },
];

const FoodDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const addItem = useCart((s) => s.addItem);
  const item = menuItems.find((i) => i.id === id);

  const [quantity, setQuantity] = useState(1);
  const [selectedProtein, setSelectedProtein] = useState(proteins[0].name);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [instructions, setInstructions] = useState('');

  if (!item) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">Item not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      menuItem: item,
      quantity,
      protein: selectedProtein,
      extras: selectedExtras,
      specialInstructions: instructions,
    });
    toast({
      title: 'Added to cart!',
      description: `${quantity}x ${item.name} added to your cart.`,
    });
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Hero Image */}
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="h-72 w-full object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23f3f4f6' width='400' height='300'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='18' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3EFood%3C/text%3E%3C/svg%3E";
          }}
        />
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-card/80 backdrop-blur-sm"
        >
          <ArrowLeft className="h-5 w-5 text-foreground" />
        </button>
        <div className="absolute bottom-0 left-0 right-0 h-8 rounded-t-3xl bg-background" />
      </div>

      <div className="px-5 -mt-2">
        {/* Title */}
        <h1 className="font-display text-2xl font-bold text-foreground">{item.name}</h1>
        <p className="mt-1 text-lg font-bold text-primary">₦{item.price.toLocaleString()}</p>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="h-4 w-4 fill-primary text-primary" />
          ))}
          <span className="ml-1 text-xs text-muted-foreground">Most Ordered</span>
        </div>

        {/* Quantity */}
        <div className="mt-6 flex items-center gap-4">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="text-lg font-bold">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        {/* Choose Protein */}
        <div className="mt-6">
          <h3 className="font-display text-base font-bold text-foreground">Choose your Protein</h3>
          <div className="mt-3 space-y-2">
            {proteins.map((p) => (
              <label key={p.name} className="flex items-center justify-between rounded-lg border border-border p-3 cursor-pointer">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="protein"
                    checked={selectedProtein === p.name}
                    onChange={() => setSelectedProtein(p.name)}
                    className="h-4 w-4 accent-primary"
                  />
                  <span className="text-sm text-foreground">{p.name}</span>
                </div>
                {p.price > 0 && (
                  <span className="text-xs text-muted-foreground">+₦{p.price}</span>
                )}
              </label>
            ))}
          </div>
        </div>

        {/* Extra Sides */}
        <div className="mt-6">
          <h3 className="font-display text-base font-bold text-foreground">Extra Sides (Optional)</h3>
          <div className="mt-3 space-y-2">
            {extras.map((e) => (
              <label key={e.name} className="flex items-center justify-between rounded-lg border border-border p-3 cursor-pointer">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedExtras.includes(e.name)}
                    onChange={() =>
                      setSelectedExtras((prev) =>
                        prev.includes(e.name)
                          ? prev.filter((x) => x !== e.name)
                          : [...prev, e.name]
                      )
                    }
                    className="h-4 w-4 accent-primary"
                  />
                  <span className="text-sm text-foreground">{e.name}</span>
                </div>
                <span className="text-xs text-muted-foreground">+₦{e.price}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Special Instructions */}
        <div className="mt-6">
          <h3 className="font-display text-base font-bold text-foreground">Special Instructions</h3>
          <Textarea
            placeholder="E.g. no onions, them's too spicy, food is too hot for my boss's liking"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="mt-2 rounded-lg border-border"
          />
        </div>

        {/* Add to Cart */}
        <Button
          onClick={handleAddToCart}
          className="mt-6 w-full rounded-full bg-primary py-6 text-base font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Add to Cart — ₦{(item.price * quantity).toLocaleString()}
        </Button>
      </div>
    </div>
  );
};

export default FoodDetail;
