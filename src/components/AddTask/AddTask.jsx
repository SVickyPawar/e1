import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete data-cy key value pair
  const[todo,setTodo]=useState([]);
  const[text,setText]=useState('')
  const handleChange=(e)=>{
    setText(e.target.value);
  }

  const handleAdd=()=>{
    console.log(text);
    setTodo([...todo, {id:Date.now(),text:text,done:false,count:0}])
    setText('');
  }
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" onChange={handleChange} value={text}/>
      <button data-cy="add-task-button"
      onClick={handleAdd}
      >+</button>
      <div>
          {todo.map((elem)=>(
            <div id={elem.id}>
            <h2>{elem.text}</h2>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AddTask;