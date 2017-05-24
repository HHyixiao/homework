#js数组乱序

***
```javascript
var arr = [1,2,3,4,5,6,7,8,9,];
//方法
shuffle = function(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};
//给Array对象创建乱序方法
Array.prototype.shuffle = function() {
	for(var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x); 
	return this; 
}; 
console.log(arr.shuffle());
console.log(shuffle(arr));
```
***
```javascript
var arr = [1,2,3,4,5,6,7,8,9,];
console.log(arr);
//该方法只适合小数组，效率并不高
var itme = arr.sort(function(){
	return Math.random() > .5 ? -1 : 1;
});

console.log(itme);
```