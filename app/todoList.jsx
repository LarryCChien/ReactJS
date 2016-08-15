import React from 'react';
import TodoItems from './todoItems.jsx';
import AddTodoForm from './addTodoForm.jsx';

export default class TodoList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todoItems: 
                [{ id: 1, data: "Item 01", checked: true,itemInputShow: false },
                { id: 2, data: "Item 02", checked: false,itemInputShow: false }],
			lastChildId: 2
		};

		// 在ES6中，沒有自動綁定(Autobinding)this的功能，所以必須用bind自己綁定(this)
		// 而且不建議在render使用該function時再綁定
		// this.handleAddTodoItem = this.handleAddTodoItem.bind(this);
		this.checkTodoItem = this.checkTodoItem.bind(this);
		this.itemTextInputShow = this.itemTextInputShow.bind(this);
		this.editTodoItem = this.editTodoItem.bind(this);
		this.removeTodoItem = this.removeTodoItem.bind(this);
	}
	/* addItem */
    handleAddTodoItem(todoText) {
        var items = this.state.todoItems;
		var lastChildId = this.state.lastChildId;
        items.push({
            id: lastChildId + 1,
            data: todoText,
			checked: false,
			itemInputShow: false
        });
        this.setState({todoItems: items, lastChildId: lastChildId + 1});
    }
	/* todoItem */
	checkTodoItem(todoItemId) {
		var items = this.state.todoItems;
		var newTodoItems = [];
		items.filter((item) => {
			if (item.id == todoItemId)
				item.checked = !item.checked;
			newTodoItems.push(item);
		});
		this.setState({todoItems: newTodoItems});
	}
	itemTextInputShow(todoItemId) {
		var items = this.state.todoItems;
		var newTodoItems = [];
		items.filter((item) => {
			if (item.id == todoItemId)
				item.itemInputShow = !item.itemInputShow;
			newTodoItems.push(item);
		});
		this.setState({todoItems: newTodoItems});
	}
	editTodoItem(todoItemId, todoItemValue) {
		var items = this.state.todoItems;
		var newTodoItems = [];
		items.filter((item) => {
			if (item.id == todoItemId)
				item.data = todoItemValue;
			newTodoItems.push(item);
		});
		this.setState({todoItems: newTodoItems});
		this.itemTextInputShow(todoItemId);
	}
	/* removeItem */
	removeTodoItem(todoId) {
		var items = this.state.todoItems;
		var newTodoItems = [];
		// 20160813 將filter的寫法改成ES6的寫法
		// items.filter(function (item) {
			// if (item.id != todoId)
				// newTodoItems.push(item);
		// });
		items.filter((item) => {
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
				<AddTodoForm addItem={this.handleAddTodoItem.bind(this)}/>
				<TodoItems items={this.state.todoItems} 
					checkItem={this.checkTodoItem} 
					showTextInput={this.itemTextInputShow} 
					editItem={this.editTodoItem} 
					removeItem={this.removeTodoItem}/>
			</div>
		);
	}
}