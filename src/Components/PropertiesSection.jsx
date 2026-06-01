import PropertyCard from "./PropertyCard";

export default function PropertiesSection({ sectionRef, visible, properties }) {
  return (
    <section className="section props-section" ref={sectionRef}>
      <div className="props-head">
        <div>
          <div className="sec-label">Featured Properties</div>
          <h2 className="sec-title">
            Handpicked Best <span className="it">Investment</span>
            <br />
            Opportunities
          </h2>
        </div>
        <button className="btn-secondary">View All Properties →</button>
      </div>
      <div className="props-grid">
        {properties.map((property, index) => (
          <PropertyCard
            key={property.id}
            property={property}
            visible={visible}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
