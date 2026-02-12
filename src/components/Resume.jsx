import { ProfileHeader } from './ProfileHeader';
import { ProfessionalProfileSection } from './ProfessionalProfileSection';
import { ExperienceSection } from './ExperienceSection';
import { EducationSection } from './EducationSection';
import { SkillsSection } from './SkillsSection';
import { CompetenciesSection } from './CompetenciesSection';
import { ObjectiveSection } from './ObjectiveSection';
import { ProjectsSection } from './ProjectsSection';

export function Resume({ data }) {
  return (
    <div className="resume-container">
      {data.profile && <ProfileHeader profile={data.profile} />}

      {data.professionalProfile && <ProfessionalProfileSection profile={data.professionalProfile} />}

      {data.objective && <ObjectiveSection objective={data.objective} />}

      {data.experience && data.experience.length > 0 && (
        <ExperienceSection experience={data.experience} />
      )}

      {data.education && data.education.length > 0 && (
        <EducationSection education={data.education} />
      )}

      {data.skills && data.skills.length > 0 && (
        <SkillsSection skills={data.skills} />
      )}

      {data.skills && typeof data.skills === 'object' && !Array.isArray(data.skills) && (
        <SkillsSection skills={data.skills} />
      )}

      {data.competencies && data.competencies.length > 0 && (
        <CompetenciesSection competencies={data.competencies} />
      )}

      {data.projects && data.projects.length > 0 && (
        <ProjectsSection projects={data.projects} />
      )}
    </div>
  );
}
