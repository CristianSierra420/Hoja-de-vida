export function ProjectsSection({ projects }) {
  return (
    <section className="projects-section">
      <h2 className="section-title">Proyectos</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <div className="project-header">
              <h3 className="project-name">{project.name}</h3>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  🔗
                </a>
              )}
            </div>
            <p className="project-description">{project.description}</p>
            {project.technologies && (
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            )}
            {project.details && <p className="project-details">{project.details}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
