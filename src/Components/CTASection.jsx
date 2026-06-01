export default function CTASection() {
  return (
    <section className="cta-section">
      <div
        className="sec-label"
        style={{
          color: "rgba(255,255,255,0.7)",
          justifyContent: "center",
          marginBottom: 16,
        }}
      >
        Ready to Invest?
      </div>
      <h2 className="cta-title">
        Find Your Dream Property
        <br />
        in <em>Amaravati</em>
      </h2>
      <p className="cta-sub">
        Book a free site visit today and let us help you make the right
        investment decision.
      </p>
      <div className="cta-btns">
        <button className="btn-white">📅 Book Free Site Visit</button>
        <button className="btn-outline-white">📞 Call Now: +91 90005 12345</button>
        <button className="btn-wa">💬 Chat on WhatsApp</button>
      </div>
    </section>
  );
}
