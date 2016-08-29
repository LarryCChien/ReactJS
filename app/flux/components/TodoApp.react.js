import React from 'react';
import ReactDOM from 'react-dom';
import TodoAppList from './TodoAppList.react';
import TodoStore from '../stores/TodoStore';
import TodoAction from '../actions/TodoAction';
import '../../../style/todoItems.scss';
// var React = require("react");
// var TodoAppList = require("./TodoAppList.react");
// var TodoStore = require("../stores/TodoStore");
// var TodoAction = require("../actions/TodoAction");

export default class TodoApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todoItems: TodoStore.prototype.getTodoItems()
		};
		this.componentDidMount = this.componentDidMount.bind(this);
		this.componentWillUnmount = this.componentWillUnmount.bind(this);
		this.changeHandler = this.changeHandler.bind(this);
		this.handleAddTodo = this.handleAddTodo.bind(this);
	}
	componentDidMount() {
		TodoStore.prototype.addChangeListener(this.changeHandler);
	}
	componentWillUnmount() {
		TodoStore.prototype.removeChangerListener(this.changeHandler);
	}
	changeHandler() {
		this.setState({todoItems:TodoStore.prototype.getTodoItems()});
	}
	handleAddTodo() {
		var newTodo = ReactDOM.findDOMNode(this.refs.txtTodo).value.trim();
		TodoAction.prototype.createTodo(newTodo);
		ReactDOM.findDOMNode(this.refs.txtTodo).value = '';
	}
	render() {
		return(
			<div>
				<h1>Todo</h1>
				<input type='text' ref='txtTodo'/>
				<button onClick={this.handleAddTodo}>Add</button>
				<TodoAppList Items={this.state.todoItems}/>
			</div>
		);
	}
}
// var TodoApp = React.createClass({
	// getInitialState: function(){
		// return{todoItems:TodoStore.getTodoItems()};
	// },
	// componentDidMount: function(){
		// TodoStore.addChangeListener(this.changeHandler);
	// },
	// componentWillUnmount: function(){
		// TodoStore.removeChangerListener(this.changeHandler);
	// },
	// changeHandler: function(){
		// this.setState({todoItems:TodoStore.getTodoItems()});
	// },
	// handleAddTodo: function(){
		// var newTodo = React.findDOMNode(this.refs.txtTodo).value.trim();
		// TodoAction.createTodo(newTodo);
		// React.findDOMNode(this.refs.txtTodo).value = '';
	// },
	// render: function(){
		// return(
			// <div>
				// <h1>Todo</h1>
				// <input type='text' ref='txtTodo'/>
				// <button onClick={this.handleAddTodo}>Add</button>
				// <TodoAppList Items={this.state.todoItems}/>
			// </div>
			// );
	// }
// });

// module.exports = TodoApp;