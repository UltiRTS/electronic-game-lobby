window.activeLoadings=0
function loading(){
	playFX()
	window.activeLoadings++;
	document.getElementById("loading").style.display='';
	
	setTimeout(unloading, 30000);
	document.getElementById("loadingBG").className='loadingArise'

	
}

function unloading(){
	
	window.activeLoadings--;
	if(window.activeLoadings<0){
		window.activeLoadings=0;
		return}
	if(window.activeLoadings==0)
	{playFX()
		document.getElementById("loadingBG").className='loadingGone'
		setTimeout(function(){document.getElementById("loading").style.display='none';}, 1000);
		window.activeLoadings=0
	}

}
