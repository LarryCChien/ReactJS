import React from 'react';
import TodoItems from './todoItems.jsx';
import AddTodoForm from './addTodoForm.jsx';

export default class TodoList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todoItems: 
                [{ id: 1, data: "Item 01" },
                { id: 2, data: "Item 02" }]
		};

		// 在ES6中，沒有自動綁定(Autobinding)this的功能，所以必須用bind自己綁定(this)
		// 而且不建議在render使用該function時再綁定
		// this.handleTodoChange = this.handleTodoChange.bind(this);
		this.handleAddTodoItem = this.handleAddTodoItem.bind(this);
	}
    handleAddTodoItem(todoText) {
        var items = this.state.todoItems;
        items.push({
            id: items.length + 1,
            data: todoText
        });
        this.setState({todoItems: items});
    }
	render() {
		// 因為是用jsx的語法回傳值,所以這裡的return一定要加上小括弧()
		return ( 
			<div className="todoList">
				<h1>我是一個TodoList容器</h1>
				<h2>我組合了TodoItems以及AddTodoForm兩個元件</h2>
				<TodoItems items={this.state.todoItems}/>
				<AddTodoForm addItem={this.handleAddTodoItem}/>
			</div>
		);
	}
}