import React from 'react';
import TodoAppItem from './TodoAppItem.jsx';
// var React = require("react");

export default class Todolist extends React.Component {
	constructor(props) {
		super(props);
		
		this.handleCheckTodo = this.handleCheckTodo.bind(this);
	}
	handleCheckTodo(todoItemId) {
		console.log("todoAppList:" + todoItemId);
		this.props.check(todoItemId);
	}
	render() {
		let handleCheckTodo = this.handleCheckTodo;
		
		return(
			<ul>
				{this.props.Items.map((inTodoObj) => (
					<TodoAppItem item={inTodoObj} handleCheckTodo={handleCheckTodo} />)
				)}
			</ul>
		);
	}
}
// var Todolist = React.createClass({
	// render: function(){
		// function itemElement(inTodoText,index){
			// return <li key={index}>{inTodoText}</li>
		// };
		// return(<ul>{this.props.Items.map(itemElement)}</ul>);
	// }
// });

// module.exports = Todolist;