import React from 'react';
import TodoItem from './todoItem.jsx';
//20160814 因為ul也有css要使用的關係，所以將todoItem.scss刪除，並將其內容移至todoItems.scss
import '../style/todoItems.scss';

export default class TodoItems extends React.Component {
	render() {
		// 20160813 原本是用that = this，然後在return時使用that.props.removeItem
		// 現在則改為直接宣告變數給this.props.removeItem這個function使用
		var removeItem = this.props.removeItem;
		// 20160813 將filter的寫法改成ES6的寫法
		// var displayItems = this.props.items.map(function(item) {
			// // return (<li key={item.id}>{item.data}</li>);
			// // return (<TodoItem key={item.id}>{item.data}</TodoItem>); // ***
			// return (<TodoItem key={item.id} todoItem={item} removeItem={removeItem}>
				// {item.data}</TodoItem>);
		// });
		
		var displayItems = this.props.items.map((item) => (
			<TodoItem key={item.id} todoItem={item} removeItem={removeItem}>
				{item.data}</TodoItem>)
			);
		return (
			<div>
				<ul className="item__ul">
					{displayItems}
				</ul>
			</div>
		);
	}
}