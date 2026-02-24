export default function MealCard({ title, desc, price, img }) {
  return (
    <div className="meal-card">
      <img className="meal-img" src={img} alt={title} />
      <div className="meal-body">
        <div className="meal-title">{title}</div>
        <div className="meal-desc">{desc}</div>
        <div className="meal-bottom">
          <div className="meal-price">₦{Number(price).toLocaleString("en-NG")}</div>
          <button className="btn btn-primary btn-sm">Add to cart</button>
        </div>
      </div>
    </div>
  );
}
