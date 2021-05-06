window.isLoading=false
function loading(activateLoading=true,shortLoading=true)
{
	if(window.isLoading||!activateLoading){
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
	else {
		document.getElementById("loading").style.visibility="visible";
		if(shortLoading){
		window.loadingTimer=setTimeout(loading, 10000);}
		window.isLoading=true
		window.loadingCursor=setInterval(animateCur, 100);
	}
}

function animateCur(){
	if (document.getElementById("flashy_cursor").style.visibility=="visible")
		{document.getElementById("flashy_cursor").style.visibility="hidden"}
	else{
		document.getElementById("flashy_cursor").style.visibility="visible"
	}
}
