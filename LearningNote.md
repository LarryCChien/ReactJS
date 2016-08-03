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