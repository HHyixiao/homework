## 原生js实现ajax


```html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>原生js异步加载</title>  
</head>  
<body>  
<div id="ajax"></div>  
<script>  
    window.onload = ajax();  
    function ajax() {  
        var xmlhttp;  
        if(window.XMLHttpRequest){  
            //创建 XMLHttpRequest 对象  
            xmlhttp = new XMLHttpRequest();  
        }else {  
            //老版本的 Internet Explorer （IE5 和 IE6）使用 ActiveX 对象  
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");  
        }  
        var url = "http://www.wanninghealthy.cn/h37/rest/public/prepPublic/search?q=0&max=1&offset=0";  
        //将请求发送到服务器，使用 XMLHttpRequest 对象的 open() 和 send() 方法  
        xmlhttp.open("GET",url,true);  
        xmlhttp.send();  
        //接收服务器返回的数据  
        xmlhttp.onreadystatechange=function()  
        {  
            if (xmlhttp.readyState==4 && xmlhttp.status==200)  
            {  
                //获得来自服务器的响应  
                var data = xmlhttp.responseText;  
                data=JSON.parse(data);  
                document.getElementById("ajax").innerHTML=data.data[0].title;  
            }  
        }  
    }  
</script>  
</body>  
</html>  
```

