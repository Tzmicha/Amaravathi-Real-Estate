export default function PropertyCard({ property, visible, index }) {
  return (
    <div
      className="prop-card"
      style={{
        opacity: visible ? 1 : 0,
        animation: visible ? `fadeUp 0.6s ${index * 0.12}s ease both` : undefined,
      }}
    >
      <div className="prop-img">
        {property.image ? (
          <img
            src={property.image}
            alt={property.name}
            className="prop-img-img"
          />
        ) : (
          <div className="prop-img-inner" style={{ background: property.bg }} />
        )}
        <span className="prop-badge">{property.badge}</span>
        <div className="prop-fav">🤍</div>
      </div>
      <div className="prop-body">
        <div className="prop-type">{property.type}</div>
        <div className="prop-name">{property.name}</div>
        <div className="prop-loc">📍 {property.loc}</div>
        <div className="prop-chips">
          {property.chips.map((chip) => (
            <span className="prop-chip" key={chip}>
              {chip}
            </span>
          ))}
        </div>
        <div className="prop-footer">
          <div className="prop-price">{property.price}</div>
          <span
            className={`prop-status ${
              property.status === "ready" ? "s-ready" : "s-const"
            }`}
          >
            {property.status === "ready"
              ? "✓ Ready to Move"
              : "🔨 Under Const."}
          </span>
        </div>
      </div>
    </div>
  );
}
