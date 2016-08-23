import React from 'react';
import {Dispatcher} from 'flux';
// var Dispatcher = require('flux').Dispatcher;

export default class AppDispatcher extends React.Component {
	render() {
		return new Dispatcher();
	}
}

// module.exports = new Dispatcher();