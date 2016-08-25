import React from 'react';
// var React = require("react");

export default class Todolist extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		var itemElement = (inTodoText,index) => (
			<li key={index}>{inTodoText}</li>
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