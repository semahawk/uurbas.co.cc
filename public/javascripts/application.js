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
			$('share_tip').set('text', $(this).get('alt')).setStyle('padding', '0px 0px 0px ' + ($(this).getOffsets().x - $('share_tip').getOffsets().x) + 'px');
		},
		
		mouseleave: function(e){
			$('share_tip').set('html', '&nbsp;');
		}
	});
});
