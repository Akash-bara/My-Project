import React, { useState } from 'react';
import './CSS/pro1.css';

function ToDoList(){
    const [tasks,setTask]=useState([]);
        const [newTask,setNewTask]=useState();

    function HandleItem(e){
setNewTask(e.target.value);

    };
      function addItem(){
        if(newTask.trim() !== ""){
             setTask(t=>[...t,newTask]);
        setNewTask("");
        }
       
      };
        function deleteItem(index){
            const updateTask=tasks.filter((_, i) => i !== index);
            setTask(updateTask);

        };
          function moveUpItem(index){
            if (index > 0){
            const updatedTask=[...tasks];
        [updatedTask[index],updatedTask[index-1]]=
        [updatedTask[index-1],updatedTask[index]];
    setTask(updatedTask);}

          };
          function moveDownItem(index){
               if (index < tasks.length - 1){
            const updatedTask=[...tasks];
        [updatedTask[index],updatedTask[index+1]]=
        [updatedTask[index+1],updatedTask[index]];
    setTask(updatedTask);}
          };
    return(
        <>
       <div className="todolist">
        <h1>
            To Do List
        </h1>
       
        <div >
 <input 
        type="text"
        placeholder='Enter the text..'
        onChange={HandleItem}
        value={newTask}
        />
        <button className ="add" onClick={addItem}>ADD</button>
        <ol>
            {
                tasks.map((task,index)=>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete"
                    onClick={() => deleteItem(index)}>Delete</button>
                    <button onClick={() => moveUpItem(index)}
                     className="moveup">⏫</button>
                    <button onClick={() => moveDownItem(index)} className="movedown">⏬</button>
                </li>)
            }
        </ol>
        </div>
       </div>
        </>
    );
}
export default ToDoList;