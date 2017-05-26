#js对数组查询字符串
```javascript
var arr=['df', 'rtr', 'wy', 'dafd', 'dfs', 'wefa', 'tyr','rty', 'rty', 'ryt', 'afds', 'wer', 'te']; 
console.log(arr);
function do_search(obj,searchText){
	var newdata=[],str;
  	//克隆一个对象
	objClone = JSON.parse(JSON.stringify(obj));
  	//对克隆对象根据字符串进行排序
	objClone.sort(function(a,b){return a.indexOf('a')==-1?1:-1;});
	for(var i in objClone){
		str=transform(objClone[i]).toString();
		console.log(str);
		var row = str.indexOf(searchText);
		if (row == -1) {
			break;
		}
		newdata.push(objClone[i]);
	}
	console.dir(newdata);
	return newdata;
}

function transform(obj){
	var arr = [];
	for(var item in obj){
		arr.push(obj[item]);
	}
	return arr;
}
console.log(do_search(arr,"a")); 
```

***

17/05/26更新

之前犯傻了

Array对象提供了find()方法对数组内的成员进行查询

```javascript
var arr = [{id:10,name:'ces'},{id:12,name:'afa'},{id:5,name:'itc'},{id:8,name:'ceaes'}];

var item = arr.find(function(obj){
  //在这里obj是arr的每一个成员，返回搜索规则就，find()方法就回返回符合规则的数字成员
  return obj.id == 10;
});
console.log(item);
```

