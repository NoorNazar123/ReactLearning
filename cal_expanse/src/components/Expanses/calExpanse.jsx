import "./calExpanse.css";
import ExpanseDate from "./expanseDate";
import { useState } from "react";

function CalExpanse(props) {
  const [title, setTitle] = useState("");
  // const [newTitle, setnewTitle] = useState("");
  // let changeTitle = () => {
  //   setTitle(newTitle);
  // };

  // let updateValue = (event) => {
  //   setnewTitle(event.target.value);
  // };

  return (
    <>
    
    <div className="first_div">
      <h1>{props.title}</h1>
      <ExpanseDate date={new Date(props.date)} />
      <button>${props.price}</button>
      {/* <input type="text" value={newTitle} onChange={updateValue} />
      <button onClick={changeTitle}>Change title</button> */}
    </div>

    </>
  );
}
export default CalExpanse;
