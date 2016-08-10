import React from 'react';
import '../style/todoItem.scss';
// var css = require("!raw!sass!./css/todoItem.scss");

export default class TodoItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = this.props.todoItem;

		this.handleCheckTodoItem = this.handleCheckTodoItem.bind(this);
		this.removeTodoItem = this.removeTodoItem.bind(this);
	}
	handleCheckTodoItem(e) {
		this.setState({
			checked: !this.state.checked
		})
	}
	removeTodoItem(e) {
		console.log(this.state.id)
		this.props.removeItem(this.state.id);
	}
	render() {
		// ***
		// console.log(this.props.key)
		// return (
			// <li key={this.props.key} id={this.props.children}>{this.props.children}</li>
		// );
		// this.props.todoItemkey = this.props.todoItemkey * 3
		var chk = (this.state.checked) ? "click to uncheck" : "click to check"
		return (
			<li className="item_li" key={this.props.todoItem.id} id={this.props.todoItem.id}>
				<button className="item_button--check" onClick={this.handleCheckTodoItem}>
					{chk}
				</button>
				&nbsp;{this.props.children}&nbsp;
				<button className="item_button--delete" onClick={this.removeTodoItem}>
					click to delete
				</button>
			</li>
		);
	}
}