开发调试技巧log

```javascript
var log = function (){
  console.log.apply(console, arguments);
}
var dir = function (){
  console.dir.apply(console, arguments);
}
```

