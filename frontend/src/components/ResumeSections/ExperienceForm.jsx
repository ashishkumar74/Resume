import React, { useState } from 'react';
import Input from '../Inputs/Input';
import { LuPlus, LuTrash2 } from 'react-icons/lu';
import { sectionTips, experienceTemplate } from '../../utils/data';
import { formatDate, calculateDuration } from '../../utils/helper';

const ExperienceForm = ({ data = [], onChange }) => {
  const [expandedId, setExpandedId] = useState(null);

  const addExperience = () => {
    const newExperience = { ...experienceTemplate, id: Date.now() };
    onChange([...data, newExperience]);
    setExpandedId(newExperience.id);
  };

  const updateExperience = (id, field, value) => {
    const updated = data.map(exp =>
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    onChange(updated);
  };

  const removeExperience = (id) => {
    onChange(data.filter(exp => exp.id !== id));
  };

  const addAchievement = (id) => {
    const updated = data.map(exp =>
      exp.id === id
        ? { ...exp, achievements: [...(exp.achievements || []), ''] }
        : exp
    );
    onChange(updated);
  };

  const updateAchievement = (expId, index, value) => {
    const updated = data.map(exp => {
      if (exp.id === expId) {
        const newAchievements = [...(exp.achievements || [])];
        newAchievements[index] = value;
        return { ...exp, achievements: newAchievements };
      }
      return exp;
    });
    onChange(updated);
  };

  const removeAchievement = (expId, index) => {
    const updated = data.map(exp => {
      if (exp.id === expId) {
        const newAchievements = exp.achievements.filter((_, i) => i !== index);
        return { ...exp, achievements: newAchievements };
      }
      return exp;
    });
    onChange(updated);
  };

  return (
    <div className='space-y-4'>
      {/* Tips Section */}
      <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6'>
        <h4 className='text-sm font-semibold text-blue-900 mb-2'>💡 Pro Tips</h4>
        <ul className='text-xs text-blue-800 space-y-1'>
          {sectionTips.experience.map((tip, index) => (
            <li key={index} className='flex items-start'>
              <span className='mr-2'>•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Experience Items */}
      {data.map((experience) => (
        <div
          key={experience.id}
          className='border border-gray-200 rounded-lg p-4 bg-white hover:border-purple-300 transition'
        >
          {/* Header */}
          <div className='flex justify-between items-start mb-3'>
            <button
              type='button'
              className='flex-1 text-left'
              onClick={() => setExpandedId(expandedId === experience.id ? null : experience.id)}
            >
              <h4 className='text-sm font-semibold text-gray-900'>
                {experience.jobTitle || 'Job Title'}
                {experience.company && ` at ${experience.company}`}
              </h4>
              {experience.startDate && (
                <p className='text-xs text-gray-600 mt-1'>
                  {formatDate(experience.startDate)} - {experience.isCurrentlyWorking ? 'Present' : formatDate(experience.endDate)}
                  {experience.startDate && (
                    <span className='ml-2'>
                      ({calculateDuration(experience.startDate, experience.isCurrentlyWorking ? null : experience.endDate)})
                    </span>
                  )}
                </p>
              )}
            </button>
            <button
              type='button'
              className='text-red-500 hover:text-red-700 p-1'
              onClick={() => removeExperience(experience.id)}
            >
              <LuTrash2 className='text-base' />
            </button>
          </div>

          {/* Expanded Content */}
          {expandedId === experience.id && (
            <div className='space-y-4 mt-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <Input
                  label='Job Title'
                  type='text'
                  placeholder='Software Engineer'
                  value={experience.jobTitle || ''}
                  onChange={(e) => updateExperience(experience.id, 'jobTitle', e.target.value)}
                  required
                />
                <Input
                  label='Company'
                  type='text'
                  placeholder='Tech Corp'
                  value={experience.company || ''}
                  onChange={(e) => updateExperience(experience.id, 'company', e.target.value)}
                  required
                />
              </div>

              <Input
                label='Location'
                type='text'
                placeholder='San Francisco, CA'
                value={experience.location || ''}
                onChange={(e) => updateExperience(experience.id, 'location', e.target.value)}
              />

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <Input
                  label='Start Date'
                  type='month'
                  value={experience.startDate || ''}
                  onChange={(e) => updateExperience(experience.id, 'startDate', e.target.value)}
                  required
                />
                <Input
                  label='End Date'
                  type='month'
                  value={experience.endDate || ''}
                  onChange={(e) => updateExperience(experience.id, 'endDate', e.target.value)}
                  disabled={experience.isCurrentlyWorking}
                />
              </div>

              <div className='flex items-center'>
                <input
                  type='checkbox'
                  id={`currently-working-${experience.id}`}
                  checked={experience.isCurrentlyWorking || false}
                  onChange={(e) => updateExperience(experience.id, 'isCurrentlyWorking', e.target.checked)}
                  className='mr-2'
                />
                <label htmlFor={`currently-working-${experience.id}`} className='text-sm text-gray-700'>
                  I currently work here
                </label>
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Job Description
                </label>
                <textarea
                  className='w-full text-sm text-black outline-none bg-white border border-slate-100 px-3 py-3 rounded-md placeholder:text-gray-500 focus-within:border-purple-300 min-h-[80px] resize-y'
                  placeholder='Brief description of your role and responsibilities...'
                  value={experience.description || ''}
                  onChange={(e) => updateExperience(experience.id, 'description', e.target.value)}
                />
              </div>

              {/* Key Achievements */}
              <div>
                <div className='flex justify-between items-center mb-2'>
                  <label className='text-sm font-medium text-gray-700'>
                    Key Achievements
                  </label>
                  <button
                    type='button'
                    className='text-xs text-purple-600 hover:text-purple-800 flex items-center gap-1'
                    onClick={() => addAchievement(experience.id)}
                  >
                    <LuPlus className='text-sm' />
                    Add Achievement
                  </button>
                </div>
                <div className='space-y-2'>
                  {(experience.achievements || []).map((achievement, index) => (
                    <div key={index} className='flex gap-2'>
                      <input
                        type='text'
                        className='flex-1 text-sm text-black outline-none bg-white border border-slate-100 px-3 py-2 rounded-md placeholder:text-gray-500 focus-within:border-purple-300'
                        placeholder='• Increased team productivity by 40%'
                        value={achievement}
                        onChange={(e) => updateAchievement(experience.id, index, e.target.value)}
                      />
                      <button
                        type='button'
                        className='text-red-500 hover:text-red-700 p-2'
                        onClick={() => removeAchievement(experience.id, index)}
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
        onClick={addExperience}
      >
        <LuPlus className='text-lg' />
        Add Work Experience
      </button>
    </div>
  );
};

export default ExperienceForm;
