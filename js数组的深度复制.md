#js数组的深度复制

***
递归实现数组的深度复制
```javascript
Array.prototype.clone = function() {
    var len = this.lenght,
        arr = [];
    for(var i = 0;i < len;i++) {
        if(typeof this[i] !== "object") {
            arr.push(this[i]);
        } else {
            arr.push(this[i].clone());
        }
    }
    return arr;
}
```
***
json实现
```javascript
var arr1 = [1, 2, [3, 4], {a: 5, b: 6}, 7],
    arr2 = JSON.parse(JSON.stringify(arr1));
```