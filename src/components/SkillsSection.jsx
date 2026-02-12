export function SkillsSection({ skills }) {
  // Si skills es un array (compatibilidad hacia atrás)
  if (Array.isArray(skills)) {
    return (
      <section className="skills-section">
        <h2 className="section-title">Habilidades</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </section>
    );
  }

  // Si skills es un objeto con categorías
  return (
    <section className="skills-section">
      <h2 className="section-title">Habilidades Técnicas</h2>

      {skills.languages && (
        <div className="skill-category">
          <h3 className="skill-category-title">Lenguajes</h3>
          <div className="skills-grid">
            {skills.languages.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {skills.frameworks && (
        <div className="skill-category">
          <h3 className="skill-category-title">Frameworks y Tecnologías</h3>
          <div className="skills-grid">
            {skills.frameworks.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {skills.databases && (
        <div className="skill-category">
          <h3 className="skill-category-title">Bases de Datos</h3>
          <div className="skills-grid">
            {skills.databases.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {skills.tools && (
        <div className="skill-category">
          <h3 className="skill-category-title">Herramientas</h3>
          <div className="skills-grid">
            {skills.tools.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

