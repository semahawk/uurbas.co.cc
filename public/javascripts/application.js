// ---------------------------------------------------------------------
//                              Utils
// ---------------------------------------------------------------------
var Utils = {
	// 
	// name: Utils.getElem
	// @param i - id of element
	// @return this is just for making work easier :D
	getElem: function(i){
		return document.getElementById(i);
	},
	
	// 
	// name: Utils.toggleElem
	// @param toggleId - used to change '+' into '-' and vice versa
	//        divId - the id of div that's gonna disappear
	// @return changes the display of passed div
	toggleElem: function(divId){
		// If this is a box in bar
		if (divId.indexOf('box') != -1){
			var toggleId = divId.replace(/box/gi, 'toggle');
			this.getElem(toggleId).innerHTML = (this.getElem(toggleId).innerHTML == '-') ? '+' : '-';
			var cookie = Cookie.read('expanded_boxes');
			var boxName = divId.replace('box:', '');
			var oldValue = (this.getElem(divId).style.display == '') ? '1' : '0';
			var newValue = (this.getElem(divId).style.display == '') ? '0' : '1'
			var newCookieValue = cookie.replace(boxName + ":" + oldValue, boxName + ":" + newValue);
			Cookie.new('expanded_boxes', newCookieValue, 365, '/')
		}
		
		// Toggle the element
		this.getElem(divId).style.display = (this.getElem(divId).style.display == '') ? 'none' : '';
	},
	
	// 
	// name: Utils.checkToggledElems
	// @param
	// @return toggles divs saved in cookies
	checkToggledDivs: function(){
		var cookie = Cookie.read('expanded_boxes');
		elems = cookie.split('/');
		
		for (var i = 0; i < elems.length; i++){
			if (elems[i].split(':')[1] == '0'){
				this.toggleElem('box:' + elems[i].split(':')[0]);
			}
		}
	},
	
	// 
	// name: Utils.includeJS
	// @param
	// @return
	includeJS: function(files){
		for (var i = 0; i < files.length; i++){
			document.write('<script type="text/javascript" src="/javascripts/' + files[i] + '.js"></script>');
		}
	},
	
	// 
	// name: Utils.includeCSS
	// @param 
	// @return 
	includeCSS: function(files){
		for (var i = 0; i < files.length; i++){
			document.write('<link href="/stylesheets/' + files[i] + '.css" rel="stylesheet" type="text/css" />');
		}
	},
	
	putFirefoxNotice: function(){
		alert(navigator.userAgent);
	},
};

// ---------------------------------------------------------------------
//                              Cookies
// ---------------------------------------------------------------------
var Cookie = {
	new: function(name, value, days, path){
		var expiration = new Date();
		expiration.setDate(expiration.getDate() + days);
		document.cookie = name + "=" + escape(value) + 
			((days) ? ";expires=" + expiration.toUTCString() : "") +
			((path) ? ";path =" + path : '');
	},
	
	read: function(name){
		if (document.cookie.length > 0){
			var start = document.cookie.indexOf(name + "=");
			if (start != -1){
				start = start + name.length + 1;
				var end = document.cookie.indexOf(";", start);
				if (end == -1) end = document.cookie.length;
				return unescape(document.cookie.substring(start, end));
			}
		}
		return "";
	},
	
	destroy: function(name){
		this.create(name, "", -1);
	}
};

// Making source code cleaner
var jsFiles = new Array("rails", "jquery.min");
Utils.includeJS(jsFiles);
Utils.putFirefoxNotice();
