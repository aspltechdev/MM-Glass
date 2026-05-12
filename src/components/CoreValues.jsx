// CoreValues.jsx
import './corevalue.css';

const CoreValues = () => {
  const valuesList = [
    { name: 'Reliability', key: 'reliability' },
    { name: 'Progressive Growth', key: 'growth' },
    { name: 'Sustainability', key: 'sustainability' },
    { name: 'Safety', key: 'safety' },
    { name: 'Integrity', key: 'integrity' }
  ];

  return (
    <section className="core-values-section">
      <div className="core-values-container">
        <span className="section-badge">Our Foundation</span>
        <h2 className="core-heading">Our Core Values</h2>
        <p className="core-description">
          From the very foundation of MM Glass, our vision has been to go beyond manufacturing—
          to build lasting relationships, deliver exceptional quality, and create value that stands 
          the test of time. Our core values shape every decision, every process, and every product 
          we deliver.
        </p>

        <div className="main-value-card">
          <h3 className="main-value-title">Enduring Relationships</h3>
          <p className="main-value-text">
            We believe in building long-term partnerships based on trust, transparency, 
            and mutual growth with our clients and collaborators.
          </p>
          
          <div className="values-grid">
            {valuesList.map((value) => (
              <div key={value.key} className="value-item">
                <span>{value.name}</span>
                <span className="plus">+</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;