export function ProfileHeader({ profile }) {
  return (
    <header className="profile-header">
      <div className="profile-content">
        <h1 className="profile-name">{profile.name}</h1>
        <p className="profile-title">{profile.title}</p>
        <p className="profile-summary">{profile.summary}</p>

        <div className="profile-contact">
          {profile.email && (
            <a href={`mailto:${profile.email}`} className="contact-link">
              ✉️ {profile.email}
            </a>
          )}
          {profile.phone && (
            <a href={`tel:${profile.phone}`} className="contact-link">
              📱 {profile.phone}
            </a>
          )}
          {profile.location && (
            <span className="contact-item">📍 {profile.location}</span>
          )}
        </div>

        {profile.links && (
          <div className="profile-links">
            {profile.links.linkedin && (
              <a href={`https://linkedin.com/in/${profile.links.linkedin}`} target="_blank" rel="noopener noreferrer" className="social-link">
                🔗 LinkedIn
              </a>
            )}
            {profile.links.github && (
              <a href={`https://github.com/${profile.links.github}`} target="_blank" rel="noopener noreferrer" className="social-link">
                💻 GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
