import AppDispatcher from '../dispatcher/AppDispatcher';
// var AppDispatcher = require("../dispatcher/AppDispatcher");

export default class TodoAction extends React.Component {
	constructor(props) {
		super(props);
		
		this.createTodo = this.createTodo.bind(this);
	}
	createTodo(inTodoText) {
		AppDispatcher.dispatch({
			actionType: "CreateTodo",
			text: inTodoText
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