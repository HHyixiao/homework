#js创建m长度值为n的数组---非遍历

***

```javascript
var m = 10,n=3,arr;
arr =new Array(m).fill(n);
console.log(arr);
```







```javascript
var m = 10,n=3,arr;
arr = Array(m).join(n).split('');
console.log(arr);
```
***