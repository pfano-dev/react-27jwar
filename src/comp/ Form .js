import React from "react";
import "./style.css";
import{v4 as uuidv4} from "uuid";



  const Form=({input, setInput, todos, setTodos})=>{

const onInputChange=(event)=>{
setInput(event.target.value);
};
const onFormSubmit=(event)=>{

  event.preventDefault();
  setTodos([...todos, {id:uuidv4(), title: input,completed:false}]);
  setInput("");
};

  return (
    
    <div className='todo'>

<form onSubmit={onFormSubmit}>
<input  style={{  marginLeft:'100px',marginTop:'50px',width:'230px', height:"30px" }} type="text" placeholder="enter a todo" className="task-input" value={input} required onChange={onInputChange } />

  <button style={{ backgroundColor:'#00e676', height:"30px",width:'60px',color:"white", borderStyle:"none" }} className="button-add" type="submit">Add</button>
</form>
    </div>
  );
};

export default Form;
