import AppDispatcher from '../dispatcher/AppDispatcher';
// var AppDispatcher = require("../dispatcher/AppDispatcher");

export default class TodoAction {
	constructor(props) {
		// super(props);
		
		this.createTodo = this.createTodo.bind(this);
		this.changeTodoChecked = this.changeTodoChecked.bind(this);
	}
	createTodo(inTodoText) {
		AppDispatcher.dispatch({
			actionType: "CreateTodo", //呼叫在TodoStore註冊(register)好的函式
			text: inTodoText
		});
	}
	changeTodoChecked(itemId) {
		// console.log(itemId)
		AppDispatcher.dispatch({
			actionType: "ChangeTodoChecked", //呼叫在TodoStore註冊(register)好的函式
			id: itemId
		});
	}
}
// var TodoAction = {
	// createTodo: function(inTodoText){
		// AppDispatcher.dispatch({
			// actionType: "CreateTodo",
			// text: inTodoText
		// });
	// }
// };

// module.exports = TodoAction;