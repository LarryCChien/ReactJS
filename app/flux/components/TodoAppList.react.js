import React from 'react';
// var React = require("react");

export default class Todolist extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let itemElement = (inTodoText,index) => (
			<li className="item__li" key={index}>
				<input type="checkbox" name="itemCheckbox" id={"input_" + index}
					className="item__input--checkbox" />&nbsp;
				<label  className="item__label" htmlFor={"input_" + index} >
					{inTodoText}
				</label>&nbsp;
				<button className="item__button--delete">
					{"點擊刪除"}
				</button>
			</li>
		);
		
		return(
			<ul>
				{this.props.Items.map(itemElement)}
			</ul>
		);
	}
}
// var Todolist = React.createClass({
	// render: function(){
		// function itemElement(inTodoText,index){
			// return <li key={index}>{inTodoText}</li>
		// };
		// return(<ul>{this.props.Items.map(itemElement)}</ul>);
	// }
// });

// module.exports = Todolist;