interface CategoryCardProps {
  name: string;
  image: string;
  onClick: () => void;
}

const CategoryCard = ({ name, image, onClick }: CategoryCardProps) => {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center gap-2 transition-transform hover:scale-105"
    >
      <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-primary/20 shadow-sm transition-all group-hover:border-primary">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Crect fill='%23f3f4f6' width='80' height='80'/%3E%3Ctext fill='%239ca3af' font-size='10' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3E%3F%3C/text%3E%3C/svg%3E";
          }}
        />
      </div>
      <span className="text-xs font-medium text-foreground text-center leading-tight">{name}</span>
    </button>
  );
};

export default CategoryCard;
