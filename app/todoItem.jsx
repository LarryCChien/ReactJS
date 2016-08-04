import React from 'react';

export default class TodoItem extends React.Component {
	render() {
		// ***
		// return (
			// <li key={this.props.key}>{this.props.children}</li>
		// );
		return (
			<li key={this.props.todoItemkey}>{this.props.children}</li>
		);
	}
}