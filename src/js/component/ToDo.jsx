import React, { useState } from "react";
import TodoElement from "./TodoElement";

//create your first component
const ToDo = () => {
	const [todo, setTodo] = useState([])

	const deleteTodo = (elm) => {
		setTodo(todo.filter( itm => itm.id != elm.id ))
	  }

	function insertTodo (text){
		if (text.key ==="Enter"){
			setTodo([...todo, {name: text.target.value, id:todo.length}])
			text.target.value=""}
	}

	return <><h1 className="d-flex justify-content-center">To Do</h1>
	<div className="todo">
	<input  placeholder="Add ToDo" onKeyDown={(e)=>{insertTodo(e)}}></input>
	{todo.map((todo) => (<TodoElement key={todo.id} text={todo.name} click={()=>{deleteTodo(todo)}} />))}
	</div>
	</>
;}

export default ToDo;
