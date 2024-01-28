import React, { useRef } from 'react'
import "./styles.css"

interface Props{
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent)=>void;
}
const InputField = ({todo,setTodo,handleAdd}:Props) => {

  const inputRef= useRef<HTMLInputElement>(null);
  return (
    <form className='input' onSubmit={(e)=>{
      handleAdd(e);
      inputRef.current?.blur();
      }}>
        <input type='input' placeholder='Enter task here' className='input_box'
        value={todo}
        ref={inputRef}
        onChange={(e)=>{setTodo(e.target.value)}}/>
        <button type='submit' className='input_submit' >GO</button>
    </form>
  )
}

export default InputField