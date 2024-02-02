
import { useState } from "react";
import "./expanseForm.css"

const ExpanseForm=(props)=>{
   let [enteredTitle , setEnteredtitle]=useState("")
   let [enteredDate , setEnteredDate]=useState("")
   let [enteredPrice , setEnteredPrice]=useState("")

   let titleChangeHandler=(event)=>{
      setEnteredtitle(event.target.value);
   }
   let dateChangeHandler=(event)=>{
      setEnteredDate(event.target.value)
   }
   let priceChangeHandler=(event)=>{
      setEnteredPrice(event.target.value)
   }
   let submitHandler=(event)=>{
      event.preventDefault();
      const expanseData={
         title:enteredTitle,
         date:new Date(enteredDate),
         price:enteredPrice
      }
     props.onSaveExpanseData(expanseData);
      setEnteredtitle("");
      setEnteredDate("");
      setEnteredPrice("");
   }
   
   return(
      <div className="expanseForm">
         <form onSubmit={submitHandler}>
            <div>
               <div>
                  <label>Title</label>
                  <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
               </div>
               <div>
                  <label>Date</label>
                  <input type="date" value={enteredDate} onChange={dateChangeHandler}/>
               </div>
               <div>
                  <label>Price</label>
                  <input type="number" value={enteredPrice} onChange={priceChangeHandler}/>
               </div>
            </div>
            <div>
               <button type="submit">Add Expanse</button>
            </div>
         </form>
      </div>
   );
}
export default ExpanseForm;