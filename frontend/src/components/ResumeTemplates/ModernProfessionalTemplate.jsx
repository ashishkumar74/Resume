import React from 'react';
import { formatDate, calculateDuration } from '../../utils/helper';

const ModernProfessionalTemplate = ({ data, theme = { primary: '#2563EB', secondary: '#1E40AF', text: '#1F2937' } }) => {
  const { personalInfo, summary, experience, education, skills, projects, certifications, languages } = data;

  return (
    <div className='bg-white p-8 min-h-[297mm] w-[210mm] text-gray-900' style={{ fontFamily: 'Urbanist, sans-serif' }}>
      {/* Header */}
      <div className='border-b-2 pb-4 mb-6' style={{ borderColor: theme.primary }}>
        <h1 className='text-3xl font-bold mb-2' style={{ color: theme.primary }}>
          {personalInfo?.firstName} {personalInfo?.lastName}
        </h1>
        <div className='flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600'>
          {personalInfo?.email && <span>📧 {personalInfo.email}</span>}
          {personalInfo?.phone && <span>📱 {personalInfo.phone}</span>}
          {personalInfo?.location && <span>📍 {personalInfo.location}</span>}
          {personalInfo?.linkedin && (
            <span>🔗 {personalInfo.linkedin.replace(/^https?:\/\//, '')}</span>
          )}
          {personalInfo?.portfolio && (
            <span>🌐 {personalInfo.portfolio.replace(/^https?:\/\//, '')}</span>
          )}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className='mb-6'>
          <h2 className='text-xl font-bold mb-2 uppercase tracking-wide' style={{ color: theme.primary }}>
            Professional Summary
          </h2>
          <p className='text-sm text-gray-700 leading-relaxed'>{summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience && experience.length > 0 && (
        <div className='mb-6'>
          <h2 className='text-xl font-bold mb-3 uppercase tracking-wide' style={{ color: theme.primary }}>
            Work Experience
          </h2>
          {experience.map((exp, index) => (
            <div key={index} className='mb-4'>
              <div className='flex justify-between items-start mb-1'>
                <div>
                  <h3 className='text-base font-semibold'>{exp.jobTitle}</h3>
                  <p className='text-sm font-medium' style={{ color: theme.secondary }}>
                    {exp.company} {exp.location && `• ${exp.location}`}
                  </p>
                </div>
                <p className='text-xs text-gray-600 whitespace-nowrap ml-4'>
                  {formatDate(exp.startDate)} - {exp.isCurrentlyWorking ? 'Present' : formatDate(exp.endDate)}
                </p>
              </div>
              {exp.description && (
                <p className='text-sm text-gray-700 mb-2'>{exp.description}</p>
              )}
              {exp.achievements && exp.achievements.length > 0 && exp.achievements[0] && (
                <ul className='text-sm text-gray-700 space-y-1'>
                  {exp.achievements.map((achievement, idx) => (
                    achievement && (
                      <li key={idx} className='flex items-start'>
                        <span className='mr-2'>•</span>
                        <span>{achievement}</span>
                      </li>
                    )
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <div className='mb-6'>
          <h2 className='text-xl font-bold mb-3 uppercase tracking-wide' style={{ color: theme.primary }}>
            Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} className='mb-3'>
              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='text-base font-semibold'>{edu.degree}</h3>
                  <p className='text-sm' style={{ color: theme.secondary }}>
                    {edu.institution} {edu.location && `• ${edu.location}`}
                  </p>
                  {edu.gpa && (
                    <p className='text-sm text-gray-600'>GPA: {edu.gpa}</p>
                  )}
                </div>
                <p className='text-xs text-gray-600 whitespace-nowrap ml-4'>
                  {formatDate(edu.startDate)} - {formatDate(edu.endDate) || 'Present'}
                </p>
              </div>
              {edu.achievements && edu.achievements.length > 0 && edu.achievements[0] && (
                <ul className='text-sm text-gray-700 mt-2 space-y-1'>
                  {edu.achievements.map((achievement, idx) => (
                    achievement && (
                      <li key={idx} className='flex items-start'>
                        <span className='mr-2'>•</span>
                        <span>{achievement}</span>
                      </li>
                    )
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills && skills.length > 0 && (
        <div className='mb-6'>
          <h2 className='text-xl font-bold mb-3 uppercase tracking-wide' style={{ color: theme.primary }}>
            Skills
          </h2>
          <div className='flex flex-wrap gap-2'>
            {skills.map((skill, index) => (
              <span
                key={index}
                className='text-sm px-3 py-1 rounded-full'
                style={{
                  backgroundColor: `${theme.primary}15`,
                  color: theme.primary
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && (
        <div className='mb-6'>
          <h2 className='text-xl font-bold mb-3 uppercase tracking-wide' style={{ color: theme.primary }}>
            Projects
          </h2>
          {projects.map((project, index) => (
            <div key={index} className='mb-3'>
              <div className='flex justify-between items-start mb-1'>
                <h3 className='text-base font-semibold'>{project.title}</h3>
                {project.startDate && (
                  <p className='text-xs text-gray-600 whitespace-nowrap ml-4'>
                    {formatDate(project.startDate)} - {formatDate(project.endDate) || 'Present'}
                  </p>
                )}
              </div>
              {project.description && (
                <p className='text-sm text-gray-700 mb-2'>{project.description}</p>
              )}
              {project.technologies && project.technologies.length > 0 && (
                <div className='flex flex-wrap gap-1 mb-1'>
                  <span className='text-xs text-gray-600 mr-1'>Technologies:</span>
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className='text-xs font-medium' style={{ color: theme.secondary }}>
                      {tech}{idx < project.technologies.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </div>
              )}
              {project.link && (
                <p className='text-xs text-gray-600'>🔗 {project.link}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Certifications */}
      {certifications && certifications.length > 0 && (
        <div className='mb-6'>
          <h2 className='text-xl font-bold mb-3 uppercase tracking-wide' style={{ color: theme.primary }}>
            Certifications
          </h2>
          {certifications.map((cert, index) => (
            <div key={index} className='mb-2'>
              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='text-sm font-semibold'>{cert.name}</h3>
                  <p className='text-sm text-gray-600'>{cert.issuer}</p>
                  {cert.credentialId && (
                    <p className='text-xs text-gray-500'>ID: {cert.credentialId}</p>
                  )}
                </div>
                {cert.issueDate && (
                  <p className='text-xs text-gray-600 whitespace-nowrap ml-4'>
                    Issued {formatDate(cert.issueDate, 'MMMM YYYY')}
                    {cert.expiryDate && ` • Expires ${formatDate(cert.expiryDate, 'MMMM YYYY')}`}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Languages */}
      {languages && languages.length > 0 && (
        <div className='mb-6'>
          <h2 className='text-xl font-bold mb-3 uppercase tracking-wide' style={{ color: theme.primary }}>
            Languages
          </h2>
          <div className='flex flex-wrap gap-4'>
            {languages.map((lang, index) => (
              <div key={index} className='text-sm'>
                <span className='font-medium'>{lang.language}</span>
                <span className='text-gray-600 ml-1'>
                  ({lang.proficiency.charAt(0).toUpperCase() + lang.proficiency.slice(1)})
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModernProfessionalTemplate;
