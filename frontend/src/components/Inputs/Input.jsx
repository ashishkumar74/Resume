import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'


const Input = ({ value, onChange, label, type, placeholder }) => {

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div>
            <label className="text-[13px] text-slate-800">{label}</label>
            <div className='input-box'>
                <input type={
                    type === 'password' ? (showPassword ? 'text' : 'password') : type
                }
                    placeholder={placeholder}
                    value={value}
                    className="w-full outline-none bg-transparent"
                    onChange={(e) => onChange(e)}
                />
                {type === 'password' && (
                    <>
                        {showPassword ? (
                            <FaRegEyeSlash size={22} className='text-primary cursor-pointer' onClick={toggleShowPassword} />
                        ) : (
                            <FaRegEye size={22} className='text-slate-400 cursor-pointer' onClick={toggleShowPassword} />
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default Input