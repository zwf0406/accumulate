(function($){
$.extend({
ms_DatePicker: function (options) {
            var defaults = {
                YearSelector: "#sel_year",
                MonthSelector: "#sel_month",
                DaySelector: "#sel_day",
                FirstText: "--",
                FirstValue: 0
            };
            var opts = $.extend({}, defaults, options);
            var $YearSelector = $(opts.YearSelector);
            var $MonthSelector = $(opts.MonthSelector);
            var $DaySelector = $(opts.DaySelector);
            var FirstText = opts.FirstText;
            var FirstValue = opts.FirstValue;

            // 初始化
            var str = "<option value=\"" + FirstValue + "\">" + FirstText + "</option>";
            $YearSelector.html(str);
            $MonthSelector.html(str);
            $DaySelector.html(str);

            // 年份列表
            var yearNow = new Date().getFullYear();
			var yearSel = $YearSelector.attr("rel");
            for (var i = yearNow; i >= 1900; i--) {
				var sed = yearSel==i?"selected":"";
				var yearStr = "<option value=\"" + i + "\" " + sed+">" + i + "</option>";
                $YearSelector.append(yearStr);
            }

            // 月份列表
			var monthSel = $MonthSelector.attr("rel");
            for (var i = 1; i <= 12; i++) {
				var sed = monthSel==i?"selected":"";
                var monthStr = "<option value=\"" + i + "\" "+sed+">" + i + "</option>";
                $MonthSelector.append(monthStr);
            }

            // 日列表(仅当选择了年月)
            function BuildDay() {
                if ($YearSelector.val() == 0 || $MonthSelector.val() == 0) {
                    // 未选择年份或者月份
                    $DaySelector.html(str);
                } else {
                    $DaySelector.html(str);
                    var year = parseInt($YearSelector.val());
                    var month = parseInt($MonthSelector.val());
                    var dayCount = 0;
                    switch (month) {
                        case 1:
                        case 3:
                        case 5:
                        case 7:
                        case 8:
                        case 10:
                        case 12:
                            dayCount = 31;
                            break;
                        case 4:
                        case 6:
                        case 9:
                        case 11:
                            dayCount = 30;
                            break;
                        case 2:
                            dayCount = 28;
                            if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
                                dayCount = 29;
                            }
                            break;
                        default:
                            break;
                    }
					
					var daySel = $DaySelector.attr("rel");
                    for (var i = 1; i <= dayCount; i++) {
						var sed = daySel==i?"selected":"";
						var dayStr = "<option value=\"" + i + "\" "+sed+">" + i + "</option>";
                        $DaySelector.append(dayStr);
                    }
                }
            }
            $MonthSelector.change(function () {
                BuildDay();
            });
            $YearSelector.change(function () {
                BuildDay();
            });
			if($DaySelector.attr("rel")!=""){
				BuildDay();
			}
        } // End ms_DatePicker
});
})(jQuery);



$(document).ready(function(e) {
		 
		 function check_member_truename() {
			if ($('#member_truename').val() === '') {
					$('#error_member_truename').show();
					return;
			}
			else{
			$('#error_member_truename').hide();
			}
		}
		$("#member_truename").blur(function(){
			check_member_truename();
		});
		
//=====个人资料--点击保存全部进行验证=========
		$("#profilesubmit").click(function(){ 
			check_member_truename();
			if ($('#error_member_truename').is(':hidden')) {
				layer.msg('保存成功!',{icon:1});
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