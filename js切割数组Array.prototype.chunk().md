#js切割数组Array.prototype.chunk()

为了方便的做前端的分页，实现了数组切割功能

```javascript
Array.prototype.chunk = function(n){
    for(var i = 0, arr = [], l = ~~this.length / n; temp.length < l; arr[i++] = this.splice(0, n));
    return arr;
}
```

***

但是这个方法对修改了原数组,增加一个判断,第二参数值默认为true，值为false时才对原数组进行操作

```javascript
Array.prototype.chunk = function(n,m=true){
	var clone = [], arr = [];
	//m ? clone = JSON.parse(JSON.stringify(this)) : clone = this;
	m ? clone = this.concat() : clone = this;
    for(var i = 0, l = clone.length / n; arr.length < l; arr[i++] = clone.splice(0, n));
    return arr;
}
var arr = '这是一个测试的用例测试'.split('');
var item = arr.chunk(7);
console.dir(arr);
console.dir(item);
```

