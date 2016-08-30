import React from 'react';

export default class TodoAppItem extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<li className="item__li" key={this.props.item.id}>
				<input type="checkbox" name="itemCheckbox" id={"input_" + this.props.item.id} 
					onClick={this.props.handleCheckTodo(this.props.item.id)} 
					className="item__input--checkbox" checked={this.props.item.checked}/>&nbsp;
				<label  className="item__label" htmlFor={"input_" + this.props.item.id} >
					{this.props.item.text}
				</label>&nbsp;
				<button className="item__button--delete"  disabled={this.props.item.checked} >
					{this.props.item.checked ? "已完成,不可刪除" : "點擊刪除"}
				</button>
			</li>
		);
	}
}