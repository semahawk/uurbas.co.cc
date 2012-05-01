window.addEvent('domready', function(){
	var ajaxReq = new Request({
		url: 'response.php',
		onSuccess: function(response){
			$('debug').set('html', response);
		}
	});
	
	$$('textarea[name=input]').addEvent('keyup', function(){
		var value = this.get('value');
		ajaxReq.cancel().send({
			data: {'input' : value}
		});
	});
	
	/////////////////////////////////////////////////////////////////////
	/// Menu buttons ////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////
	$$('#menu a').setStyles({'background-position': '0px 40px'}).addEvents({
		mouseenter: function(e){
			e.stop();
			new Fx.Tween($(this), {duration: 150, link: "cancel"}).start('background-position', '0px 160px');
		},
		
		mouseleave: function(e){
			e.stop();
			new Fx.Tween($(this), {duration: 150, link: "cancel"}).start('background-position', '0px 40px');
		}
	});
	
	/////////////////////////////////////////////////////////////////////
	/// Share! //////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////
	$$('#share img').addEvents({
		mouseenter: function(e){
			$('share_h').set('html', 'Share on ' + $(this).get('alt') + '!');
		},
		
		mouseleave: function(e){
			$('share_h').set('html', 'Share ...');
		}
	});
});
