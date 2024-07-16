function resizeH(){ 
	
	try {
		
			//아이프레임 Document		 
			var obj = document.getElementById("ifr01")					
			//var doc = obj.contentWindow.document; 
			var doc = obj.contentDocument || obj.contentWindow.document; 			
		 	//익스플로러		
		 	if (/MSIE/.test(navigator.userAgent)) {
		  var h = doc.body.scrollHeight;  
		 	// 사파리, 파폭 등
		 	} else {
		  var s = doc.body.appendChild(document.createElement('DIV'))
		  s.style.clear = 'both';
		  var h = s.offsetTop;
		  s.parentNode.removeChild(s);
		 	}		
		 	if(h <= document.getElementById("ifr01").height){
			  obj.style.height = document.getElementById("ifr01").height + 50 + 'px';
			 }else{
			  obj.style.height = h + 50 + 'px';
		 	}		 	
		 
	}	
	catch (ex) { }			
	setTimeout("resizeH()", 0);
	
}

//if (parent != window)
//parentRedirect(location.href);
resizeH();	
			
			
function resizeH02(){ 
	
	try {
		
			//아이프레임 Document		 
			var obj02 = document.getElementById("ifr02")					
			//var doc = obj.contentWindow.document; 
			var doc02 = obj02.contentDocument || obj02.contentWindow.document; 			
		 	//익스플로러		
		 	if (/MSIE/.test(navigator.userAgent)) {
		  var h02 = doc02.body.scrollHeight;  
		 	// 사파리, 파폭 등
		 	} else {
		  var s02 = doc02.body.appendChild(document.createElement('DIV'))
		  s02.style.clear = 'both';
		  var h02 = s02.offsetTop;
		  s02.parentNode.removeChild(s02);
		 	}		
		 	if(h02 <= document.getElementById("ifr02").height){
			  obj02.style.height = document.getElementById("ifr02").height + 50 + 'px';
			 }else{
			  obj02.style.height = h02 + 50 + 'px';
		 	}		 	
		 
	}	
	catch (ex) { }			
	setTimeout("resizeH02()", 0);
	
}

//if (parent != window)
//parentRedirect(location.href);
resizeH02();				