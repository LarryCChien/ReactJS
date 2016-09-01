import React from 'react';
import TodoAppItem from './TodoAppItem.jsx';
// var React = require("react");

export default class Todolist extends React.Component {
	constructor(props) {
		super(props);
		
		this.handleCheckTodo = this.handleCheckTodo.bind(this);
		this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
	}
	handleCheckTodo(todoItemId) {
		this.props.check(todoItemId);
	}
	handleRemoveTodo(todoItemId) {
		this.props.remove(todoItemId);
	}
	render() {
		let CheckTodo = this.handleCheckTodo;
		let RemoveTodo = this.handleRemoveTodo;
		
		return(
			<ul>
				{this.props.Items.map((inTodoObj) => (
					<TodoAppItem item={inTodoObj} handleCheckTodo={CheckTodo} 
						handleRemoveTodo={RemoveTodo} />)
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