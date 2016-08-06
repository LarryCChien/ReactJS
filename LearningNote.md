##20160802
webpack.config.js有傳入多個entry,有參考網路上的multiple entries
目的是把練習的index.html及main.js的相關檔案與要做todoList的檔案分開，
讓index.html就是一個很簡單的React範例。(output也因應改動,加上[name]來區分)
考慮要不要將todoList另外開一資料夾或branch來放置。


##20160803
不管是用ES5的React.createClass寫法，還是ES6的React.Component寫法
return的內容如果是有用到jsx的語法(例如：<TodoItems />)，
一定一定要記得把return的值用小括弧包起來，例如：return (<TodoItems />);
[參考資料](http://bbs.reactnative.cn/topic/15/react-react-native-%E7%9A%84es5-es6%E5%86%99%E6%B3%95%E5%AF%B9%E7%85%A7%E8%A1%A8)
[參考資料2](https://toddmotto.com/react-create-class-versus-component/)

##20160804
為了避免與一般教學提到key時搞混，在todoItems.jsx中指定了todoItemkey作為key
在todoItem.jsx也可以看到this.props.todoItemkey的寫法(註解有"***"的是一開始的寫法)
這裡用todoItemkey傳入item.id，接收的todoItem.jsx則用this.props.todoItemkey接值
也可以傳入item，然後接收的todoItem.jsx改成this.props.todoItemkey.id
只是一個是傳Object(item)，一個是傳value(item.id)，不知道為什麼不傳Objectm。

##20160805
在todoItem.jsx接收到的this.props.key，經console.log()印出來之後會發現是undefined
原因是(在todoItems.jsx用來串接todoItem.jsx的)"key"這個字被視為是React的內定字，
所以在console之前，key就被React拿來用，且不允許之後被操作。
[參考資料](http://stackoverflow.com/questions/33661511/reactjs-key-undefined-when-accessed-as-a-prop)
[參考資料2](https://github.com/facebook/react/issues/2429)

##20160806
在[從TodoList範例學習React(3)-透過實作AddTodoForm學習state](https://dotblogs.com.tw/wellwind/2016/04/03/react-tutorial-7-state)中，
因為寫法是ES5的寫法，此範例是使用ES6的寫法，可以參考
[React/React Native 的ES5 ES6寫法對照表](http://bbs.reactnative.cn/topic/15/react-react-native-%E7%9A%84es5-es6%E5%86%99%E6%B3%95%E5%AF%B9%E7%85%A7%E8%A1%A8)中，
搜尋「初始化STATE的方式」，另外可參考這篇[甚麼時候要用super](http://cheng.logdown.com/posts/2016/03/26/683329)，
以及[super(props)有甚麼用](http://react-china.org/t/super-props/975/5)。以後應該考慮開著對照表寫才對。
