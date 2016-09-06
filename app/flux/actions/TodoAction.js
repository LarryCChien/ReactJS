import AppDispatcher from '../dispatcher/AppDispatcher';
// var AppDispatcher = require("../dispatcher/AppDispatcher");

class _TodoAction {
	constructor(props) {
		// super(props);
		
		this.createTodo = this.createTodo.bind(this);
		this.changeTodoChecked = this.changeTodoChecked.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
	}
	createTodo(inTodoText) {
		AppDispatcher.dispatch({
			actionType: "CreateTodo", //呼叫在TodoStore註冊(register)好的函式
			text: inTodoText
		});
	}
	changeTodoChecked(itemId) {
		AppDispatcher.dispatch({
			actionType: "ChangeTodoChecked", //呼叫在TodoStore註冊(register)好的函式
			id: itemId
		});
	}
	removeTodo(itemId) {
		AppDispatcher.dispatch({
			actionType: "RemoveTodo", //呼叫在TodoStore註冊(register)好的函式
			id: itemId
		});
	}
}

let TodoAction = new _TodoAction();
export default TodoAction
// var TodoAction = {
	// createTodo: function(inTodoText){
		// AppDispatcher.dispatch({
			// actionType: "CreateTodo",
			// text: inTodoText
		// });
	// }
// };

// module.exports = TodoAction;