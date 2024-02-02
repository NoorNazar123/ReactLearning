import "./expanseDate.css";

function ExpanseDate(props) {
   let month = props.date.toLocaleString("en-US", { month: "short" });
   let day = props.date.toLocaleString();
   let year = props.date.getFullYear("en-US", { day: "2-digit" });

   return(
      <>
      <div className="expanse_date">
        <div>{month}</div><br/>
        <div>{day}</div><br/> 
        <div>{year}</div><br/>
      </div>

      </>
   );
   
}
export default ExpanseDate;