#利用sort()方法对数组进行搜索
```javascript
var arr=['df', 'rtr', 'wy', 'dafd', 'dfs', 'wefa', 'tyr','rty', 'rty', 'ryt', 'afds', 'wer', 'te']; 
arr.sort(function(a,b){return a.indexOf('a')==-1?1:-1;}); 
```
数组中含有字母'a'的字符串就都到数组的前面了;