import React from 'react';
import ReactDOM from 'react-dom';
import TodoAppList from './TodoAppList.react.jsx';
import TodoAppLength from './TodoAppLength.jsx';
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
			todoItems: TodoStore.getTodoItems(),
			todoItemLength: TodoStore.getTodoLength()
		};
		this.componentDidMount = this.componentDidMount.bind(this);
		this.componentWillUnmount = this.componentWillUnmount.bind(this);
		this.changeHandler = this.changeHandler.bind(this);
		this.handleAddTodo = this.handleAddTodo.bind(this);
		this.handleCheckTodo = this.handleCheckTodo.bind(this);
		this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
	}
	componentDidMount() {
		TodoStore.addChangeListener(this.changeHandler);
	}
	componentWillUnmount() {
		TodoStore.removeChangerListener(this.changeHandler);
	}
	changeHandler() {
		this.setState({
			todoItems:TodoStore.getTodoItems(),
			todoItemLength:TodoStore.getTodoLength()
		});
	}
	handleAddTodo() {
		let newTodo = ReactDOM.findDOMNode(this.refs.txtTodo).value.trim();
		TodoAction.createTodo(newTodo);
		ReactDOM.findDOMNode(this.refs.txtTodo).value = '';
	}
	handleCheckTodo(itemId) {
		TodoAction.changeTodoChecked(itemId);
	}
	handleRemoveTodo(itemId) {
		TodoAction.removeTodo(itemId);
	}
	render() {
		return(
			<div>
				<h1>Todo</h1>
				<input type='text' ref='txtTodo'/>
				<button onClick={this.handleAddTodo}>Add</button>
				<TodoAppList Items={this.state.todoItems} 
					check={this.handleCheckTodo} remove={this.handleRemoveTodo}/>
				<TodoAppLength itemLength={this.state.todoItemLength} />
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