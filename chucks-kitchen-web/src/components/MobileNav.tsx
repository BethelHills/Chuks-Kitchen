import { Home, Search, ShoppingCart, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '@/lib/store';

const MobileNav = () => {
  const location = useLocation();
  const items = useCart((s) => s.items);
  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);

  const links = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/menu', icon: Search, label: 'Menu' },
    { to: '/cart', icon: ShoppingCart, label: 'Cart', badge: cartCount },
    { to: '/account', icon: User, label: 'Account' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-card shadow-lg">
      <div className="mx-auto flex max-w-md items-center justify-around py-2">
        {links.map(({ to, icon: Icon, label, badge }) => {
          const active = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`relative flex flex-col items-center gap-0.5 px-3 py-1 text-xs transition-colors ${
                active ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <Icon className="h-5 w-5" />
              {badge ? (
                <span className="absolute -right-1 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  {badge}
                </span>
              ) : null}
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;
