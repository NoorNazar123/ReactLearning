import React, { useId } from 'react'

const Select = ({
   options,
   label,
   className = "",
   ...Props
}, ref) => {
   const id = useId();
  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className=''></label>}
      <select
       ref={ref}
             {...Props}
             id={id}
             className={`px-3 py-2 rounded-lg outline-none bg-white text-black focus:bg-gray-50
             duration-200 border-gray-200 w-full  ${className}`}
      >
         {options?.map((option)=>{
            <options key={option} value={option} >
                {option}
            </options>
         })}
      </select>
    </div>
  )
}

export default React.forwardRef(Select)
