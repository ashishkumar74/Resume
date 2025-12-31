import React, { useRef } from 'react'
import { LuUser, LuUpload, LuTrash } from 'react-icons/lu'

const ProfilePhotoSelector = ({ photo, onChange }) => {
    const inputRef = useRef(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onChange(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        onChange('');
    };

    const onChooseFile = () => {
        inputRef.current.click();
    };

    return (
        <div className='flex justify-center mb-6'>
            <input
                type='file'
                accept='image/*'
                ref={inputRef}
                onChange={handleImageChange}
                className='hidden'
            />

            <div className='relative'>
                {!photo ? (
                    <div className='w-32 h-32 flex items-center justify-center bg-purple-50 rounded-full relative cursor-pointer border-2 border-dashed border-purple-300'>
                        <LuUser className='text-5xl text-purple-400' />
                        <button
                            type='button'
                            onClick={onChooseFile}
                            className='w-10 h-10 flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white rounded-full absolute -bottom-1 -right-1 cursor-pointer shadow-lg'
                        >
                            <LuUpload className='text-lg' />
                        </button>
                    </div>
                ) : (
                    <div className='relative'>
                        <img
                            src={photo}
                            alt='Profile'
                            className='w-32 h-32 object-cover rounded-full border-4 border-purple-200'
                        />
                        <button
                            type='button'
                            onClick={handleRemoveImage}
                            className='w-10 h-10 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded-full absolute -bottom-1 -right-1 cursor-pointer shadow-lg'
                        >
                            <LuTrash className='text-lg' />
                        </button>
                        <button
                            type='button'
                            onClick={onChooseFile}
                            className='w-10 h-10 flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white rounded-full absolute -top-1 -right-1 cursor-pointer shadow-lg'
                        >
                            <LuUpload className='text-lg' />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfilePhotoSelector;