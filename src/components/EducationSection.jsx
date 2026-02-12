export function EducationSection({ education }) {
  return (
    <section className="education-section">
      <h2 className="section-title">Educación</h2>
      <div className="education-list">
        {education.map((edu) => (
          <div key={edu.id} className="education-item">
            <div className="education-header">
              <h3 className="degree">{edu.degree}</h3>
              <span className="graduation-date">{edu.graduationDate}</span>
            </div>
            <p className="school-name">{edu.school}</p>
            {edu.field && <p className="field-of-study">{edu.field}</p>}
            {edu.details && <p className="education-details">{edu.details}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
