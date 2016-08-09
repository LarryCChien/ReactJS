import React from 'react';
import '../style/todoItem.scss';
// var css = require("!raw!sass!./css/todoItem.scss");

export default class TodoItem extends React.Component {
	render() {
		// ***
		// console.log(this.props.key)
		// return (
			// <li key={this.props.key} id={this.props.children}>{this.props.children}</li>
		// );
		// this.props.todoItemkey = this.props.todoItemkey * 3
		return (
			<li className="item_li" key={this.props.todoItemkey} id={this.props.id}>
				<button className="item_button--check">click to checked</button>
				&nbsp;{this.props.children}&nbsp;
				<button className="item_button--delete">click to delete</button>
			</li>
		);
	}
}