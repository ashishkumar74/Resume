import React, { useState } from 'react';
import { LuPlus, LuX } from 'react-icons/lu';
import { sectionTips, skillCategories } from '../../utils/data';

const SkillsForm = ({ data = [], onChange }) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const addSkill = () => {
    if (inputValue.trim() && !data.includes(inputValue.trim())) {
      onChange([...data, inputValue.trim()]);
      setInputValue('');
    }
  };

  const removeSkill = (skillToRemove) => {
    onChange(data.filter(skill => skill !== skillToRemove));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill();
    }
  };

  // Popular skills by category
  const popularSkills = {
    'Programming Languages': ['JavaScript', 'Python', 'Java', 'TypeScript', 'C++', 'Go', 'Ruby', 'PHP'],
    'Frameworks & Libraries': ['React', 'Node.js', 'Angular', 'Vue.js', 'Django', 'Flask', 'Spring Boot', 'Express.js'],
    'Tools & Technologies': ['Git', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'CI/CD', 'Jenkins', 'Linux'],
    'Databases': ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'Oracle', 'Cassandra'],
    'Soft Skills': ['Leadership', 'Communication', 'Problem Solving', 'Team Collaboration', 'Time Management', 'Adaptability'],
  };

  const addQuickSkill = (skill) => {
    if (!data.includes(skill)) {
      onChange([...data, skill]);
    }
  };

  return (
    <div className='space-y-4'>
      {/* Tips Section */}
      <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6'>
        <h4 className='text-sm font-semibold text-blue-900 mb-2'>💡 Pro Tips</h4>
        <ul className='text-xs text-blue-800 space-y-1'>
          {sectionTips.skills.map((tip, index) => (
            <li key={index} className='flex items-start'>
              <span className='mr-2'>•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Add Skill Input */}
      <div className='flex gap-2'>
        <input
          type='text'
          className='flex-1 text-sm text-black outline-none bg-white border border-slate-100 px-3 py-2.5 rounded-md placeholder:text-gray-500 focus-within:border-purple-300'
          placeholder='Type a skill and press Enter or click Add'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          type='button'
          className='flex items-center gap-2 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md transition'
          onClick={addSkill}
        >
          <LuPlus className='text-base' />
          Add
        </button>
      </div>

      {/* Skills Display */}
      {data.length > 0 && (
        <div className='bg-gray-50 border border-gray-200 rounded-lg p-4'>
          <h4 className='text-sm font-semibold text-gray-700 mb-3'>Your Skills ({data.length})</h4>
          <div className='flex flex-wrap gap-2'>
            {data.map((skill, index) => (
              <div
                key={index}
                className='flex items-center gap-2 bg-white border border-purple-200 text-purple-700 px-3 py-1.5 rounded-full text-sm'
              >
                <span>{skill}</span>
                <button
                  type='button'
                  className='hover:text-red-600 transition'
                  onClick={() => removeSkill(skill)}
                >
                  <LuX className='text-base' />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Popular Skills Suggestions */}
      <div className='mt-6'>
        <h4 className='text-sm font-semibold text-gray-700 mb-3'>Popular Skills by Category</h4>
        
        {/* Category Tabs */}
        <div className='flex flex-wrap gap-2 mb-4'>
          {Object.keys(popularSkills).map((category) => (
            <button
              key={category}
              type='button'
              className={`text-xs px-3 py-1.5 rounded-full border transition ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white border-purple-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-purple-400'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
          {popularSkills[selectedCategory]?.map((skill) => (
            <button
              key={skill}
              type='button'
              className={`text-xs px-3 py-2 rounded-lg border text-left transition ${
                data.includes(skill)
                  ? 'bg-purple-50 border-purple-300 text-purple-700 cursor-not-allowed'
                  : 'bg-white border-gray-200 text-gray-700 hover:border-purple-400 hover:bg-purple-50'
              }`}
              onClick={() => addQuickSkill(skill)}
              disabled={data.includes(skill)}
            >
              {skill}
              {data.includes(skill) && <span className='ml-1'>✓</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsForm;
