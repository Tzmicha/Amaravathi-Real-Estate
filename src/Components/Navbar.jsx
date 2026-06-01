import logo from "../assets/logo.png";

export default function Navbar({ scrolled }) {
  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="nav-logo-wrap">
        <img src={logo} alt="Amaravati Expert Logo" className="nav-logo-img" />

        <div className="nav-brand">
          <div className="nav-logo">
            Amaravati <span>Expert</span>
          </div>

          <div className="nav-tagline">Property Consultants</div>
        </div>
      </div>

      <ul className="nav-links">
        {["Home", "Properties", "Services", "About Amaravati", "Contact"].map(
          (label) => (
            <li key={label}>
              <a href="#">{label}</a>
            </li>
          ),
        )}
      </ul>

      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <span className="nav-phone">📞 +91 90005 12345</span>
        <button className="nav-cta-btn">Book Site Visit</button>
        <div className="hamburger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
}
