import React, { useState } from 'react';
import { LuPlus, LuTrash2 } from 'react-icons/lu';
import { sectionTips, languageTemplate, proficiencyLevels } from '../../utils/data';

const LanguagesForm = ({ data = [], onChange }) => {
  const addLanguage = () => {
    const newLanguage = { ...languageTemplate, id: Date.now() };
    onChange([...data, newLanguage]);
  };

  const updateLanguage = (id, field, value) => {
    const updated = data.map(lang =>
      lang.id === id ? { ...lang, [field]: value } : lang
    );
    onChange(updated);
  };

  const removeLanguage = (id) => {
    onChange(data.filter(lang => lang.id !== id));
  };

  return (
    <div className='space-y-4'>
      {/* Tips Section */}
      <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6'>
        <h4 className='text-sm font-semibold text-blue-900 mb-2'>💡 Pro Tips</h4>
        <ul className='text-xs text-blue-800 space-y-1'>
          {sectionTips.languages.map((tip, index) => (
            <li key={index} className='flex items-start'>
              <span className='mr-2'>•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Language Items */}
      {data.map((language) => (
        <div
          key={language.id}
          className='border border-gray-200 rounded-lg p-4 bg-white hover:border-purple-300 transition'
        >
          <div className='flex gap-4 items-start'>
            <div className='flex-1'>
              <input
                type='text'
                className='w-full text-sm text-black outline-none bg-white border border-slate-100 px-3 py-2.5 rounded-md placeholder:text-gray-500 focus-within:border-purple-300 mb-3'
                placeholder='Language (e.g., English, Spanish, French)'
                value={language.language || ''}
                onChange={(e) => updateLanguage(language.id, 'language', e.target.value)}
              />
              <select
                className='w-full text-sm text-black outline-none bg-white border border-slate-100 px-3 py-2.5 rounded-md focus-within:border-purple-300'
                value={language.proficiency || 'intermediate'}
                onChange={(e) => updateLanguage(language.id, 'proficiency', e.target.value)}
              >
                {proficiencyLevels.map((level) => (
                  <option key={level.value} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </select>
            </div>
            <button
              type='button'
              className='text-red-500 hover:text-red-700 p-1 mt-1'
              onClick={() => removeLanguage(language.id)}
            >
              <LuTrash2 className='text-base' />
            </button>
          </div>
        </div>
      ))}

      {/* Add Button */}
      <button
        type='button'
        className='w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-600 hover:border-purple-400 hover:text-purple-600 transition'
        onClick={addLanguage}
      >
        <LuPlus className='text-lg' />
        Add Language
      </button>
    </div>
  );
};

export default LanguagesForm;
