import React, { useState } from "react";
import ReactDOM from "react-dom";


const Test = (test) => {
	return <h2>{test.text}<i class="fa-solid fa-trash"></i></h2>
}
//create your first component
const Home = () => {
	const [todo, setTodo] = useState(["hola"])

	function constructor (value){
	setTodo([...todo, value])
	}
	

	return <><h1>To Do</h1>
	<div className="todo">
	<input onKeyDown={(e)=>{e.key === "Enter"? constructor(e.target.value) :''}}></input>
	{todo.map((text) => (
      <Test text={text}/>
        ))}
	</div>
	</>
;}

export default Home;
