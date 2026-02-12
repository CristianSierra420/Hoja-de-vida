export function ExperienceSection({ experience }) {
  return (
    <section className="experience-section">
      <h2 className="section-title">Experiencia Laboral</h2>
      <div className="experience-list">
        {experience.map((job) => (
          <div key={job.id} className="experience-item">
            <div className="experience-header">
              <h3 className="job-position">{job.position}</h3>
              <span className="date-range">
                {job.startDate} - {job.endDate}
              </span>
            </div>
            <p className="job-company">{job.company}</p>

            {/* Si description es un string, renderiza párrafos */}
            {typeof job.description === 'string' ? (
              <div className="job-narrative">
                {job.description.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            ) : (
              /* Si description es un array, renderiza como lista de puntos */
              <ul className="job-descriptions">
                {job.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
