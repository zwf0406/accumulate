// JavaScript Document
$(function(){
    (function(){
        fnTab($('.tabNav'),$('.tabCon'),'mouseover');
		 fnTab($('.tabNavshopping'),$('.tabConshopping'),'mouseover');

        function fnTab( oNav, aCon,sEvent ){//选项卡函数 接收数据 将内容传进来
            var aElem = oNav.children();//通过oNav找到所有子元素
            aCon.hide().eq(0).show();//将aCon的所有内容隐藏起来，但是第0个显示出来
            //对li做点击切换
            aElem.each(function(index){ //each循环一下
                $(this).on(sEvent,function(){
                    aElem.removeClass('active').addClass('gradient');
                    $(this).removeClass('gradient').addClass("on").siblings().removeClass("on");
					
                    aCon.hide().eq(index).show();
                });
            });
        }
    })();

});

/*送至地址*/
$(document).ready(function() {
	 var con = $("#t_area"); 
     var arealist = $("#t_area").find("li"); 
     var g = $("#t_con"); 
	 
	function runyellow(){
		if($(".topi").hasClass("city_prechange")){
		$(".topi").removeClass("city_prechange");
		}else{
		$(".topi").addClass("city_prechange");
		}
	}
	
	g.click(function(){
		runyellow();
		con.slideToggle("500");
		
	});
	$(".topi").click(function(){
		runyellow();
		con.slideToggle("500");
		
	});
	
	 arealist.each(function(index) {
		$(this).click(function(){
		var textadd = $(this).text();
		g.text(textadd);
		runyellow();
		con.slideUp("500");
		 
		});
	});
});