export default function CategoryCard({ title, img }) {
  return (
    <div className="cat-card">
      <img className="cat-img" src={img} alt={title} />
      <div className="cat-title">{title}</div>
    </div>
  );
}
