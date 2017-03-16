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
//单步平移展示效果开始
function Move(btn1,btn2,box,btnparent,shu){
	var llishu=$(box).first().children().length
	var liwidth=$(box).children().width();
	var boxwidth=llishu*liwidth;
	var shuliang=llishu-shu;
	$(box).css('width',''+boxwidth+'px');
	var num=0;
	$(btn1).click(function(){
		num++;
		if (num>shuliang) {
			num=shuliang;
		}
		var move=-liwidth*num;
		$(this).closest(btnparent).find(box).stop().animate({'left':''+move+'px'},500);
	});
	$(btn2).click(function(){
		num--;
		if (num<0) {
			num=0;
		}
		var move=liwidth*num;
		$(this).closest(btnparent).find(box).stop().animate({'left':''+-move+'px'},500);
	})
}
//单步平移展示效果结束
//左右tab切换栏开始
function zyTab(btn,box,parent){
	var btnliwidth=$(btn).children().width();
	var boxliwidth=$(box).children().width();
	$(btn).children().mouseover(function(){
		$(this).closest(parent).find(btn).siblings().stop().animate({'left':''+btnliwidth*$(this).index()+'px'},500);
		$(this).closest(parent).find(box).children().eq($(this).index()).show().siblings().hide();
	})
}
//左右tab切换栏结束
//鼠标经过图片移动一点开始
function PicMove(box){
	$(box).children().mouseenter(function(){
		$(this).children('img').stop().animate({'left':'-10px'},300);
	}).mouseleave(function(){
		$(this).children('img').stop().animate({'left':'0px'},300);
	})
}
//鼠标经过图片移动一点结束



//登录部分
$(function(){

	$('#switch_qlogin').click(function(){
		$('#switch_login').removeClass("switch_btn_focus").addClass('switch_btn');
		$('#switch_qlogin').removeClass("switch_btn").addClass('switch_btn_focus');
		$('#switch_bottom').animate({left:'0px',width:'70px'});
		$('#qlogin').css('display','none');
		$('#web_qr_login').css('display','block');

		});
	$('#switch_login').click(function(){

		$('#switch_login').removeClass("switch_btn").addClass('switch_btn_focus');
		$('#switch_qlogin').removeClass("switch_btn_focus").addClass('switch_btn');
		$('#switch_bottom').animate({left:'154px',width:'70px'});

		$('#qlogin').css('display','block');
		$('#web_qr_login').css('display','none');
		});
if(getParam("a")=='0')
{
	$('#switch_login').trigger('click');
}

	});

function logintab(){
	scrollTo(0);
	$('#switch_qlogin').removeClass("switch_btn_focus").addClass('switch_btn');
	$('#switch_login').removeClass("switch_btn").addClass('switch_btn_focus');
	$('#switch_bottom').animate({left:'154px',width:'96px'});
	$('#qlogin').css('display','none');
	$('#web_qr_login').css('display','block');

}


//根据参数名获得该参数 pname等于想要的参数名
function getParam(pname) {
    var params = location.search.substr(1); // 获取参数 平且去掉？
    var ArrParam = params.split('&');
    if (ArrParam.length == 1) {
        //只有一个参数的情况
        return params.split('=')[1];
    }
    else {
         //多个参数参数的情况
        for (var i = 0; i < ArrParam.length; i++) {
            if (ArrParam[i].split('=')[0] == pname) {
                return ArrParam[i].split('=')[1];
            }
        }
    }
}


var reMethod = "GET",
	pwdmin = 6;

$(document).ready(function() {


	$('#reg').click(function() {

		if ($('#user').val() == "") {
			$('#user').focus().css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});
			$('#userCue').html("<font color='red'><b>×用户名不能为空</b></font>");
			return false;
		}



		if ($('#user').val().length < 4 || $('#user').val().length > 16) {

			$('#user').focus().css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});
			$('#userCue').html("<font color='red'><b>×用户名位4-16字符</b></font>");
			return false;

		}
		$.ajax({
			type: reMethod,
			url: "/member/ajaxyz.php",
			data: "uid=" + $("#user").val() + '&temp=' + new Date(),
			dataType: 'html',
			success: function(result) {

				if (result.length > 2) {
					$('#user').focus().css({
						border: "1px solid red",
						boxShadow: "0 0 2px red"
					});$("#userCue").html(result);
					return false;
				} else {
					$('#user').css({
						border: "1px solid #D7D7D7",
						boxShadow: "none"
					});
				}

			}
		});


		if ($('#passwd').val().length < pwdmin) {
			$('#passwd').focus();
			$('#userCue').html("<font color='red'><b>×密码不能小于" + pwdmin + "位</b></font>");
			return false;
		}
		if ($('#passwd2').val() != $('#passwd').val()) {
			$('#passwd2').focus();
			$('#userCue').html("<font color='red'><b>×两次密码不一致！</b></font>");
			return false;
		}

		var sqq = /^[1-9]{1}[0-9]{4,9}$/;
		if (!sqq.test($('#qq').val()) || $('#qq').val().length < 5 || $('#qq').val().length > 12) {
			$('#qq').focus().css({
				border: "1px solid red",
				boxShadow: "0 0 2px red"
			});
			$('#userCue').html("<font color='red'><b>×QQ号码格式不正确</b></font>");return false;
		} else {
			$('#qq').css({
				border: "1px solid #D7D7D7",
				boxShadow: "none"
			});

		}

		$('#regUser').submit();
	});


});

$(document).ready(function() {
	$("#dl").click(function(){
		$(".login_wy").toggle();
	});
});
