export default function ServicesSection({ sectionRef, visible, services }) {
  return (
    <section className="section serv-section" ref={sectionRef}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <div className="sec-label" style={{ justifyContent: "center" }}>
          Our Services
        </div>
        <h2 className="sec-title" style={{ textAlign: "center" }}>
          Complete Real Estate <span className="it">Solutions</span>
        </h2>
      </div>

      <div className="serv-grid">
        {services.map((service, index) => (
          <div
            key={service.name}
            className="serv-card"
            style={{
              opacity: visible ? 1 : 0,
              animation: visible ? `fadeUp 0.6s ${index * 0.08}s ease both` : undefined,
            }}
          >
            <div className="serv-icon">{service.icon}</div>
            <div className="serv-name">{service.name}</div>
            <div className="serv-desc">{service.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
