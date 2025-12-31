import React from 'react';
import { formatDate } from '../../utils/helper';

const ExecutiveClassicTemplate = ({ data, theme = { primary: '#4B5563', secondary: '#374151', text: '#1F2937' } }) => {
  const { personalInfo, summary, experience, education, skills, projects, certifications, languages } = data;

  return (
    <div className='bg-white p-8 min-h-[297mm] w-[210mm] text-gray-900' style={{ fontFamily: 'Urbanist, sans-serif' }}>
      {/* Header */}
      <div className='text-center pb-6 mb-6 border-b-4' style={{ borderColor: theme.primary }}>
        <h1 className='text-4xl font-bold mb-3' style={{ color: theme.primary }}>
          {personalInfo?.firstName?.toUpperCase()} {personalInfo?.lastName?.toUpperCase()}
        </h1>
        <div className='flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-gray-600'>
          {personalInfo?.email && <span>{personalInfo.email}</span>}
          {personalInfo?.phone && <span>{personalInfo.phone}</span>}
          {personalInfo?.location && <span>{personalInfo.location}</span>}
        </div>
        {(personalInfo?.linkedin || personalInfo?.portfolio) && (
          <div className='flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs text-gray-600 mt-1'>
            {personalInfo?.linkedin && (
              <span>{personalInfo.linkedin.replace(/^https?:\/\//, '')}</span>
            )}
            {personalInfo?.portfolio && (
              <span>{personalInfo.portfolio.replace(/^https?:\/\//, '')}</span>
            )}
          </div>
        )}
      </div>

      {/* Summary */}
      {summary && (
        <div className='mb-6'>
          <h2
            className='text-lg font-bold mb-3 pb-1 border-b uppercase tracking-wider'
            style={{ color: theme.primary, borderColor: theme.primary }}
          >
            Executive Summary
          </h2>
          <p className='text-sm text-gray-700 leading-relaxed text-justify'>{summary}</p>
        </div>
      )}

      {/* Professional Experience */}
      {experience && experience.length > 0 && (
        <div className='mb-6'>
          <h2
            className='text-lg font-bold mb-3 pb-1 border-b uppercase tracking-wider'
            style={{ color: theme.primary, borderColor: theme.primary }}
          >
            Professional Experience
          </h2>
          {experience.map((exp, index) => (
            <div key={index} className='mb-4'>
              <div className='flex justify-between items-baseline mb-1'>
                <h3 className='text-base font-bold'>{exp.jobTitle}</h3>
                <p className='text-xs text-gray-600 italic whitespace-nowrap ml-4'>
                  {formatDate(exp.startDate)} - {exp.isCurrentlyWorking ? 'Present' : formatDate(exp.endDate)}
                </p>
              </div>
              <p className='text-sm font-semibold italic mb-2' style={{ color: theme.secondary }}>
                {exp.company} {exp.location && `— ${exp.location}`}
              </p>
              {exp.description && (
                <p className='text-sm text-gray-700 mb-2'>{exp.description}</p>
              )}
              {exp.achievements && exp.achievements.length > 0 && exp.achievements[0] && (
                <ul className='text-sm text-gray-700 space-y-1.5 ml-5'>
                  {exp.achievements.map((achievement, idx) => (
                    achievement && (
                      <li key={idx} className='list-disc'>
                        {achievement}
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
          <h2
            className='text-lg font-bold mb-3 pb-1 border-b uppercase tracking-wider'
            style={{ color: theme.primary, borderColor: theme.primary }}
          >
            Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} className='mb-3'>
              <div className='flex justify-between items-baseline'>
                <div>
                  <h3 className='text-base font-bold'>{edu.degree}</h3>
                  <p className='text-sm font-semibold italic' style={{ color: theme.secondary }}>
                    {edu.institution} {edu.location && `— ${edu.location}`}
                  </p>
                  {edu.gpa && (
                    <p className='text-sm text-gray-600'>Grade Point Average: {edu.gpa}</p>
                  )}
                </div>
                <p className='text-xs text-gray-600 italic whitespace-nowrap ml-4'>
                  {formatDate(edu.startDate)} - {formatDate(edu.endDate) || 'Present'}
                </p>
              </div>
              {edu.achievements && edu.achievements.length > 0 && edu.achievements[0] && (
                <ul className='text-sm text-gray-700 mt-2 space-y-1 ml-5'>
                  {edu.achievements.map((achievement, idx) => (
                    achievement && (
                      <li key={idx} className='list-disc'>
                        {achievement}
                      </li>
                    )
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Core Competencies */}
      {skills && skills.length > 0 && (
        <div className='mb-6'>
          <h2
            className='text-lg font-bold mb-3 pb-1 border-b uppercase tracking-wider'
            style={{ color: theme.primary, borderColor: theme.primary }}
          >
            Core Competencies
          </h2>
          <div className='grid grid-cols-3 gap-2'>
            {skills.map((skill, index) => (
              <div key={index} className='text-sm text-gray-700'>
                • {skill}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Notable Projects */}
      {projects && projects.length > 0 && (
        <div className='mb-6'>
          <h2
            className='text-lg font-bold mb-3 pb-1 border-b uppercase tracking-wider'
            style={{ color: theme.primary, borderColor: theme.primary }}
          >
            Notable Projects
          </h2>
          {projects.map((project, index) => (
            <div key={index} className='mb-3'>
              <div className='flex justify-between items-baseline mb-1'>
                <h3 className='text-base font-bold'>{project.title}</h3>
                {project.startDate && (
                  <p className='text-xs text-gray-600 italic whitespace-nowrap ml-4'>
                    {formatDate(project.startDate)} - {formatDate(project.endDate) || 'Present'}
                  </p>
                )}
              </div>
              {project.description && (
                <p className='text-sm text-gray-700 mb-1'>{project.description}</p>
              )}
              {project.technologies && project.technologies.length > 0 && (
                <p className='text-sm text-gray-600 italic'>
                  Technologies: {project.technologies.join(', ')}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Professional Certifications */}
      {certifications && certifications.length > 0 && (
        <div className='mb-6'>
          <h2
            className='text-lg font-bold mb-3 pb-1 border-b uppercase tracking-wider'
            style={{ color: theme.primary, borderColor: theme.primary }}
          >
            Professional Certifications
          </h2>
          {certifications.map((cert, index) => (
            <div key={index} className='mb-2 flex justify-between items-start'>
              <div>
                <h3 className='text-sm font-bold'>{cert.name}</h3>
                <p className='text-sm text-gray-600'>{cert.issuer}</p>
                {cert.credentialId && (
                  <p className='text-xs text-gray-500'>Credential ID: {cert.credentialId}</p>
                )}
              </div>
              {cert.issueDate && (
                <p className='text-xs text-gray-600 italic whitespace-nowrap ml-4'>
                  {formatDate(cert.issueDate, 'MMMM YYYY')}
                  {cert.expiryDate && ` - ${formatDate(cert.expiryDate, 'MMMM YYYY')}`}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Languages */}
      {languages && languages.length > 0 && (
        <div className='mb-6'>
          <h2
            className='text-lg font-bold mb-3 pb-1 border-b uppercase tracking-wider'
            style={{ color: theme.primary, borderColor: theme.primary }}
          >
            Languages
          </h2>
          <div className='grid grid-cols-2 gap-x-6 gap-y-2'>
            {languages.map((lang, index) => (
              <div key={index} className='text-sm text-gray-700'>
                <span className='font-semibold'>{lang.language}:</span>{' '}
                <span className='capitalize'>{lang.proficiency}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExecutiveClassicTemplate;
