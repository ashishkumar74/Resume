import React, { useState } from 'react';
import Input from '../Inputs/Input';
import { LuPlus, LuTrash2 } from 'react-icons/lu';
import { sectionTips, educationTemplate } from '../../utils/data';
import { formatDate } from '../../utils/helper';

const EducationForm = ({ data = [], onChange }) => {
  const [expandedId, setExpandedId] = useState(null);

  const addEducation = () => {
    const newEducation = { ...educationTemplate, id: Date.now() };
    onChange([...data, newEducation]);
    setExpandedId(newEducation.id);
  };

  const updateEducation = (id, field, value) => {
    const updated = data.map(edu =>
      edu.id === id ? { ...edu, [field]: value } : edu
    );
    onChange(updated);
  };

  const removeEducation = (id) => {
    onChange(data.filter(edu => edu.id !== id));
  };

  const addAchievement = (id) => {
    const updated = data.map(edu =>
      edu.id === id
        ? { ...edu, achievements: [...(edu.achievements || []), ''] }
        : edu
    );
    onChange(updated);
  };

  const updateAchievement = (eduId, index, value) => {
    const updated = data.map(edu => {
      if (edu.id === eduId) {
        const newAchievements = [...(edu.achievements || [])];
        newAchievements[index] = value;
        return { ...edu, achievements: newAchievements };
      }
      return edu;
    });
    onChange(updated);
  };

  const removeAchievement = (eduId, index) => {
    const updated = data.map(edu => {
      if (edu.id === eduId) {
        const newAchievements = edu.achievements.filter((_, i) => i !== index);
        return { ...edu, achievements: newAchievements };
      }
      return edu;
    });
    onChange(updated);
  };

  return (
    <div className='space-y-4'>
      {/* Tips Section */}
      <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6'>
        <h4 className='text-sm font-semibold text-blue-900 mb-2'>💡 Pro Tips</h4>
        <ul className='text-xs text-blue-800 space-y-1'>
          {sectionTips.education.map((tip, index) => (
            <li key={index} className='flex items-start'>
              <span className='mr-2'>•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Education Items */}
      {data.map((education) => (
        <div
          key={education.id}
          className='border border-gray-200 rounded-lg p-4 bg-white hover:border-purple-300 transition'
        >
          {/* Header */}
          <div className='flex justify-between items-start mb-3'>
            <button
              type='button'
              className='flex-1 text-left'
              onClick={() => setExpandedId(expandedId === education.id ? null : education.id)}
            >
              <h4 className='text-sm font-semibold text-gray-900'>
                {education.degree || 'Degree'}
                {education.institution && ` - ${education.institution}`}
              </h4>
              {education.startDate && (
                <p className='text-xs text-gray-600 mt-1'>
                  {formatDate(education.startDate)} - {formatDate(education.endDate) || 'Present'}
                </p>
              )}
            </button>
            <button
              type='button'
              className='text-red-500 hover:text-red-700 p-1'
              onClick={() => removeEducation(education.id)}
            >
              <LuTrash2 className='text-base' />
            </button>
          </div>

          {/* Expanded Content */}
          {expandedId === education.id && (
            <div className='space-y-4 mt-4'>
              <Input
                label='Degree/Certificate'
                type='text'
                placeholder='Bachelor of Science in Computer Science'
                value={education.degree || ''}
                onChange={(e) => updateEducation(education.id, 'degree', e.target.value)}
                required
              />

              <Input
                label='Institution/University'
                type='text'
                placeholder='University of California'
                value={education.institution || ''}
                onChange={(e) => updateEducation(education.id, 'institution', e.target.value)}
                required
              />

              <Input
                label='Location'
                type='text'
                placeholder='Berkeley, CA'
                value={education.location || ''}
                onChange={(e) => updateEducation(education.id, 'location', e.target.value)}
              />

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <Input
                  label='Start Date'
                  type='month'
                  value={education.startDate || ''}
                  onChange={(e) => updateEducation(education.id, 'startDate', e.target.value)}
                  required
                />
                <Input
                  label='End Date (or Expected)'
                  type='month'
                  value={education.endDate || ''}
                  onChange={(e) => updateEducation(education.id, 'endDate', e.target.value)}
                />
              </div>

              <Input
                label='GPA (Optional)'
                type='text'
                placeholder='3.8/4.0'
                value={education.gpa || ''}
                onChange={(e) => updateEducation(education.id, 'gpa', e.target.value)}
              />

              {/* Achievements */}
              <div>
                <div className='flex justify-between items-center mb-2'>
                  <label className='text-sm font-medium text-gray-700'>
                    Achievements & Honors
                  </label>
                  <button
                    type='button'
                    className='text-xs text-purple-600 hover:text-purple-800 flex items-center gap-1'
                    onClick={() => addAchievement(education.id)}
                  >
                    <LuPlus className='text-sm' />
                    Add Achievement
                  </button>
                </div>
                <div className='space-y-2'>
                  {(education.achievements || []).map((achievement, index) => (
                    <div key={index} className='flex gap-2'>
                      <input
                        type='text'
                        className='flex-1 text-sm text-black outline-none bg-white border border-slate-100 px-3 py-2 rounded-md placeholder:text-gray-500 focus-within:border-purple-300'
                        placeholder="Dean's List, Academic Excellence Award"
                        value={achievement}
                        onChange={(e) => updateAchievement(education.id, index, e.target.value)}
                      />
                      <button
                        type='button'
                        className='text-red-500 hover:text-red-700 p-2'
                        onClick={() => removeAchievement(education.id, index)}
                      >
                        <LuTrash2 className='text-sm' />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Add Button */}
      <button
        type='button'
        className='w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-600 hover:border-purple-400 hover:text-purple-600 transition'
        onClick={addEducation}
      >
        <LuPlus className='text-lg' />
        Add Education
      </button>
    </div>
  );
};

export default EducationForm;
