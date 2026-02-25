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
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <span className="text-xs font-medium text-foreground text-center leading-tight">{name}</span>
    </button>
  );
};

export default CategoryCard;
