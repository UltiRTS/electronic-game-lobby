//<div class='gem' id="gemName" style='display:none;position:absolute;height:3vh;width:3vh;transform: rotate(45deg);filter: drop-shadow(7px 0px 3px red);'><div style='position:absolute;background:rgba(243,33,33,1);rgba(243,33,33,1);height:0.5vh;width:0.5vh;top:0vh; '></div><div class='gemRing' style='position:absolute;;border: 0.1vh solid rgba(243,33,33,1);'></div></div>

function showGem(Name){
	try{window.activeGems[Name]+=1}
	catch{window.activeGems[Name]=1}
	document.getElementById('gem'+Name).style.display=''
}

function killGem(Name){ //when the final gem destination is reached by the user, the destination use this to kill its gem and any gem that's laid on the upper path. since multiple different destinations might share the same path, we do not wish to kill their gems. Thus a counter is established and when the upper path's gem count reaches zero, the upper path's gem is killed.
	window.activeGems[Name]-=1
	if(window.activeGems[Name]<=0){document.getElementById('gem'+Name).style.display = "none";}
}

function killAllGem(Name){ //used by a destination to kill all of its gems if they have multiple gems registered. useful for chat and ??nothing else??
	window.activeGems[Name]=0
	if(window.activeGems[Name]<=0){document.getElementById('gem'+Name).style.display = "none";}
}