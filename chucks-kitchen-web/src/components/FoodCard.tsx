import { MenuItem } from '@/lib/store';
import { Link } from 'react-router-dom';

interface FoodCardProps {
  item: MenuItem;
  variant?: 'default' | 'compact';
}

const FoodCard = ({ item, variant = 'default' }: FoodCardProps) => {
  if (variant === 'compact') {
    return (
      <Link to={`/menu/${item.id}`} className="flex items-center gap-3 rounded-lg bg-card p-3 shadow-sm transition-shadow hover:shadow-md">
        <img
          src={item.image}
          alt={item.name}
          className="h-16 w-16 rounded-lg object-cover"
        />
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-foreground truncate">{item.name}</h4>
          <p className="text-xs text-muted-foreground line-clamp-1">{item.description}</p>
          <p className="mt-1 text-sm font-bold text-primary">₦{item.price.toLocaleString()}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/menu/${item.id}`} className="group block overflow-hidden rounded-xl bg-card shadow-sm transition-all hover:shadow-lg">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-foreground">{item.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{item.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-primary">₦{item.price.toLocaleString()}</span>
          <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground transition-opacity group-hover:opacity-90">
            Add to cart
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FoodCard;
