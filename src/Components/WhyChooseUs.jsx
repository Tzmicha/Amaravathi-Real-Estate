import Counter from "./Counter";

export default function WhyChooseUs({ sectionRef, visible }) {
  const stats = [
    ["🏘️", 250, "Properties Sold"],
    ["😊", 500, "Happy Clients"],
    ["📅", 7, "Years Experience"],
    ["📍", 350, "Site Visits"],
  ];

  const points = [
    [
      "🏅",
      "Verified & DTCP Approved",
      "All listed properties are legally verified, approved, and clear of encumbrances.",
    ],
    [
      "🤝",
      "Expert Local Guidance",
      "Our team knows every growth corridor in Amaravati's master plan zones.",
    ],
    [
      "📊",
      "Best ROI Opportunities",
      "Handpicked plots and apartments with the highest appreciation potential.",
    ],
  ];

  return (
    <section className="section why-section" ref={sectionRef}>
      <div className="why-grid">
        <div style={{ position: "relative" }}>
          <div className="why-big-num">7+</div>
          <div className="stats-2x2">
            {stats.map(([icon, number, label], index) => (
              <div
                className="stat-card"
                key={label}
                style={{
                  opacity: visible ? 1 : 0,
                  animation: visible ? `scaleIn 0.5s ${index * 0.1}s ease both` : undefined,
                }}
              >
                <span className="stat-card-icon">{icon}</span>
                <span className="stat-card-num">
                  <Counter end={number} suffix="+" />
                </span>
                <span className="stat-card-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            opacity: visible ? 1 : 0,
            animation: visible ? "slideRight 0.7s 0.2s ease both" : undefined,
          }}
        >
          <div className="sec-label">Why Choose Us</div>
          <h2 className="sec-title">
            We Make Property Investment
            <br />
            <span className="it">Simple & Safe</span>
          </h2>
          <p className="sec-sub">
            With deep local expertise and a commitment to transparency, we help
            you find the right property that delivers strong returns and a secure
            future.
          </p>
          <div className="why-points">
            {points.map(([icon, title, description]) => (
              <div className="why-point" key={title}>
                <div className="why-ico">{icon}</div>
                <div>
                  <div className="why-t">{title}</div>
                  <div className="why-d">{description}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="btn-primary" style={{ marginTop: 28 }}>
            Know More About Us
          </button>
        </div>
      </div>
    </section>
  );
}
