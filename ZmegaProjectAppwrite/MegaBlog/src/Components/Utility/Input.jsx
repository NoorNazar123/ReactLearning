import React, {useId} from 'react'

const Input = React.forwardRef( function Input({
   label,
   type = "text",
   className = "",
   ...Props

}, ref) {

   const id = useId();
   return (
      <div className=' w-full'>
         {
            label && <label
            className=' inline-block mb-1 pl-2'
            htmlFor={id}
            >{label}</label>
         }

         <input 
            type={type}
            className={`px-3 py-2 rounded-lg outline-none bg-white text-black focus:bg-gray-50
             duration-200 border-gray-200 w-full  ${className}`}
             ref={ref}
             {...Props}
             id={id}
         />
      </div>
   )
})
 

export default Input
