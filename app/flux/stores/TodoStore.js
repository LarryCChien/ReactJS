import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
// import assign from 'object-assign'; //改用ES6內建的Object.assign,所以移除了object-assign

// var AppDispatcher = require("../dispatcher/AppDispatcher");
// var EventEmitter = require("events").EventEmitter;
// var assign = require("object-assign");

const CHANGE_EVENT = 'change';
//這裡不能用const宣告todoItems，如果用const的話，todoItems是不能修改的。
// let todoItems = ["Do something", "Say something"];
let todoItems = [{
		id: 1,
		text: "Do something",
		checked: true,
	},{
		id: 2,
		text: "Say something",
		checked: false,
	}];
let lastItemId = 3;
 
const createTodo = (inTodoText) => {
	todoItems.push({
		id: lastItemId++,
		text: inTodoText,
		checked: false,
	})
}
const changeTodoChecked = (todoItemId) => {
	let items = todoItems;
	let newTodoItems = [];
	items.filter((item) => {
		if (item.id == todoItemId)
			item.checked = !item.checked;
		newTodoItems.push(item);
	});
	todoItems = newTodoItems;
}
const removeTodo = (todoItemId) => {
	let items = todoItems;
	let newTodoItems = [];
	items.filter((item) => {
		if (item.id != todoItemId)
			newTodoItems.push(item);
	});
	todoItems = newTodoItems;
}

export default class TodoStore {
	constructor() {
		
		this.getTodoItems = this.getTodoItems.bind(this);
		this.emitChange = this.emitChange.bind(this);
		this.addChangeListener = this.addChangeListener.bind(this);
		this.removeChangeListener = this.removeChangeListener.bind(this);
	}
	getTodoItems() {
		return todoItems;
	}
	emitChange() {
		this.emit(CHANGE_EVENT);
	}
	addChangeListener(callback) {
		this.on(CHANGE_EVENT,callback);
	}
	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT,callback);
	}
}

Object.assign(TodoStore.prototype, EventEmitter.prototype);

// var TodoStore = assign({},EventEmitter.prototype,{
	// getTodoItems: function(){
		// return todoItems;
	// },
	// emitChange: function(){
		// this.emit(CHANGE_EVENT);
	// },
	// addChangeListener: function(callback){
		// this.on(CHANGE_EVENT,callback);
	// },
	// removeChangeListener: function(callback){
		// this.removeListener(CHANGE_EVENT,callback);
	// }
// });

AppDispatcher.register((action) => {
	switch(action.actionType){
		case "CreateTodo":
			createTodo(action.text); // 呼叫TodoStore的內部函式
			TodoStore.prototype.emitChange();
			break;
		case "ChangeTodoChecked":
			changeTodoChecked(action.id); // 呼叫TodoStore的內部函式
			TodoStore.prototype.emitChange();
			break;
		case "RemoveTodo":
			removeTodo(action.id); // 呼叫TodoStore的內部函式
			TodoStore.prototype.emitChange();
			break;
		
		default:
	}
});

// module.exports = TodoStore;