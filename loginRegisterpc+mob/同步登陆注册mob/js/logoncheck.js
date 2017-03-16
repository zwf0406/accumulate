// JavaScript Document
function yzmblur(){
			if ($('#y').val() === '') {
				$('#y_judge').html('&#88;');
				tipdong();
				$('.y-code-tip').text('验证码不能为空!');
			}
			else if  ($('#y').val().toLowerCase() !== code.toLowerCase() ) {
				$('#y_judge').html('&#88;');
				tipdong();
				$('.tiptext').text('');
				$('.y-code-tip').text('验证码错误!');
				return;
			}
			else{
			$('#y_judge').html('&#89;');
			$('#y').removeClass("errorinput");
			$('.tiptext').text('');
			}
		}
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
				$('.u-code-tip').text('用户名不能为空!');
			}else if ($('#u').val().length < 3 || $('#u').val().length > 15) {
				$('#u_judge').html('&#88;');
				tipdong();
				$('.u-code-tip').text('用户名长度3-15位字母或数字!');
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
					$('.p-code-tip').text('密码不能为空!');
					}
				else if ($('#p').val().length < 3 || $('#p').val().length > 15) {
					$('#p_judge').html('&#88;');
					tipdong();
					$('.p-code-tip').text('密码长度为 3 - 20 位!');
				}
				else{
				$('#p_judge').html('&#89;');
				$('#p').removeClass("errorinput");
				$('.tiptext').text('');
			}
		});
	
		$("#login_btn").click(function(){ 
			if ($('#u').val() === '') {//用户名
				$('#u_judge').html('&#88;');
				tipdong();
				$('.u-code-tip').text('用户名不能为空!');
				return;
			}else if ($('#u').val().length < 3 || $('#u').val().length > 15) {
				$('#u_judge').html('&#88;');
				$('#u').removeClass("errorinput");
				tipdong();
				$('.u-code-tip').text('用户名长度3-15位字母或数字!');
				return;		
			}else{
				$('#u_judge').html('&#89;');
				$('#u').removeClass("errorinput");
				$('.tiptext').text('');
			}
			function yzmcheck(){
				if($('#p').val()===''){
					//信息框
					  layer.open({
						content: '请输入密码！'
						,btn: '我知道了'
					  });
				
				}else{
					//alert('密码有误，请重新输入');
					 //信息框
					  layer.open({
						content: '密码有误，请重新输入！'
						,btn: '我知道了'
					  });
				$('.yzmbox').fadeIn();
				/*if ($('#y').val() === '') {
					$('#y_judge').html('&#88;');
					tipdong();
					$('.y-code-tip').text('验证码不能为空!');
					return;
					}
					else if  ($('#y').val().toLowerCase() != code.toLowerCase() ) {
						$('#y_judge').html('&#88;');
						tipdong();
						$('.y-code-tip').text('验证码错误!');
						return;
					}
					else{
					$('#y_judge').html('&#89;');
					$('#y').removeClass("errorinput");
					$('.tiptext').text('');
				}*/
				}
			}
			if ($('#p').val() === '') {
				$('#p_judge').html('&#88;');
				tipdong();
				$('.p-code-tip').text('注册密码不能为空!');
				return;
				}
			else if ($('#p').val().length < 3 || $('#p').val().length > 15) {
				$('#p_judge').html('&#88;');
				tipdong();
				$('.p-code-tip').text('密码长度为 3 - 20 位!');
				yzmcheck();
				return;
			}
			else{
			$('#p_judge').html('&#89;');
			$('#p').removeClass("errorinput");
			$('.tiptext').text('');
		}

		//alert($('.yzmbox').is(':hidden'));
	if($('.yzmbox').is(':hidden')){ //验证码不存在
		if ($('#u_judge').html() === 'Y' && $('#p_judge').html() === 'Y') {
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
		
	}else{//验证码存在
		if ($('#y').val() === '') {
					$('#y_judge').html('&#88;');
					tipdong();
					$('.y-code-tip').text('验证码不能为空!');
					return;
					}
					else if  ($('#y').val().toLowerCase() != code.toLowerCase() ) {
						$('#y_judge').html('&#88;');
						tipdong();
						$('.y-code-tip').text('验证码错误!');
						return;
					}
					else{
					$('#y_judge').html('&#89;');
					$('#y').removeClass("errorinput");
					$('.tiptext').text('');
				}
				
	if ($('#u_judge').html() === 'Y' && $('#p_judge').html() === 'Y' && $('#y_judge').html() === 'Y') {
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
		
	}
			
			
	});
});