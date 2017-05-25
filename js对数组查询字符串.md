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
