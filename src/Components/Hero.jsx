import heroImg from "../assets/hero.jpg";

export default function Hero({ sectionRef, visible }) {
  return (
    <section className="hero" ref={sectionRef}>
      <div className="hero-blob1" />
      <div className="hero-blob2" />
      <div className="hero-dots">
        {Array.from({ length: 48 }).map((_, index) => (
          <div className="hero-dot" key={index} />
        ))}
      </div>
      <div className="hero-inner">
        <div>
          <div
            className="hero-badge"
            style={{
              opacity: visible ? 1 : 0,
              animation: visible ? "fadeIn 0.6s ease both" : undefined,
            }}
          >
            ✦ Andhra Pradesh's Capital Region
          </div>
          <h1
            className="hero-title"
            style={{
              opacity: visible ? 1 : 0,
              animation: visible ? "fadeUp 0.7s 0.1s ease both" : undefined,
            }}
          >
            Your Trusted
            <br />
            <span className="accent">Real Estate</span>
            <br />
            in Amaravati
          </h1>
          <p
            className="hero-sub"
            style={{
              opacity: visible ? 1 : 0,
              animation: visible ? "fadeUp 0.7s 0.2s ease both" : undefined,
            }}
          >
            Helping you discover the best Residential & Commercial Investment
            Opportunities in Andhra Pradesh's fast-growing capital region.
          </p>
          <div
            className="hero-btns"
            style={{
              opacity: visible ? 1 : 0,
              animation: visible ? "fadeUp 0.7s 0.3s ease both" : undefined,
            }}
          >
            <button className="btn-primary">Explore Properties →</button>
            <button className="btn-secondary">Book Site Visit</button>
          </div>
          <div
            className="hero-trust"
            style={{
              opacity: visible ? 1 : 0,
              animation: visible ? "fadeUp 0.7s 0.4s ease both" : undefined,
            }}
          >
            <div className="trust-faces">
              {["👩", "👨", "👩‍💼", "👨‍💼", "🧑"].map((face, index) => (
                <div
                  className="trust-face"
                  key={face}
                  style={{ marginLeft: index === 0 ? 0 : undefined }}
                >
                  {face}
                </div>
              ))}
            </div>
            <div className="trust-text">
              <strong>500+ Happy Clients</strong>
              <br />
              trusted us with their dream property
            </div>
          </div>
        </div>

        <div
          className="hero-visual"
          style={{
            opacity: visible ? 1 : 0,
            animation: visible ? "fadeIn 0.8s 0.2s ease both" : undefined,
          }}
        >
          <div className="floating-pill pill-tl">
            <span className="pill-icon">📍</span>
            <div>
              <div style={{ fontSize: 11, color: "var(--stone)" }}>
                New Listing
              </div>
              <div style={{ color: "var(--charcoal)", fontWeight: 700 }}>
                Green City Plots
              </div>
            </div>
          </div>
          <div className="hero-main-card">
            <div className="hero-card-img">
              <img
                src={heroImg}
                alt="Sapphire Villas"
                className="hero-card-img-img"
              />
              <div className="hero-card-overlay" />
              <div className="hero-card-overlay__content">
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.85)" }}>
                  Luxury Villa • Mangalagiri
                </div>
                <div
                  style={{
                    fontSize: 18,
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 700,
                  }}
                >
                  Sapphire Villas
                </div>
              </div>
            </div>
            <div className="hero-card-body">
              <div className="hero-card-row">
                <div>
                  <div className="hero-card-name">Sapphire Villas</div>
                  <div className="hero-card-loc">📍 Mangalagiri, Amaravati</div>
                </div>
                <div className="hero-card-price">₹1.25 Cr+</div>
              </div>
              <div className="hero-card-tags">
                <span className="hero-tag">4 BHK</span>
                <span className="hero-tag">3200 Sqft</span>
                <span className="hero-tag">Under Construction</span>
              </div>
            </div>
          </div>
          <div className="floating-pill pill-br">
            <span className="pill-icon">🏆</span>
            <div>
              <div style={{ fontSize: 11, color: "var(--stone)" }}>
                Achievement
              </div>
              <div style={{ color: "var(--charcoal)", fontWeight: 700 }}>
                250+ Properties Sold
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
