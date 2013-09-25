/*
	@author			Jonathan Bredo
	@github			/Bredo/jq-rightclick
	@date			24th September 2013
	@require		jQuery (any version)
*/
(function($) {
	$.fn.rightClick = function(method) {
		function isFunction(functionToCheck) {
			var getType = {};
			return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
		}
		$(this).bind('contextmenu rightclick', function(e){
			e.preventDefault();
			if(isFunction(method)){
				method();
			}else{
				alert(method);
			}
			return false;
		});
	};
})(jQuery);