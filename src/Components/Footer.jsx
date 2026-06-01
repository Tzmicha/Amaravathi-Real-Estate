export default function Footer() {
  const sections = [
    [
      "Properties",
      [
        "Residential Plots",
        "Luxury Villas",
        "Apartments",
        "Commercial Spaces",
        "Farm Lands",
      ],
    ],
    [
      "Services",
      [
        "Property Buying",
        "Site Visits",
        "Legal Support",
        "Home Loans",
        "Investment Advisory",
      ],
    ],
    [
      "Contact",
      [
        "📞 +91 90005 12345",
        "✉️ info@amaravatiexpert.com",
        "📍 Amaravati, Andhra Pradesh",
        "🕒 Mon–Sat: 9AM–7PM",
      ],
    ],
  ];

  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            Amaravati <span>Expert</span>
          </div>
          <div className="footer-desc">
            Your most trusted real estate partner in Andhra Pradesh's capital
            region. We help you invest wisely and build a secure future.
          </div>
          <div className="footer-socials">
            {["📘", "📸", "🐦", "▶️"].map((icon) => (
              <div className="footer-social" key={icon}>
                {icon}
              </div>
            ))}
          </div>
        </div>

        {sections.map(([title, links]) => (
          <div key={title}>
            <div className="footer-col-title">{title}</div>
            <ul className="footer-links">
              {links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">
          © 2025 Amaravati Property Expert. All rights reserved.
        </span>
        <span className="footer-tag">Amaravati — The Future Capital City ✦</span>
      </div>
    </footer>
  );
}
