import React from 'react';

export default class TodoItem extends React.Component {
	render() {
		// ***
		// console.log(this.props.key)
		// return (
			// <li key={this.props.key} id={this.props.children}>{this.props.children}</li>
		// );
		// this.props.todoItemkey = this.props.todoItemkey * 3
		return (
			<li key={this.props.todoItemkey} id={this.props.id}>
				{this.props.children}</li>
		);
	}
}