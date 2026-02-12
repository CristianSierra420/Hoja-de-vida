export function ProfessionalProfileSection({ profile }) {
  return (
    <section className="professional-profile-section">
      <h2 className="section-title">Perfil Profesional</h2>
      <div className="profile-text">
        {profile.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
