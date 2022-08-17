import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const ToDoList = (props)=>{
    return <>
        <div className="todo_style">
            {/* <i className="fa fa-times" aria-hidden="true"
                onClick={()=>{
                    props.onSelect(props.id);
                }} */}

            <DeleteIcon style={{
                color:'#FF0000',
                marginRight: 15,
                marginLeft:5,
                cursor: 'pointer'
            }} onClick={()=>{
                    props.onSelect(props.id);
                }}/>
            <li>{props.listItem}</li>
        </div>
    </>;
}

export default ToDoList;