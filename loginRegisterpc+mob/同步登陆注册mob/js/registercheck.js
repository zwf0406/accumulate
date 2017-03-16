// JavaScript Document
function showCheck(a){
			var c = document.getElementById("myCanvas");
		 	var ctx = c.getContext("2d");
			ctx.clearRect(0,0,1000,1000);
			ctx.font = "80px 'Microsoft Yahei'";
			ctx.fillText(a,0,100);
			ctx.fillStyle = "white";
		}
		var code ;    
		function createCode(){       
			code = "";      
			var codeLength = 4;
			var selectChar = new Array(1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','j','k','l','m','n','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z');      
			for(var i=0;i<codeLength;i++) {
			   var charIndex = Math.floor(Math.random()*60);      
			  code +=selectChar[charIndex];
			}      
			if(code.length != codeLength){      
			  createCode();      
			}
			showCheck(code);
		}
//========前台光标离开验证===========	
	$(document).ready(function(e) {
		//验证码
 		 createCode();
		 
	function tipdong(){
		$('.tiptext').stop()
			.animate({ left: "-10px" }, 100).animate({ left: "10px" }, 100)
			.animate({ left: "-10px" }, 100).animate({ left: "10px" }, 100)
			.animate({ left: "0px" }, 100)
		$('.tiptext').text('');	
	}	
        $("#u").blur(function(){
			if ($('#u').val() === '') {
				$('#u_judge').html('&#88;');
				tipdong();
				$('.u-code-tip').text('用户名不能为空');
			}else if ($('#u').val().length < 3 || $('#u').val().length > 15) {
				$('#u_judge').html('&#88;');
				tipdong();
				$('.u-code-tip').text('用户名长度3-15位字母或数字');
				return;		
			}else{
				$('#u_judge').html('&#89;');
				$('#u').removeClass("errorinput");
				$('.tiptext').text('');
			}
		});
		
		$("#p").blur(function(){
				if ($('#p').val() === '') {
					$('#p_judge').html('&#88;');
					tipdong();
					$('.p-code-tip').text('密码不能为空');
					}
				else if ($('#p').val().length < 3 || $('#p').val().length > 15) {
					$('#p_judge').html('&#88;');
					tipdong();
					$('.p-code-tip').text('密码长度为 3 - 20 位');
					/*layer.tips('密码为长度 3 - 20 位', '#p', {
					  tips: [1, '#3595CC'],
					  time: 3000
					});	*/
					$('#p_judge').html('&#88;');
				}
				else{
				$('#p_judge').html('&#89;');
				$('#p').removeClass("errorinput");
				$('.tiptext').text('');
			}
		});
		
		$("#pp").blur(function(){
				if ($('#pp').val() === '') {
					$('#pp_judge').html('&#88;');
					tipdong();
					$('.pp-code-tip').text('请确认输入密码，不能为空');
				}else if($('#pp').val() !== $('#p').val()){
					$('#pp_judge').html('&#88;');
					tipdong();
					$('.pp-code-tip').text('与注册密码不匹配');
				}else if ($('#pp').val().length < 3 || $('#pp').val().length > 20) {
					$('#pp_judge').html('&#88;');
					tipdong();
					$('.pp-code-tip').text('密码为长度 3 - 20 位');
					return;
				}
				else{
				$('#pp_judge').html('&#89;');
				$('#pp').removeClass("errorinput");
				$('.tiptext').text('');
			}
		});
		
		$("#e").blur(function(){
				if ($('#e').val() === '') {
					$('#e_judge').html('&#88;');
					tipdong();
					$('.ee-code-tip').text('手机号不能为空');
				}else if  (/^1(3[0-9]|4[57]|5[012356789]|7[0-9]|8[0-9]|9[8])[0-9]{8}$/.test($('#e').val()) === false) {
					$('#e_judge').html('&#88;');
					tipdong();
					$('.ee-code-tip').text('手机格式有误');
					return;
				}
				else{
				$('#e_judge').html('&#89;');
				$('#e').removeClass("errorinput");
				$('.tiptext').text('');
			}
		});
		
		
		$("#y").blur(function(){
				if ($('#y').val() === '') {
					$('#y_judge').html('&#88;');
				}
				else if  ($('#y').val().toLowerCase() !== code.toLowerCase() ) {
					$('#y_judge').html('&#88;');
					tipdong();
					$('.y-code-tip').text('验证码错误');
					return;
				}
				else{
				$('#y_judge').html('&#89;');
				$('#y').removeClass("errorinput");
				$('.tiptext').text('');
			}
		});
		var selected = false;
		$('.agree').click(function (){
				if(selected) {
					$(this).find('span').addClass('selected');
				} else {
					$(this).find('span').removeClass('selected');
				}
				selected=!selected;
			})
    });
//========点击注册四项全部进行验证=========
$(function(){
	function tipdong(){
		$('.tiptext').stop()
			.animate({ left: "-10px" }, 100).animate({ left: "10px" }, 100)
			.animate({ left: "-10px" }, 100).animate({ left: "10px" }, 100)
			.animate({ left: "0px" }, 100)
		$('.tiptext').text('');
	}
	
	$("#registerBtn").click(function(){ 
			if ($('#u').val() === '') {//用户名
				$('#u_judge').html('&#88;');
				tipdong();
				$('.u-code-tip').text('用户名不能为空');
				return;
			}else if ($('#u').val().length < 3 || $('#u').val().length > 15) {
				$('#u_judge').html('&#88;');
				$('#u').removeClass("errorinput");
				tipdong();
				$('.u-code-tip').text('用户名长度3-15位字母或数字');
				return;		
			}else{
				$('#u_judge').html('&#89;');
				$('#u').removeClass("errorinput");
			}
			
			
			if ($('#p').val() === '') {
				$('#p_judge').html('&#88;');
				tipdong();
				$('.p-code-tip').text('注册密码不能为空');
				return;
				}
			else if ($('#p').val().length < 3 || $('#p').val().length > 15) {
				$('#p_judge').html('&#88;');
				tipdong();
				$('.p-code-tip').text('密码长度为 3 - 20 位');
				return;
			}
			else{
			$('#p_judge').html('&#89;');
			$('#p').removeClass("errorinput");
			$('.tiptext').text('');
		}
		if ($('#pp').val() === '') {
				$('#pp_judge').html('&#88;');
				tipdong();
				$('.pp-code-tip').text('请确认输入密码，不能为空');
			}else if($('#pp').val() !== $('#p').val()){
				$('#pp_judge').html('&#88;');
				tipdong();
				$('.pp-code-tip').text('与注册密码不匹配');
			}else if ($('#pp').val().length < 3 || $('#pp').val().length > 20) {
				$('#pp_judge').html('&#88;');
				tipdong();
				$('.pp-code-tip').text('密码为长度 3 - 20 位');
			}
			else{
			$('#pp_judge').html('&#89;');
			$('#pp').removeClass("errorinput");
			$('.tiptext').text('');
		}
		
 		if ($('#e').val() === '') {
			$('#e_judge').html('&#88;');
			tipdong();
			$('.e-code-tip').text('手机号不能为空');
			return;
		}else if  (/^1(3[0-9]|4[57]|5[012356789]|7[0-9]|8[0-9]|9[8])[0-9]{8}$/.test($('#e').val()) === false) {
			$('#e_judge').html('&#88;');
			tipdong();
			$('.e-code-tip').text('手机格式有误');
		}
		else{
		$('#e_judge').html('&#89;');
		$('#e').removeClass("errorinput");
		$('.tiptext').text('');
	}
	
	if ($('#y').val() === '') {
		$('#y_judge').html('&#88;');
		tipdong();
		$('.y-code-tip').text('验证码不能为空');
		return;
	}else if ($('#y').val().toLowerCase() != code.toLowerCase() ) {
		$('#y_judge').html('&#88;');
		tipdong();
		$('.y-code-tip').text('验证码错误');
		return;
	}else{
	$('#y_judge').html('&#89;');
	$('#y').removeClass("errorinput");
	$('.tiptext').text('');
	}
	
	if($('#isreadknow'). is('.selected') === false){
		$('.sele-code-tip').text('请阅读并同意《卡行者用户使用协议》');
	}else{
		$('.tiptext').text('');
	}
	
	if ($('#u_judge').html() === 'Y' && $('#p_judge').html() === 'Y' && $('#pp_judge').html() === 'Y' && $('#e_judge').html() === 'Y' && $('#y_judge').html() === 'Y'  && $('#isreadknow'). is('.selected')) {
			//$.ajax({
					//url:'login.php',
					//type:'POST',
					//dataType: 'json',
					//data: 'yzm=' + yzm,
					//success:function(msg){
						//if (msg.result === 'success') {
							$("form").attr("action","tiao.html").submit();
						//}
					//});
		}		
			
});


});		