import React, { useState , useEffect} from "react";
import TodoElement from "./TodoElement";

//create your first component
const ToDo = () => {
	const [todo, setTodo] = useState([])

		useEffect(() =>
		fetch('https://playground.4geeks.com/apis/fake/todos/user/zeckrox')
		.then(function(response) {
		   if (!response.ok) {
		   throw Error(response.statusText);
		}
		// Read the response as json.
		   return response.json();
		})
		 .then(function(responseAsJson) {
		// Do stuff with the JSON
		   setTodo(responseAsJson);
		}) , []);

	const deleteTodo = (elm) => {
		if(todo.length === 1){alert("Must leave at least one task")}
		if(todo.length > 1){
		fetch('https://playground.4geeks.com/apis/fake/todos/user/zeckrox', {
				method: "PUT",
				body: JSON.stringify(todo.filter( itm => itm.id != elm.id )),
				headers:{'Content-Type': 'application/json'}})
				.then(res => {
					if (!res.ok) throw Error(res.statusText);
					return res.json();
				})
				.then(data =>{
					setTodo(todo.filter( itm => itm.id != elm.id ))
				})
			}}

	function insertTodo (text){
		if (text.key ==="Enter"){
		
			fetch('https://playground.4geeks.com/apis/fake/todos/user/zeckrox', {
				method: "PUT",
				body: JSON.stringify([...todo, {label: text.target.value, id:text.target.value + todo.length, done:false}]),
				headers:{'Content-Type': 'application/json'}})
				.then(res => {
					if (!res.ok) throw Error(res.statusText);
					return res.json();
				})
				.then(data =>{
					setTodo([...todo, {label: text.target.value, id:text.target.value + todo.length, done:false}])
					text.target.value=""
				})

		}}

	return <><h1 className="d-flex justify-content-center">To Do</h1>
	<div className="todo">
	<input  placeholder="Add ToDo" onKeyDown={(e)=>{insertTodo(e)}}></input>
	{todo.map((todo) => (<TodoElement key={todo.id} text={todo.label} click={()=>{deleteTodo(todo)}} />))}
	</div>
	</>
;}

export default ToDo;
