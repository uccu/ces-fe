$(function () {
	$.post(host+'Home/Product/getProductByPid',{pid:GET.pid},function(d){
		if(!d.status){
			alert(d.info);
			return
		}
		for(let z in d.info){
			$('[name='+z+']').val(d.info[z]).focus();
		}
		

	},'json')
	$('#push-btn').bind('click',function(){
		let s = $('form').serialize();
		$.post(host+'Home/Product/changeProduct',s,function(d){
			if(!d.status){
				alert('修改失败');return
			}else{
				alert('修改成功');
				location = '/admin/post_list.shtml'
			}
		},'json')
	})

});

