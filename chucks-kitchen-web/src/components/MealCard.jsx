export default function MealCard({ title, desc, price, img }) {
  return (
    <div className="meal-card">
      <img
        className="meal-img"
        src={img}
        alt={title}
        referrerPolicy="no-referrer"
        loading="lazy"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23f3f4f6' width='400' height='300'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='18' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3EImage%3C/text%3E%3C/svg%3E";
        }}
      />
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
