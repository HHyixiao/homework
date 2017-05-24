#jq 点击元素外的位置让元素消失

```javascript
$("触发demo显示的元素").click(function(){
$('.demo').show();
return false;//阻止冒泡
});
$(document).click(function() {
$("触发demo显示的元素").click(function() {
return false;
});
$('.demo').hide();
});
```

