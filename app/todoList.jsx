import React from 'react';
import TodoItems from './todoItems.jsx';
import AddTodoForm from './addTodoForm.jsx';

export default class TodoList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todoItems: 
                [{ id: 1, data: "Item 01", checked: true },
                { id: 2, data: "Item 02", checked: false }],
			lastChildId: 2
		};

		// 在ES6中，沒有自動綁定(Autobinding)this的功能，所以必須用bind自己綁定(this)
		// 而且不建議在render使用該function時再綁定
		this.handleAddTodoItem = this.handleAddTodoItem.bind(this);
		this.removeTodoItem = this.removeTodoItem.bind(this);
	}
    handleAddTodoItem(todoText) {
        var items = this.state.todoItems;
		var lastChildId = this.state.lastChildId;
        items.push({
            id: lastChildId + 1,
            data: todoText,
			checked: false
        });
        this.setState({todoItems: items, lastChildId: lastChildId + 1});
    }
	removeTodoItem(todoId) {
		var items = this.state.todoItems;
		var newTodoItems = [];
		items.filter(function (item) {
			if (item.id != todoId)
				newTodoItems.push(item);
		});
		this.setState({todoItems: newTodoItems});
	}
	render() {
		// 因為是用jsx的語法回傳值,所以這裡的return一定要加上小括弧()
		return ( 
			<div className="todoList">
				<h1>我是一個TodoList容器</h1>
				<h2>我組合了TodoItems以及AddTodoForm兩個元件</h2>
				<TodoItems items={this.state.todoItems} removeItem={this.removeTodoItem}/>
				<AddTodoForm addItem={this.handleAddTodoItem}/>
			</div>
		);
	}
}