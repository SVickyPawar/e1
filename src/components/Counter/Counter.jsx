import React from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
let [count,setCount] = React.useState(0);
  // NOTE: do not delete `data-cy` key value pair
  const handleadd=()=>{
      setCount(count+1)
  }
  const handleMinus=()=>{
    if(count==1){
      return;
    }
    setCount(count-1)
  }

  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={handleadd} >+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" onClick={handleMinus} >-</button>
    </div>
  );
};

export default Counter;
