import React from "react";
import "./newExpanse.css"
import ExpanseForm from "./expanseForm";



const NewExpanse=(props)=>{
   const saveExpanseDataHandler=(enteredExpanseData)=>{
      let expanseData={
         ...enteredExpanseData,
         id:Math.random().toString()
      }
      props.onAddExpense(expanseData)
      // console.log(expanseData);
   }
   return (
      <div className="newExpanse">
        <ExpanseForm onSaveExpanseData={saveExpanseDataHandler}/>
      </div>
   );
}

export default NewExpanse;