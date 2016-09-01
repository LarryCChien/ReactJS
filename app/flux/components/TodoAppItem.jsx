import React from 'react';

export default class TodoAppItem extends React.Component {
	constructor(props) {
		super(props);
		
		this.handleCheckTodo = this.handleCheckTodo.bind(this);
		this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
	}
	handleCheckTodo(e) {
		this.props.handleCheckTodo(this.props.item.id);
	}
	handleRemoveTodo(e) {
		this.props.handleRemoveTodo(this.props.item.id);
	}
	render() {
		let label_css = (this.props.item.checked) ? "item__label delete_line" : "item__label";
		let button_css = (this.props.item.checked) ? "item__button--delete delete_line" 
			: "item__button--delete";
		return (
			<li className="item__li" key={this.props.item.id}>
				<input type="checkbox" name="itemCheckbox" id={"input_" + this.props.item.id} 
					onClick={this.handleCheckTodo} 
					className="item__input--checkbox" checked={this.props.item.checked}/>&nbsp;
				<label className={label_css} htmlFor={"input_" + this.props.item.id} >
					{this.props.item.text}
				</label>&nbsp;
				<button className={button_css} disabled={this.props.item.checked} 
					onClick={this.handleRemoveTodo} >
					{this.props.item.checked ? "已完成,不可刪除" : "點擊刪除"}
				</button>
			</li>
		);
	}
}