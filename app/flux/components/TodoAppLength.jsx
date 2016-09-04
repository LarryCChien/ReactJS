import React from 'react';

export default class TodoAppItem extends React.Component {
	constructor(props) {
		super(props);
		
		// this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
	}
	// handleRemoveTodo(e) {
		// this.props.handleRemoveTodo(this.props.item.id);
	// }
	render() {
		return (
			<h2>
				Todo共有：{this.props.itemLength.todoItemLength}件。{/*
				*/}未完成有：{this.props.itemLength.todoItemUncheckedLength}件。{/*
				*/}已完成有：{this.props.itemLength.todoItemCheckedLength}件。
			</h2>
		);
	}
}