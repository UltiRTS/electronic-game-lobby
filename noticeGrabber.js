window.isNoticing=false
function notice(runNotice=false,stopperTitle='',stopperTxt='',cancelCallback=function(){return},helpContext='')
{
	if(window.isNoticing ||!runNotice){
		document.getElementById("infoDialog").style.visibility="hidden";
		window.isNoticing=false
		}
	else {
		window.isNoticing=true
		document.getElementById("infoDialog").style.visibility="visible";
		
		document.getElementById("infoTitle").innerHTML=stopperTitle;
		document.getElementById("noticeTxt").innerHTML=stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt+stopperTxt;
	}
}

