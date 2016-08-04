import React from 'react';
import TodoItems from './todoItems.jsx';
import AddTodoForm from './addTodoForm.jsx';

export default class TodoList extends React.Component {
	render() {
		var todoItemsArray = [{
			id: 1,
			data: "Item 01"
		},{
			id: 2,
			data: "Item 02"
		}];
		// 因為是用jsx的語法回傳值,所以這裡的return一定要加上小括弧()
		return ( 
			<div className="todoList">
				<h1>我是一個TodoList容器</h1>
				<h2>我組合了TodoItems以及AddTodoForm兩個元件</h2>
				<TodoItems items={todoItemsArray}/>
				<AddTodoForm />
			</div>
		);
	}
}