window.isLoading=false
function loading(activateLoading='undefined',shortLoading=true)

{
	if(activateLoading=='undefined'&&window.isLoading==false){
				document.getElementById("loading").style.visibility="visible";
		if(shortLoading){window.loadingTimer=setTimeout(loading, 10000);}
		window.isLoading=true
		window.loadingCursor=setInterval(animateCur, 100);
	}

	
	else {
		document.getElementById("loading").style.visibility="hidden";
		clearInterval(window.loadingTimer)
		clearInterval(window.loadingCursor)
		window.isLoading=false
		document.getElementById("flashy_cursor").style.visibility="hidden"
		window.loadingCallback()
		window.loadingCallback=function (){
			return
			}
	}
	
	if(activateLoading==true){
				document.getElementById("loading").style.visibility="visible";
		if(shortLoading){window.loadingTimer=setTimeout(loading, 10000);}
		window.isLoading=true
		window.loadingCursor=setInterval(animateCur, 100);
	}

	
	else {
		document.getElementById("loading").style.visibility="hidden";
		clearInterval(window.loadingTimer)
		clearInterval(window.loadingCursor)
		window.isLoading=false
		document.getElementById("flashy_cursor").style.visibility="hidden"
		window.loadingCallback()
		window.loadingCallback=function (){
			return
			}
	}
	
	
	
	
	
}

function animateCur(){
	if (document.getElementById("flashy_cursor").style.visibility=="visible")
		{document.getElementById("flashy_cursor").style.visibility="hidden"}
	else{
		document.getElementById("flashy_cursor").style.visibility="visible"
	}
}
