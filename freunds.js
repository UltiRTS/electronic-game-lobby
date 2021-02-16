function frdPut(page="main",name,battle,isBtlFrd=false){
	
	if (isBtlFrd){
		document.getElementById("friendlimitingFrame"+page).innerHTML +="<div style=\"margin:1%;\" class=\"userCard\" onmouseenter=\"showFrdOptions('frdOptions"+page+name+"')\" onmouseleave=\"hideFrdOptions('frdOptions"+page+name+"')\" id=\"userCard"+page+name+"\" ><div style=\"overflow:hidden; position: absolute; height: 100%; top: 0; left:0%; width:100%; background-color: rgba(105,105,105,0.3);display:inline-block;font-size:7vh;text-transform: uppercase;filter: drop-shadow(0.4rem 0.5rem 0.2rem rgba(200,200,200,0.6));color:white;\" onclick=\"chTeams(\'"+name+"\')\" id=\"cardLabel"+page+name+"\">A</div><div class=\"freundBody\"  style=\"opacity:0.9;top:0;height:100%;position:absolute;right:0;background:rgba(33,150,243,1);width:85%;\"><span style=\"font-weight:900;font-size:2rem;\">"+name+"</span><img src=\"assets/thea.png\" style=\"position:absolute;width:80%;opacity:0.3;top:37%;left:5%;z-index:-1;\"></div><div class=\"isLeader\" id=\"cardIsLeader"+page+name+"\"  style=\"overflow:visible;position:absolute; bottom:-9%;right:-5%;background:white;padding:2%;\">Leader</div><div class=\"frdOptions\" id=\"frdOptions"+page+name+"\" style=\"background:rgba(33,150,243,0.8);visibility:hidden; top:0;position:absolute;right:0%;width:70%;height:100%;\"><div style=\"height:90%;top:5%;width:2px;background-color:white;top:5%;position:absolute;\" class=\"verticalLine\"></div><div  id='frdSubOptions1'  class=\"frdSubOptions frdSubOptionsAnim1\" onclick=\"chLeader('"+name+"')\" style=\"width:95%; position:absolute;left:-55%;\">Leader Status</div><div id='frdSubOptions2' class=\"frdSubOptions frdSubOptionsAnim2\" style=\"width:95%; position:absolute;left:-55%;\">Joint Tactics</div><div id='frdSubOptions3' class=\"frdSubOptions frdSubOptionsAnim3\" style=\"width:95%; position:absolute;left:-55%;\">Dismiss Personel</div><div id='frdSubOptions4' class=\"frdSubOptionsAnim4 frdSubOptions\" style=\"width:95%; position:absolute;left:-55%;\">Save Colleague</div></div></div>";
	}
	else{
		document.getElementById("friendlimitingFrame"+page).innerHTML +="<div class=\"userCard\" style=\"margin:1%;\" id=\"userCard"+page+name+"\" ><div style=\"overflow:hidden; position: absolute; height: 100%; top: 0; left:0%; width:100%; background-color: rgba(105,105,105,0.3);display:inline-block;font-size:7vh;\"></div><div class=\"freundBody\" style=\"opacity:0.9;width:85%;top:0;height:100%; background:rgba(33,150,243,1);position:absolute;left:15%;\"><span style=\"font-family: JuneBug2\">"+name+"</span><br><span>In "+battle+"<br> For: -\\- hr  -\\-min</span></div></div>";
	}
}

function showFrdOptions(optionID)
{

	
	// animation rerun
	var elm = document.getElementById(optionID)
	var newone = elm.cloneNode(true);
	elm.parentNode.replaceChild(newone, elm);

	//
	
	
	
	console.log('mouse over')
	window.revealFrdSubOptions=setTimeout(function(){ document.getElementById(optionID).style.visibility='visible' }, 350);
	
	//document.getElementById(optionID).innerHTML+='<! -- -->'
}

function hideFrdOptions(optionID){
	console.log('mouse leave')
	document.getElementById(optionID).style.visibility='hidden'
	clearTimeout(window.revealFrdSubOptions)
}



function aiPut(page,name){
	
	
	window.ppl[name]='a';
	document.getElementById("friendlimitingFrame"+page).innerHTML +="<div style=\"margin:1%;\" class=\"userCard\" onmouseenter=\"showFrdOptions('frdOptions"+page+name+"')\" onmouseleave=\"hideFrdOptions('frdOptions"+page+name+"')\" id=\"userCard"+page+name+"\" ><div style=\"overflow:hidden; position: absolute; height: 100%; top: 0; left:0%; width:100%; background-color: rgba(105,105,105,0.3);display:inline-block;font-size:7vh;text-transform: uppercase;filter: drop-shadow(0.4rem 0.5rem 0.2rem rgba(200,200,200,0.6));color:white;\" onclick=\"chTeams(\'"+name+"\')\" id=\"cardLabel"+page+name+"\">A</div><div class=\"freundBody\"  style=\"opacity:0.9;top:0;height:100%;position:absolute;left:15%;background:rgba(33,150,243,1);width:85%;\"><span style=\"font-weight:900;font-size:2rem;\">"+name+"</span><img src=\"assets/theaAI.png\" style=\"position:absolute;width:60%;opacity:0.3;top:37%;left:5%;z-index:-1;\"></div><div class=\"frdOptions\" id=\"frdOptions"+page+name+"\" style=\"background:rgba(33,150,243,0.8);visibility:hidden; top:0;position:absolute;right:0%;width:70%;height:100%;\"><div style=\"height:90%;top:5%;width:2px;background-color:white;top:5%;position:absolute;\" class=\"verticalLine\"></div><div  id='frdSubOptions1'  class=\"frdSubOptions frdSubOptionsAnim1\"  style=\"width:95%; position:absolute;left:-55%;\">-/-</div><div id='frdSubOptions2' class=\"frdSubOptions frdSubOptionsAnim2\" style=\"width:95%; position:absolute;left:-55%;\">Attach</div><div id='frdSubOptions3' class=\"frdSubOptions frdSubOptionsAnim3\" onclick=\"chatAIKill('"+page+"','"+name+"')\" style=\"width:95%; position:absolute;left:-55%;\">Uninit</div><div id='frdSubOptions4' class=\"frdSubOptionsAnim4 frdSubOptions\" style=\"width:95%; position:absolute;left:-55%;\">-/-</div></div></div>";

}

function frdAIKill(page,name){
	try{
		document.getElementById("userCard"+page+name).parentNode.removeChild(document.getElementById("userCard"+page+name));
		//console.log("MP btn called!")
	}
	catch(error){console.log('cant remove a ghost AI!')}
}

function frdEliminate(page,name)
{
console.log("trying to remove"+ "userCard"+page+name+"")
	try{
	document.getElementById("userCard"+page+name).parentNode.removeChild(document.getElementById("userCard"+page+name));
	//console.log("MP btn called!")
	}
	catch(error){console.log('cant remove a ghost user!')}
}

function chTeams(player){
	window.ppl[player]=nextLetter(window.ppl[player])
	chatAssignTeam()
}

function chLeader(usr){
	if(window.teamLeaders[window.ppl[usr]]!=usr){
		document.getElementById("cardIsLeader"+window.nowinBattle+usr).style.opacity="1"
		window.teamLeaders[window.ppl[usr]]=usr
		chatAssignLeader(window.ppl[usr]) //tell the function to look up the leader for this team
	}
	else{
		document.getElementById("cardIsLeader"+window.nowinBattle+usr).style.opacity="0"
		window.teamLeaders[window.ppl[usr]]='None'
	}
}

function frdTeamUpdate(playerMatrix){
	i=0
	
	console.log('frdTeamUpdate called!')
	while (i<playerMatrix.length)
	{
		try{
			document.getElementById("cardLabel"+window.nowinBattle+playerMatrix[i]).innerHTML=playerMatrix[i+1]
		}
		catch(error){
			console.log('user '+playerMatrix[i]+' left since last designation!')
		}
		i=i+2
	}
}

function nextLetter(s){
	return s.replace(/([a-zA-Z])[^a-zA-Z]*$/, function(a){
		var c= a.charCodeAt(0);
		switch(c){
			case 90: return 'A';
			case 122: return 'a';
			default: return String.fromCharCode(++c);
		}
	});
}
window.teamLeaders={}
window.ppl={};
frdPut("main",'userA','A\'s gem');

