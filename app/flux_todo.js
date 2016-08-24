import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './flux/components/TodoApp.react';

main();

function main() {
	ReactDOM.render(
	<div>
		<TodoApp />
	</div>, document.getElementById('example'));
}