export function CompetenciesSection({ competencies }) {
  return (
    <section className="competencies-section">
      <h2 className="section-title">Competencias Profesionales</h2>
      <div className="competencies-grid">
        {competencies.map((competency, index) => (
          <span key={index} className="competency-badge">
            ✓ {competency}
          </span>
        ))}
      </div>
    </section>
  );
}
