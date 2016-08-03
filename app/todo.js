// 'use strict';
// 第四、五行意思是一樣的 只是module的不同:一個是用ES6 一個是用CommonJS
// https://fakefish.github.io/react-webpack-cookbook/Requiring-files.html
// import component from './component.js'; // ES6
// var component = require('./component.js'); // CommonJS
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './todoList.jsx';

main();

function main() {
	ReactDOM.render(
	<div>
		<TodoList />
	</div>, document.getElementById('content'));
}