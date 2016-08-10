import React from 'react';
import TodoItem from './todoItem.jsx';

export default class TodoItems extends React.Component {
	render() {
		var that = this;
		var displayItems = this.props.items.map(function(item) {
			// return (<li key={item.id}>{item.data}</li>);
			// return (<TodoItem key={item.id}>{item.data}</TodoItem>); // ***
			return (<TodoItem key={item.id} todoItem={item} removeItem={that.props.removeItem}>
				{item.data}</TodoItem>);
		});
		return (
			<div>
				<ul>
					{displayItems}
				</ul>
			</div>
		);
	}
}