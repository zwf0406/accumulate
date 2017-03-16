// JavaScript Document
//========前台光标离开验证===========	
	$(document).ready(function(e) {
		 function check_mobile(){
			if ($('#mobile').val() === '') {
				$('#error_mobile').show();
				return;
			}
			else if(/^1(3[0-9]|4[57]|5[012356789]|7[0-9]|8[0-9]|9[8])[0-9]{8}$/.test($('#mobile').val()) === false) {
				$('#error_mobile').show().text('请输入正确的手机号码！');
				return;
			}
				else{
				$('#error_mobile').hide();
			}
		 }
		 
		 function check_mobile_code(){
			if ($('#mobile_code').val() === '') {
					$('#error_mobile_code').show();
					return;
			}
			else{
			$('#error_mobile_code').hide();
			}
		}
		
		function check_password (){
			if ($('#password').val() === '') {
					$('#error_password').show().text('密码不能为空');
					return;
				}
			else if ($('#password').val().length < 6 || $('#password').val().length > 20) {
				$('#error_password').show().text('密码长度为 6 - 20 位！');
				return;
			}
			else{
			$('#error_password').hide();
			}
		}
		
		function check_password_confirm (){
			if ($('#password_confirm').val() === '') {
					$('#error_password_confirm').show().text('请确认输入密码，不能为空');
					return;
			}else if($('#password_confirm').val() !== $('#password').val()){
				$('#error_password_confirm').show().text('与注册密码不匹配');
				return;
			}else if ($('#password_confirm').val().length < 6 || $('#password_confirm').val().length > 20) {
				$('#error_password_confirm').show().text('密码为长度 6 - 20 位');
				return;
			}
			else{
			$('#error_password_confirm').hide();
			}
		}
		
	
		$("#mobile").blur(function(){
			check_mobile();
		});
		
		$("#mobile_code").blur(function(){
			check_mobile_code();	
		});
		
		
		$("#password").blur(function(){
			check_password ();	
		});
		
		$("#password_confirm").blur(function(){
			check_password_confirm ();	
		});

//=====账户安全--点击确定全部进行验证=========
		$("#addresssubmit").click(function(){ 
			check_mobile();
			check_mobile_code();
			check_password ();
			check_password_confirm ();
			if ($('#error_mobile').is(':hidden') && $('#error_mobile_code').is(':hidden') && $('#error_password').is(':hidden') && $('#error_password_confirm').is(':hidden')) {
				alert('登录成功~');
				$("form").attr("action","2.html").submit();
			}				
		});

    });
	
//========点击获取验证码验证手机号=========
 $(function(){
	$('#code-btn').click(function(){
		var tel = $('#mobile').val();
		if(tel == ''){$('#error_mobile').show().text('请输入手机号码！');
		}else if (/^1(3[0-9]|4[57]|5[012356789]|7[0-9]|8[0-9]|9[8])[0-9]{8}$/.test($('#mobile').val()) === false) {
			$('#error_mobile').show().text('请输入正确的手机号码！');}
		else {
			$('#error_mobile, #hide_times').hide();
			$('.send_success_tips').show();
			}
	});	
});	
//========倒计时=========
$(function (){
	var InterValObj;
	var count = 120;
	var curCount;
	
	$('#code-btn').click(function(){
		if($('#error_mobile').is(':hidden')){
		sendMessage();
		}
	});
	function sendMessage(){
		curCount = count;
		$('#code-btn').attr('disabled','true');
		$('#show_times').text(curCount+"秒后重新获取");
		InterValObj = window.setInterval(SetReminTime,1000);
	}
	function SetReminTime(){
		if(curCount==0){
			window.clearInterval(InterValObj);
			$('#code-btn').removeAttr('disabled');
			$('.send_success_tips').text('重新发送验证码');
		} else {
			curCount--;
			$('.send_success_tips').text(curCount+"秒后重新获取");
		}
	}
})
