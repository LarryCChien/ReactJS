import React from 'react';
// 20160814 因為父層todoItems.jsx有引用todoItems.scss的關係，所以將todoItem.scss註解並刪除
// import '../style/todoItem.scss';
// var css = require("!raw!sass!./css/todoItem.scss");

export default class TodoItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = this.props.todoItem;

		this.handleCheckTodoItem = this.handleCheckTodoItem.bind(this);
		this.handleItemInputShow = this.handleItemInputShow.bind(this);
		this.handleEditTodoItem = this.handleEditTodoItem.bind(this);
		this.handleRemoveTodoItem = this.handleRemoveTodoItem.bind(this);
	}
	handleCheckTodoItem(e) {
		this.props.checkItem(this.state.id);
	}
	handleItemInputShow(e) {
		this.props.showTextInput(this.state.id);
	}
	handleEditTodoItem(e) {
		this.props.editItem(this.state.id, e.target.value);
	}
	handleRemoveTodoItem(e) {
		// console.log(this.state.id)
		this.props.removeItem(this.state.id);
	}
	render() {
		// ***
		// console.log(this.props.key)
		// return (
			// <li key={this.props.key} id={this.props.todoItem.data}>{this.props.todoItem.data}</li>
		// );
		// this.props.todoItemkey = this.props.todoItemkey * 3
		var labelClass = (this.state.itemInputShow) ? "item__label defaultHide" : "item__label";
		var inputClass = (this.state.itemInputShow) ? "item__input--text" 
			: "item__input--text defaultHide";
		return (
			<li className="item__li" key={this.state.id}>
				{/*<button className="item_button--check" onClick={this.handleCheckTodoItem}>
					{this.state.checked ? "click to uncheck" : "click to check"}
				</button>*/}
				<input type="checkbox" name="itemCheckbox" id={this.state.id}
					className="item__input--checkbox" 
					onClick={this.handleCheckTodoItem} checked={this.state.checked}/>&nbsp;
				<label className={labelClass} htmlFor={"input_" + this.state.id} 
					onClick={this.handleItemInputShow}>
					{this.state.data}
				</label>&nbsp;
				<input type="text" className={inputClass} onBlur={this.handleEditTodoItem} 
					id={"input_" + this.state.id} defaultValue={this.state.data} />
				<button className="item__button--delete" onClick={this.handleRemoveTodoItem} 
					disabled={this.state.checked}>
					{this.state.checked ? "已完成,不可刪除" : "點擊刪除"}
				</button>
			</li>
		);
	}
}