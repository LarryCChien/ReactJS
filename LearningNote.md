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

##20160807
addTodoForm.jsx現在跟todoList.jsx串在一起了，透過傳props的方式(詳見在todoList.jsx的addItem)，
將todoList.jsx的handleAddTodoItem函式傳入addTodoForm.jsx，並藉此更新todoList.jsx的state。

##20160809
import scss檔出現問題"cannot find module scss",將npm install sass-loader --save-dev後已可正常載入。
用import '../style/XXX.scss';的方式即可，不需要寫成import css from '../style/XXX.scss';。
將刪除和打勾的button加至todoItem的Component中。

##20160810
將打勾的button功能加至todoItems.jsx及todoItem.jsx，並依照打勾與否顯示不同的click文字。
將刪除的button功能加至todoList.jsx、todoItems.jsx、todoItem.jsx中，並將該item從todoList的state中刪除。
為了避免在刪除item之後新增item時，會有id重複造成混淆，現在新增的item的id是取id最大值+1。

##20160813
閱讀ES5及ES6的寫法對照表
如果要設定預設屬性及類型，ES5和ES6寫法的差異可以到[寫法對照表](http://bbs.reactnative.cn/topic/15/react-react-native-%E7%9A%84es5-es6%E5%86%99%E6%B3%95%E5%AF%B9%E7%85%A7%E8%A1%A8)搜尋關鍵字"getDefaultProps"。
關於ES6有一名為[箭頭函數](http://es6.ruanyifeng.com/#docs/function#箭头函数)的用法。並將todoList.jsx裡，removeTodoItem函數裡的items.filter改成箭頭函數的寫法。todoItems.jsx裡的displayItems也改成箭頭函數的寫法。

##20160814
將todoItem.scss移除，新增todoItems.scss並於todoItems.jsx中引用，且將該scss檔的class命名符合BEM的命名原則
[參考資料：BEM思想之徹底弄清BEM語法](http://www.w3cplus.com/css/mindbemding-getting-your-head-round-bem-syntax.html)。
作業：切換item裡的label和輸入的input(自己練習寫，之後可以參考[react-edit-inline](https://www.npmjs.com/package/react-edit-inline))
目前問題：1.點擊label之後不能focus input；2.input不能修改。

##20160815
20160814的問題解法：1.在label使用htmlFor指至input；2.input的value改為defaultValue。
在todoItem.jsx的處理函數，不應該在子類別修改，應該要在父類別修改其state，讓react自行逐步往下修改對應的component。
作業：甚麼是defaultValue

##20160816 & 20160817
了解Flux是甚麼，試著將Flux的概念加到現行的程式碼中

##20160818
作業：在新增todoList時加上動畫

##20160822
引用flux和object-assign兩個package，其中object-assign是為了要把不同的物件合併在一起(在Store中會用到)。
關於flux的相關範例，會用到的package有:flux、object-assign、react。

##20160823
將[教學](https://dotblogs.com.tw/lapland/2015/07/15/151862)的程式碼轉為ES6寫法加入至專案中，目前app\flux\stores\TodoStore.js和app\flux\dispatcher\AppDispatcher.js轉換會有錯誤，
例如：Uncaught TypeError: _AppDispatcher2.default.register is not a function

##20160824
flux的教學&練習暫停，先去了解ES6，不然範例都是用ES5的寫法，要自己學著轉換成ES6目前還有難度。但ES6會是以後的規格，所以先從ES6看起。
(而且`20160823`的教學程式碼，直接複製貼上仍有錯"React.findDOMNode is not a function")

##20160825
在ES6的Class中，[使用私有方法的方式](http://es6.ruanyifeng.com/#docs/class#私有方法)。
將flux的教學範例改成用ES6的寫法(但是ES6的文件沒有看完，僅看了Class的一部分)，
`20160824`的錯誤係由於findDOMNode該function已經移至React-dom裡，所以多引用該檔案即可正常運作。
目前教學範例中的TodoStore及TodoAction引用感覺不太正確(因為用到了prototype來使用該Class內的function)，需要再看一下是不是應該改用其他的方式。

##20160827
承`20160825`，用prototype是目前唯一解。若使用var TodoStore = new TodoStore()的方式，
可以將prototype的字眼移除，但在觸發TodoStore.emitChange()時會沒辦法正常觸發
(原本是return true，改用var的話會變成return false)

##20160829
Github和Trello在編寫文字的時候有參考[Markdown](http://markdown.tw/)的格式，所以在寫的時候有些標記方式是可以互通的。
在ES6的規格中，因為var會將該變數的層級拉到最上層(例如在var一個變數AA之前，AA是undefined；但是用let則會說此為錯誤)，並不符合變數「先宣告後使用」的原則，所以用let替代var，而全域常數則用const替代var。
此外全域常數用const還可以讓閱讀程式碼的人第一眼就知道其為「常數」，進而意會到不應該修改其值。[參考資料](http://es6.ruanyifeng.com/#docs/style#块级作用域)
將flux的範例檔中所有的var改為應對的const跟let。

##20160830
將checkbox打勾與否的功能新增至flux的範例檔，但增加該部分的程式碼之後，在初始化以及新增item時，均會觸發修改check的函式，且會在新增時造成無窮迴圈。
作業：為什麼在初始化以及新增item時會觸發修改各item的checked屬性的function

##20160901
造成`20160830`無窮迴圈的原因是：TodoAppItem.jsx裡的`onClick={this.handleCheckTodo(this.props.item.id)}`應該改為`onClick={this.handleCheckTodo}`，這樣才不會在render時就將id傳入並執行該函式。