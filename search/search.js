function do_search(){
	var gjc=$('#searchtext').val(); 搜索关键词
	if(gjc==){
		$('#table').datagrid({
			data getdata.data
		});
	}else{
		var newdata=[];
		for(var i=0;igetdata.data.length;i++){
			将对象转换为数组后变成字符串
			str=transform(getdata.data[i]).join(',');
			查询字符串
			row=str.indexOf(gjc);
			if(row=0){
				push需要的对象到新数组中
				newdata.push(getdata.data[i]);
			}
		}
		重新渲染表格
		$('#table').datagrid({
			data newdata
		});
	}
}
// 将对象转化为数组
function transform(obj){
	var arr = [];
	for(var item in obj){
		arr.push(obj[item]);
	}
	return arr;
}