import React, { useState } from "react";
import ToDoList from "./ToDoList";
import Button from '@mui/material/Button';
import './index.css';
import AddIcon from '@mui/icons-material/Add';

const App = ()=>{

  const[item, changeItem] = useState('');
  const[Items, setItems]  = useState([]);
  
  const inputEvent = (event)=>{
    changeItem(event.target.value);
  }

  const onSubmit = ()=>{
    if(item === '')  alert('Add a Item');
    else{
      setItems((preVal) => {
        return [...preVal, item];
      });
  
      changeItem('');
    }
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
          <Button onClick={onSubmit} style={{
              minHeight: 40,
              width: 40,
              borderRadius: 50,
              borderColor: 'transparent',
              backgroundColor: '#8566aa',
              color: 'white',
              fontSize: 40,
              border: 'none',
              outline: 'none',
              marginLeft: 10,
              boxShadow: '5 5 15 -5 rgba(0, 0, 0, 0.3)',
              cursor: 'pointer'
          }}> <AddIcon style={{fontSize:40}}/> </Button>

          <ol>

            {Items.map((list, index)=>{
              if(list === ''){return null}
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