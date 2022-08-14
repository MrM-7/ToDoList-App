import React, { useState } from "react";
import ToDoList from "./ToDoList";
import './index.css';

const App = ()=>{

  const[item, changeItem] = useState();
  const[Items, setItems]  = useState([]);
  
  const inputEvent = (event)=>{
    changeItem(event.target.value);
  }

  const onSubmit = ()=>{
    setItems((preVal) => {
      return [...preVal, item];
    });

    changeItem('');
  }

  const deleteItem = (id)=>{

    setItems((preVal)=>{
      return preVal.filter((arrEle,index)=>{
        return index !==id;
      });
    })
  }
 
  return(
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add a Item" onChange={inputEvent} value={item}/>
          <button onClick={onSubmit}> + </button>

          <ol>

            {Items.map((list, index)=>{
              return <ToDoList 
                key = {index}
                listItem={list}
                id = {index}
                onSelect={deleteItem}
              />;
            })}
            
          </ol>
        </div>
      </div>
    </>
  )
}

export default App;