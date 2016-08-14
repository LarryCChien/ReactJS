import React from 'react';

export default class AddTodoForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todoText: "QQ"
		};

		// 在ES6中，沒有自動綁定(Autobinding)this的功能，所以必須用bind自己綁定(this)
		// 而且不建議在render使用該function時再綁定
		this.handleTodoChange = this.handleTodoChange.bind(this);
		this.handleAddTodoItem = this.handleAddTodoItem.bind(this);
	}
    handleTodoChange(e) {
        this.setState({
			todoText: e.target.value
		});
    }
    handleAddTodoItem(e) {
        // console.log(this.state.todoText);
        // 如何將資料新增到TodoItems中?
		// 呼叫以props傳進來的addItem
		this.props.addItem(this.state.todoText);
    }
    render() {
		// 如上面所述，在這裡才使用onChange={this.handleTodoChange.bind(this)}
		// 和onClick={this.handleAddTodoItem.bind(this)}並不是好的寫法，
		// 因為每次被執行都是返回一個新的函數引用
		// 20160813更新
		// bind(this)的寫法也可以用箭頭函數(會綁定當前範圍的this引用)
		// onChange={this.handleTodoChange.bind(this)}/>
		// onChange={e=>this.handleTodoChange(e)}/>
        return (
            <div className="block__div--addTodo">
                <input type="text"
                    value={this.state.todoText}
                    onChange={this.handleTodoChange}/>
                <button
                    onClick={this.handleAddTodoItem}>Add Todo Item</button>
            </div>
        );
    }
}