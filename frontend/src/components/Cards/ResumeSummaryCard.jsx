import React from 'react'
import { LuFileText, LuEllipsisVertical } from 'react-icons/lu';

const ResumeSummaryCard = ({ imgUrl, title, lastUpdated, onSelect}) => {
  return (
    <div className='h-[300px] flex flex-col bg-white rounded-lg border border-gray-200 hover:border-purple-400 hover:shadow-lg overflow-hidden cursor-pointer transition-all group' 
    onClick={onSelect}>
      {/* Thumbnail Preview */}
      <div className='flex-1 bg-gray-50 p-4 flex items-center justify-center'>
        {imgUrl ? (
          <img 
          src={imgUrl}
          alt={title}
          className='w-full h-full object-cover rounded'
          />
        ) : (
          <div className='flex flex-col items-center justify-center h-full text-gray-400'>
            <LuFileText className='text-6xl mb-2' />
            <p className='text-xs'>No Preview</p>
          </div>
        )}
      </div>

      {/* Card Footer */}
      <div className='bg-white border-t border-gray-100 px-4 py-3 group-hover:bg-purple-50 transition-colors'>
        <div className='flex items-start justify-between'>
          <div className='flex-1 min-w-0'>
            <h5 className='text-sm font-semibold text-gray-900 truncate mb-1'>{title}</h5>
            <p className='text-xs text-gray-500'>Updated {lastUpdated}</p>
          </div>
          <button 
            className='ml-2 p-1 hover:bg-purple-100 rounded-full transition'
            onClick={(e) => {
              e.stopPropagation();
              // Add menu functionality later
            }}
          >
            <LuEllipsisVertical className='text-gray-400 hover:text-purple-600' />
          </button>
        </div>
      </div>

    </div>
  )
}

export default ResumeSummaryCard