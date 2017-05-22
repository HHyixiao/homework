(function(){
	function activeSwitch(ele){
		ele.click(function(){
			ele.removeClass('active');
			$(this).addClass('active');
		});
	}
	
	function welter(scrollEle,time,direction) {
		var item = {},
			$fist = 0,
			$ulwith = 0,
			$ulheight = 0;
		direction = direction.toString();
		
		scrollEle.children().each(function() {
			$ulwith += $(this).outerWidth(true);
			$ulheight += $(this).outerHeight(true)
		});
		switch (direction){
			case "top" :
				scrollEle.height($ulheight);
				$fist = parseInt(scrollEle.children().eq(0).outerHeight(true));
				break;
			case "left" :
				scrollEle.width($ulwith);
				$fist = parseInt(scrollEle.children().eq(0).outerWidth(true));
				break;
			default :
				console.error('错误');
				break;
		};
		scrollEle.css(direction, 0);
		item[direction] = -$fist+"px";
		scrollEle.animate(item, time, function() {
			setTimeout(function() {
				scrollEle.children().eq(0).clone().appendTo(scrollEle);
				scrollEle.children().eq(0).remove();
				welter(scrollEle,time,direction)
			}, 1000);
		});
	}
	
	welter($('#scroll-1'),8000,'left');
	welter($('#scroll-2'),1000,'top');


	//首页轮播
	$("#rotation-1>li").mouseover(function() {
		$("#rotation-1>li").removeClass('active');
		$(this).addClass('active');
		var item = $(this).index();
		var height = $('#rotation-1-roll').parent().height();
		$('#rotation-1-roll').stop().animate({
			top: -height*item + 'px'
		}, 'normal');
	});
	
	$("#list-1>li").click(function() {
		$("#list-1>li").removeClass('active');
		$("#list-1>li").find('img').each(function(i,ele){
			$(ele).attr('src','img/noactive/'+(i+1)+'.png');
		})
		$(this).addClass('active');
		$(this).find('img').attr('src','img/active/'+($(this).index()+1)+'.png');
	});
	
	activeSwitch($("#rotation-2>div"));
	activeSwitch($("#rotation-3>li"));
	activeSwitch($("#rotation-3>li"));
	activeSwitch($("#rotation-4>div"));
	activeSwitch($("#rotation-5>div"));
	activeSwitch($("#rotation-6>div"));
	
	
})();


//翻页
(function() {
	var $page = $('.page'),
		$rankingList = $(".rankingList li"),
		$wins = $(".win"),
		$lastpage = $page.children().eq(0),
		$nextpage = $page.children().eq(1),
		count = 0;
	function item () {
		$page.children().show();
		if($rankingList.find('div').eq(0).text() == "1") {
			$lastpage.hide();
			$wins.each(function (i,ele) {
				$(ele).attr("class","win");
			});
		}else {
			$wins.each(function () {
				$(this).attr("class","");
			});
		}
		if($rankingList.find('div').eq(0).text() == "81") {
			$nextpage.hide();
			$wins.each(function () {
				$(this).removeClass('win');
			})
		}
	}
	item();
	$nextpage.click(function() {
		console.dir($rankingList.eq(0).text())
		$rankingList.each(function(){
			$(this).find('div').eq(0).text(parseInt($(this).text())+20);
		})
		item();
	})
	$lastpage.click(function() {
		$rankingList.each(function(){
			$(this).find('div').eq(0).text(parseInt($(this).text())-20);
		})
		item();
	})
})();
