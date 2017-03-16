// JavaScript Document

$(function(){
	//回到顶部
	$(".top_is").click(function(){
		$('html,body').animate({ scrollTop:0},500);
		return false;
	});
});


$(document).ready(function() {
	var flag=true;
		$('.z-btn-more').each(function(index, el) {
		
			$(el).on('click', function () {
				 if(flag){
					 flag=false;
						$(el).parent().next('div').find('.J_filter_items').addClass('height0');
						$(el).html('收起<i class="arrow-up"></i>');
					
				 } else{
						$(el).parent().next('div').find('.J_filter_items').removeClass('height0');
						$(el).html('更多<i class="arrow-down"></i>');
						flag=true;
				 }	
			});
		});
		
		
		$('.J_filter_items').each(function(index, e) {
            $(e).find('a').each(function(idx, el) {
				$(el).click(function(){
					$(e).find('.selectspan').text($(el).text());
					$(e).find('.filter-tag').show();
				});
			});
        });
		
		$('.filter-tag').each(function(i, e) {
            $(e).click(function(){
				$(e).hide();
			});
        });
		
		$('.J_feed_clear').click(function(){
			$('.filter-tag').hide();
		});
		
		$('.filter-items-ok').click(function(){
			$('.filterprice').show();
			if($('#min-price').val() !=='' && $('#max-price').val() ===''){
				$('#min-price').css('border','1px solid #ddd');
				$('#max-price').css('border','1px solid #ddd');
				$('.selectprace').text('最低价格为'+ $('#min-price').val());
			}else if($('#min-price').val() ==='' && $('#max-price').val() !==''){
				$('#min-price').css('border','1px solid #ddd');
				$('#max-price').css('border','1px solid #ddd');
				$('.selectprace').text('最高价格为'+ $('#max-price').val());
			}else if($('#min-price').val() !=='' && $('#max-price').val() !==''){
				$('#min-price').css('border','1px solid #ddd');
				$('#max-price').css('border','1px solid #ddd');
				$('.selectprace').text('价格为'+ $('#min-price').val()+'-'+$('#max-price').val());
			}else{
				$('#min-price').css('border','1px solid red');
				$('#max-price').css('border','1px solid red');
			}
		});
		
	
});



$(function(){
	$('.J_feed_fold').click(function(){
		if($('#filter-block').is(':hidden')){
			$('#filter-block').show();
			$('.J_feed_fold').html('收起筛选<i class="arrow-up"></i>');
		}else{
			$('#filter-block').hide();
			$('.J_feed_fold').html('展开筛选<i class="arrow-down"></i>');
		}
	
	})
});
