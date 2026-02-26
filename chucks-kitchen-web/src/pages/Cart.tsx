import { ArrowLeft, Minus, Plus, Trash2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/lib/store';
import MobileNav from '@/components/MobileNav';

const Cart = () => {
  const { items, removeItem, updateQuantity, total } = useCart();
  const navigate = useNavigate();
  const subtotal = total();
  const deliveryFee = 1500;
  const tax = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + deliveryFee + tax;

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-5 pb-24">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-accent">
            <span className="text-4xl">🛒</span>
          </div>
          <h2 className="font-display text-xl font-bold text-foreground">Your cart is empty</h2>
          <p className="mt-2 text-sm text-muted-foreground">Add some delicious Nigerian dishes to get started!</p>
          <Link to="/menu">
            <Button className="mt-6 rounded-full bg-primary px-8 text-primary-foreground">
              Browse Menu
            </Button>
          </Link>
        </div>
        <MobileNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="flex items-center gap-3 border-b px-5 py-4">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5 text-foreground" />
        </button>
        <h1 className="font-display text-lg font-bold text-foreground">Your Order</h1>
      </header>

      {/* Items */}
      <div className="px-5 pt-4 space-y-4">
        {items.map((ci) => (
          <div key={ci.menuItem.id} className="flex items-center gap-3 rounded-xl bg-card p-3 shadow-sm">
            <img
              src={ci.menuItem.image}
              alt={ci.menuItem.name}
              className="h-16 w-16 rounded-lg object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Crect fill='%23f3f4f6' width='80' height='80'/%3E%3Ctext fill='%239ca3af' font-size='10' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3E%3F%3C/text%3E%3C/svg%3E";
              }}
            />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-foreground truncate">{ci.menuItem.name}</h4>
              {ci.protein && <p className="text-xs text-muted-foreground">{ci.protein}</p>}
              <p className="text-sm font-bold text-primary">₦{ci.menuItem.price.toLocaleString()}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  ci.quantity > 1
                    ? updateQuantity(ci.menuItem.id, ci.quantity - 1)
                    : removeItem(ci.menuItem.id)
                }
                className="flex h-7 w-7 items-center justify-center rounded-full border border-border"
              >
                {ci.quantity > 1 ? <Minus className="h-3 w-3" /> : <Trash2 className="h-3 w-3 text-destructive" />}
              </button>
              <span className="w-5 text-center text-sm font-bold">{ci.quantity}</span>
              <button
                onClick={() => updateQuantity(ci.menuItem.id, ci.quantity + 1)}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground"
              >
                <Plus className="h-3 w-3" />
              </button>
            </div>
          </div>
        ))}

        <Link to="/menu" className="mt-2 block text-center text-sm font-medium text-primary">
          + Add more items from Chuka's Kitchen
        </Link>
      </div>

      {/* Order Summary */}
      <div className="mx-5 mt-6 rounded-xl bg-card p-4 shadow-sm">
        <h3 className="font-display text-base font-bold text-foreground">Order Summary</h3>

        {/* Promo */}
        <div className="mt-3 flex gap-2">
          <Input placeholder="Add a promo code" className="flex-1 rounded-full border-border" />
          <Button size="sm" className="rounded-full bg-primary text-primary-foreground">Apply</Button>
        </div>

        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-medium text-foreground">₦{subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Delivery Fee</span>
            <span className="font-medium text-foreground">₦{deliveryFee.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Service Tax</span>
            <span className="font-medium text-foreground">₦{tax.toLocaleString()}</span>
          </div>
          <div className="border-t pt-2 flex justify-between">
            <span className="font-bold text-foreground">Total</span>
            <span className="text-lg font-bold text-primary">₦{grandTotal.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Checkout */}
      <div className="px-5 mt-6">
        <Link to="/checkout">
          <Button className="w-full rounded-full bg-primary py-6 text-base font-semibold text-primary-foreground hover:bg-primary/90">
            Proceed to Checkout
          </Button>
        </Link>
      </div>

      <MobileNav />
    </div>
  );
};

export default Cart;
