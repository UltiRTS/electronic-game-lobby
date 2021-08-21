function inputGrabber(heading="unifiedInputField",subHeading="Things typed will be retrieved by the caller",exampleInput="main",callback)
{	
	
	document.getElementById('inputGrabberBG').className='grabberArise';
	playFX()
	
	document.getElementById('grabberValue').setAttribute('onchange',callback+'();inputReleaser();');
	document.getElementById("inputGrabber").style.display='';
	document.getElementById("grabberTitle").innerHTML = heading;
	document.getElementById("grabberSubTitle").innerHTML = subHeading;
	document.getElementById("exampleForm").innerHTML = exampleInput;
}

function inputReleaser()
{

	document.getElementById('inputGrabberBG').className='grabberGone';
	playFX()
	setTimeout(function (){document.getElementById("inputGrabber").style.display = "none";},500 ) 
	document.getElementById("grabberValue").value="";
	
}



