//<div class='gem' style='display:none;position:absolute;height:3vh;width:3vh;transform: rotate(45deg);filter: drop-shadow(7px 0px 3px red);'><div style='position:absolute;background:rgba(243,33,33,1);rgba(243,33,33,1);height:0.5vh;width:0.5vh;top:0vh; '></div><div class='gemRing' style='position:absolute;;border: 0.1vh solid rgba(243,33,33,1);'></div></div>

function showGem(Name){
	document.getElementById('gem'+Name).style.display=''
}

function killGem(Name){
	document.getElementById('gem'+Name).style.display = "none";
}