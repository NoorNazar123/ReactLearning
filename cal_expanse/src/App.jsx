import CalExpanse from "./components/Expanses/calExpanse";
import NewExpanse from "./components/NewExpanses/newExpanse";
import "./App.css";
import { useState } from "react";

let dummyExpanse = [
 
 
];

function App() {
    const [expanses, setExpanses]=useState(dummyExpanse );

    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(
      response=>{
        return response.json()
      }
    ).then(
      data=>{
        // setExpanses(data)
        console.log(data);
      }
    )

  const addExpenseHandler=(addExpansedata)=>{
      const updatedExpanse=[addExpansedata, ...expanses]
      setExpanses(updatedExpanse)

  }

  return (
    
    <div>
    <NewExpanse onAddExpense={addExpenseHandler}/>
      {expanses.map((item, index) => (
        <CalExpanse
          key={index} 
          title={item.title}
          date={item.date}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default App;
