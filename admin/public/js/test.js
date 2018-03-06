/*功能
	传入路径 加载id 事件类型 
	$.extend data call apply bind
*/
(function($){ 
	var settings = {  
      'event'         : 'click'
    };
	var methods={ 
		load:function(id,url,event){
			(data == "" || data == undefined || data == null) ?event=settings['event']:event;
			return this.bind(event,function(){ 
				$(id).load(url);
			});
		}
	}
	$.fn.common=function(method){ 
		if(methods[method]){ 
			return 
		}
	}
})(jQurery)