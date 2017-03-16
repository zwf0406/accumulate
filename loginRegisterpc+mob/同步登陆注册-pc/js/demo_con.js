// JavaScript Document


//图片平移轮播开始
function pingyimove(btn1,btn2,box,mos,parent){
	var liShu=$(box).first().children().length;
	var liWidth=$(box).children().width();
	var ulWidth=liWidth*liShu;
	var num=0;
	var move=0;
	$(box).css('width',''+ulWidth+'px');
	$(mos).children().mouseover(function(){
		$(this).addClass('current').siblings().removeClass('current');
		$(this).closest(parent).find(box).stop().animate({'left':''+$(this).index()*-liWidth+'px'},500);
	})
	$(btn1).click(function(){
		move+=liWidth;
		num--;
		if(num<0){
			num=liShu-1;
			move=-(ulWidth-liWidth);
		}
		$(this).closest(parent).find(box).stop().animate({'left':''+move+'px'},500);
		$(this).closest(parent).find(mos).children().eq(num).addClass('current').siblings().removeClass('current');
	})
	$(btn2).click(function(){
		move-=liWidth;
		num++;
		if(num>liShu-1){
			move=0;
			num=0;
		}
		$(this).closest(parent).find(box).stop().animate({'left':''+move+'px'},500);
		$(this).closest(parent).find(mos).children().eq(num).addClass('current').siblings().removeClass('current');
	})
}
//图片平移轮播结束
$(function(){
				
		
				////添加一个点击事件
//				$(".her_top .her_title .her_menu li").click(function(){
//					var n = $(this).index();
//					//切换颜色
//					$(".her_menu li").eq(n).addClass("current").siblings().removeClass("current");
//					//切换商品
//					$(".her_top .pro_con").eq(n).show().siblings(".pro_con").hide();
//				})
				//搜索框下滑
				$(window).scroll(function(){
					//获得滚动条距离顶部距离
					var t = $(document).scrollTop();
					   // document.title = t;
					    if(t>530){
					    	$("#nav").show();
							$('.y-fixed-divs').show();
					    }else{
					    	$("#nav").hide();
							$('.y-fixed-divs').hide();
					    }
				});
				
				
			});
			
			$(document).ready(function() {
				$('.x').click(function(){
					$('#top_adt').hide();
					$('#top_adt_big').find('img').show();
					$('#top_adt_big').find('.up').show();
				});
				$('.up').click(function(){
					$('#top_adt_big').find('img').slideUp('500');
					$('#top_adt').slideDown();
					$('#top_adt_big').find('.up').slideUp('500');
					
				});
			});





/* 五大电商 强势入驻*/
	$(function(){
		$('.box_w dl').mouseover(function(){
			var aa=$(this).index();
			var aac=-aa*240
			$(this).parent('.box_w').stop().animate({left:aac},600)
			$(this).stop().animate({width:"1200px"},600).siblings('dl').stop().animate({width:"240px"},600);
		})
		$('.box_w dl').mouseout(function(){
			$(this).parent('.box_w').stop().animate({left:"0px"},600)
			$(this).stop().animate({width:"240px"},600)
		})
	})
	
	
/* 生活服务  水电煤*/	
$(document).ready(function() {
    var inner = $('.item').find('.inner');

    inner.mouseover( function() {  //鼠标移入
        $(this).find('.description').removeClass('sshow').addClass('hhide');
        $(this).find('.btn-c').addClass('sshow');
        $(this).addClass('backcolor');
    }).mouseout( function(){   //鼠标移出
        $(this).find('.description').addClass('sshow');
        $(this).find('.btn-c').removeClass('sshow');
        $(this).removeClass('backcolor');
    });
});

/* 热门商铺推荐*/	
$(document).ready(function() {
		$('.o_list').each(function(index, element) {
			$(element).mouseover(function(){
				$(element).find('.brand_mask').addClass('opacit');
			}).mouseleave(function(){
				$(element).find('.brand_mask').removeClass('opacit');
			});
		});
	});
	
	
/*轮播侧边栏部分*/	
$(document).ready(function(e) {
	var ullios = $('.Sample_cards').find('li'); 
	ullios.each(function(){
		$(this).mousemove(function(){
			$(this).find('.shade_box3, .div_show ').show();
		}).mouseleave(function(){
			$(this).find('.shade_box3, .div_show ').hide();
		});
	});
});

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



<!--楼层定位-->

$(function(){
	var wHeight = $(window).height(); //获取浏览器窗口宽度
	var wWidth = $(window).width(); //获取浏览器窗口高度
	 var rmsp = $("#hot_stare").offset().top;//热门商品
	 var jptj = $("#recommend").offset().top;//精品推荐
	 var shfw = $("#life_sever").offset().top;//生活服务
	 var tjsj = $("#Rec_bu").offset().top;//推荐商家
	 var t = $(document).scrollTop(); //滚动条位置
	 var location = [rmsp, jptj, shfw, tjsj];
	 console.log(location);
	$('body').find('#jf,#ds,#sp,#sj').each(function(index, el) {
		$(el).click(function() {
			$('html,body').animate({ scrollTop:(location[index]-60)},500);
			$('#ds,#sp,#jf,#sj').find('em').removeClass('redfff');
			
			$(el).find('em').addClass('redfff');
		});
	});
	
});

/*轮播右部定位*/
$(document).ready(function(e) {
		//var iLeft = $('#jygh').position().left + 195;
//		var iTop = $('#jygh').position().top - 276;
//		$('.panel_right').css({'left': iLeft});
//		$('.panel_right').css({'top': iTop});
//		
//		var lLeft = $('#jygh').position().left + 110;
//		var rLeft = $('#jygh').position().left -752;
//		var rtop = $('#jygh').position().top -156;
//		$('.right_1').css({'left': lLeft});
//		$('.left_1').css({'left': rLeft});
//		$('.left_1').css({'top': rtop});
//		
//		var dLeft = $('#jygh').position().left + 45;
//		var dTop = $('#jygh').position().top + 120;
//		$('.dian').css({'top': dTop});
//		$('.dian').css({'left': dLeft});
	
});


/*卡模块js*/
(function(A){
	A.fn.th_video_focus=function(E){
		
		var G={
			actClass:"cur",
			navContainerClass:".focus_pic_preview",
			focusContainerClass:".focus_pic",
			animTime:300,
			delayTime:5000
		};
		
		if(E){
			A.extend(G,E)
		}
		
		var C=G.actClass, D=G.navContainerClass, B=G.focusContainerClass, F=G.animTime, H=G.delayTime, I=null;
		
		return this.each(function(){
			
			var O=A(this), M=A(D+" li",O), P=A(B+" li",O), L=M.length, K=O.height();
			
			function N(R){
				var V=K*R*-1;
				var U=A(B+" li",O), W=null, T=null;
				for(var S=0;S<=R;S++){
					W=U.eq(S);
					T=W.find('script[type="text/templ"]');
					if(T.length>0){
						W.html(T.html())
					}
				}
				A(B,O).stop().animate({top:V},F,function(){
					var Y=O.find("h3"), X=Y.height();
					Y.height(0).html(A(B+" li").eq(R).find("img").attr("alt")).animate({height:X},0)
				});
				A(D+" li").eq(R).addClass(C).siblings().removeClass(C)
			}
			
			function Q(){
				if(I){
					clearInterval(I)
				}
				I=setInterval(function(){
					var R=A(D+" li."+C).index();
					N((R+1)%L)
				},H)
			}
			
			O.hover(function(){
				if(I){
					clearInterval(I)
				}
			},function(){
				Q()
			});
		
			var J=null;
			
			M.hover(function(){
				
				var R=A(this).index();
				
				if(I){
					clearInterval(I)
				}
				J=setTimeout(function(){
					N(R)
				},400)
			},function(){
				if(J){
					clearTimeout(J)
				}
				Q()
			}).click(function(T){
				var R=A(this).index(), S=P.eq(R).find("a");
				if(document.uniqueID||window.opera){
					S[0].click();
					T.stopPropagation();
					T.preventDefault()
				}
			});
			
			Q()
			
		})
	}
	
})(jQuery);

$(function(){
	$(".film_focus").th_video_focus({
		navContainerClass:".film_focus_nav",
		focusContainerClass:".film_focus_imgs",
		delayTime:5000
	});
	
});	

$(document).ready(function(e) {
	$('.film_focus_nav li').each(function(index, el) {
	  $(el).click(function(event) {
		$('.topimg img').attr('src', 'image/topcard' + index + '.jpg');
	  });
	  $(el).hover(function(event) {
		$('.topimg img').attr('src', 'image/topcard' + index + '.jpg');
	  });
	});
	
	$(function (){
	var InterValObj;
	var count = 5;
	var curCount;
	
	$('#code-btn').click(function(){
		if($('#error_mobile').is(':hidden')){
		sendMessage();
		}
	});
	function sendMessage(){
		$('.topimg img').attr('src', 'image/topcard' + index + '.jpg');
		InterValObj = window.setInterval(SetReminTime,5000);
	}
	function SetReminTime(){
		if(curCount==0){
			window.clearInterval(InterValObj);
			$('#code-btn').click(function(){
				if($('#error_mobile').is(':hidden')){
				sendMessage();
				}
			});
			$('.send_success_tips').text('重新发送验证码');
		} else {
			curCount--;
			$('.send_success_tips').text(curCount+"秒后重新获取");
		}
	}
})

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
