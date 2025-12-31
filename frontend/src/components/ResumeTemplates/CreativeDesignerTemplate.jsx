import React from 'react';
import { formatDate } from '../../utils/helper';

const CreativeDesignerTemplate = ({ data, theme = { primary: '#7C3AED', secondary: '#5B21B6', text: '#1F2937' } }) => {
  const { personalInfo, summary, experience, education, skills, projects, certifications, languages } = data;

  return (
    <div className='bg-white min-h-[297mm] w-[210mm] text-gray-900' style={{ fontFamily: 'Urbanist, sans-serif' }}>
      {/* Sidebar */}
      <div className='flex'>
        {/* Left Sidebar */}
        <div className='w-1/3 p-6' style={{ backgroundColor: `${theme.primary}10` }}>
          {/* Profile Photo Placeholder */}
          {personalInfo?.profilePhoto && (
            <div className='mb-6'>
              <img
                src={personalInfo.profilePhoto}
                alt='Profile'
                className='w-32 h-32 rounded-full mx-auto object-cover border-4'
                style={{ borderColor: theme.primary }}
              />
            </div>
          )}

          {/* Contact */}
          <div className='mb-6'>
            <h3 className='text-sm font-bold mb-3 uppercase tracking-wider' style={{ color: theme.primary }}>
              Contact
            </h3>
            <div className='space-y-2 text-xs'>
              {personalInfo?.email && (
                <div>
                  <p className='font-semibold'>Email</p>
                  <p className='text-gray-700 break-words'>{personalInfo.email}</p>
                </div>
              )}
              {personalInfo?.phone && (
                <div>
                  <p className='font-semibold'>Phone</p>
                  <p className='text-gray-700'>{personalInfo.phone}</p>
                </div>
              )}
              {personalInfo?.location && (
                <div>
                  <p className='font-semibold'>Location</p>
                  <p className='text-gray-700'>{personalInfo.location}</p>
                </div>
              )}
              {personalInfo?.linkedin && (
                <div>
                  <p className='font-semibold'>LinkedIn</p>
                  <p className='text-gray-700 break-words'>
                    {personalInfo.linkedin.replace(/^https?:\/\//, '')}
                  </p>
                </div>
              )}
              {personalInfo?.portfolio && (
                <div>
                  <p className='font-semibold'>Portfolio</p>
                  <p className='text-gray-700 break-words'>
                    {personalInfo.portfolio.replace(/^https?:\/\//, '')}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Skills */}
          {skills && skills.length > 0 && (
            <div className='mb-6'>
              <h3 className='text-sm font-bold mb-3 uppercase tracking-wider' style={{ color: theme.primary }}>
                Skills
              </h3>
              <div className='space-y-2'>
                {skills.map((skill, index) => (
                  <div key={index} className='text-xs'>
                    <div className='px-2 py-1 rounded' style={{ backgroundColor: theme.primary, color: 'white' }}>
                      {skill}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {languages && languages.length > 0 && (
            <div className='mb-6'>
              <h3 className='text-sm font-bold mb-3 uppercase tracking-wider' style={{ color: theme.primary }}>
                Languages
              </h3>
              <div className='space-y-2 text-xs'>
                {languages.map((lang, index) => (
                  <div key={index}>
                    <p className='font-semibold'>{lang.language}</p>
                    <p className='text-gray-700 capitalize'>{lang.proficiency}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className='w-2/3 p-8'>
          {/* Name & Title */}
          <div className='mb-6'>
            <h1 className='text-4xl font-bold mb-1' style={{ color: theme.primary }}>
              {personalInfo?.firstName} {personalInfo?.lastName}
            </h1>
            <div className='h-1 w-20 mb-4' style={{ backgroundColor: theme.primary }}></div>
          </div>

          {/* Summary */}
          {summary && (
            <div className='mb-6'>
              <h2 className='text-lg font-bold mb-2 uppercase tracking-wide' style={{ color: theme.primary }}>
                About Me
              </h2>
              <p className='text-sm text-gray-700 leading-relaxed'>{summary}</p>
            </div>
          )}

          {/* Experience */}
          {experience && experience.length > 0 && (
            <div className='mb-6'>
              <h2 className='text-lg font-bold mb-3 uppercase tracking-wide' style={{ color: theme.primary }}>
                Experience
              </h2>
              {experience.map((exp, index) => (
                <div key={index} className='mb-4 pl-4 border-l-2' style={{ borderColor: theme.primary }}>
                  <h3 className='text-sm font-semibold'>{exp.jobTitle}</h3>
                  <p className='text-sm font-medium' style={{ color: theme.secondary }}>
                    {exp.company} {exp.location && `• ${exp.location}`}
                  </p>
                  <p className='text-xs text-gray-600 mb-2'>
                    {formatDate(exp.startDate)} - {exp.isCurrentlyWorking ? 'Present' : formatDate(exp.endDate)}
                  </p>
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
              <h2 className='text-lg font-bold mb-3 uppercase tracking-wide' style={{ color: theme.primary }}>
                Education
              </h2>
              {education.map((edu, index) => (
                <div key={index} className='mb-3 pl-4 border-l-2' style={{ borderColor: theme.primary }}>
                  <h3 className='text-sm font-semibold'>{edu.degree}</h3>
                  <p className='text-sm' style={{ color: theme.secondary }}>
                    {edu.institution}
                  </p>
                  <p className='text-xs text-gray-600'>
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate) || 'Present'}
                  </p>
                  {edu.gpa && (
                    <p className='text-sm text-gray-600 mt-1'>GPA: {edu.gpa}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Projects */}
          {projects && projects.length > 0 && (
            <div className='mb-6'>
              <h2 className='text-lg font-bold mb-3 uppercase tracking-wide' style={{ color: theme.primary }}>
                Projects
              </h2>
              {projects.map((project, index) => (
                <div key={index} className='mb-3'>
                  <h3 className='text-sm font-semibold'>{project.title}</h3>
                  {project.description && (
                    <p className='text-sm text-gray-700 mb-1'>{project.description}</p>
                  )}
                  {project.technologies && project.technologies.length > 0 && (
                    <p className='text-xs text-gray-600'>
                      {project.technologies.join(' • ')}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Certifications */}
          {certifications && certifications.length > 0 && (
            <div className='mb-6'>
              <h2 className='text-lg font-bold mb-3 uppercase tracking-wide' style={{ color: theme.primary }}>
                Certifications
              </h2>
              {certifications.map((cert, index) => (
                <div key={index} className='mb-2'>
                  <h3 className='text-sm font-semibold'>{cert.name}</h3>
                  <p className='text-sm text-gray-600'>
                    {cert.issuer}
                    {cert.issueDate && ` • ${formatDate(cert.issueDate, 'MMMM YYYY')}`}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreativeDesignerTemplate;
