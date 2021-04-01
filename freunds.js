
function refreshBtlFrd(){
	removeAllChildNodes('friendlimitingFrame'+window.nowinBattle)
	for (var usr in window.ppl){
		if(usr.startsWith('GPT')||usr.startsWith('Chicken')){
			aiPut(window.nowinBattle,usr)
			document.getElementById("cardLabel"+window.nowinBattle+usr).innerHTML=window.ppl[usr]
		}
		else if (usr.startsWith('Autohost')){
			console.log('not showing autohost account')
		}
		else{
			frdPut(window.nowinBattle,usr,'A\'s gem',true);
			document.getElementById("cardLabel"+window.nowinBattle+usr).innerHTML=window.ppl[usr]
		}
		
	}
	try{
		document.getElementById("cardIsLeader"+window.nowinBattle+window.teamLeaders).style.opacity="1"
	}
	catch(err){console.log('cant find the leader!')}
}

function frdPut(page="main",name,battle,isBtlFrd=false){
	
	if (isBtlFrd){
		document.getElementById("friendlimitingFrame"+page).innerHTML +="<div style=\"margin:1%;\" class=\"userCard\" onmouseenter=\"showFrdOptions('frdOptions"+page+name+"')\" onmouseleave=\"hideFrdOptions('frdOptions"+page+name+"')\" id=\"userCard"+page+name+"\" ><div style=\"overflow:hidden; position: absolute; height: 100%; top: 0; left:0%; width:100%; background-color: rgba(105,105,105,0.3);display:inline-block;font-size:7vh;text-transform: uppercase;filter: drop-shadow(0.4rem 0.5rem 0.2rem rgba(200,200,200,0.6));color:white;\" onclick=\"chTeams(\'"+name+"\')\" oncontextmenu=\"chTeamsDown(\'"+name+"\')\" id=\"cardLabel"+page+name+"\">A</div><div class=\"freundBody\"  style=\"opacity:0.9;top:0;height:100%;position:absolute;right:0;background:rgba(33,150,243,1);width:85%;\"><span style=\"font-weight:900;font-size:2rem;\">"+name+"</span><img src=\"assets/thea.png\" style=\"position:absolute;width:80%;opacity:0.3;top:37%;left:5%;z-index:-1;\"></div><div class=\"isLeader\" id=\"cardIsLeader"+page+name+"\"  style=\"overflow:visible;position:absolute; bottom:-9%;right:-5%;background:white;padding:2%;\">Leader</div><div class=\"frdOptions\" id=\"frdOptions"+page+name+"\" style=\"overflow:hidden;background:rgba(33,150,243,0.8);visibility:hidden; top:0;position:absolute;right:0%;width:70%;height:100%;\"><div style=\"height:90%;top:5%;width:2px;background-color:white;top:5%;position:absolute;\" class=\"verticalLine\"></div><div  id='frdSubOptions1'  class=\"frdSubOptions frdSubOptionsAnim1\" onclick=\"chLeader('"+name+"')\" oncontextmenu=\"chLeader('"+name+"')\" style=\"width:200%; position:absolute;left:8%;\">Leader Status</div><div id='frdSubOptions2' class=\"frdSubOptions frdSubOptionsAnim2\" style=\"width:200%; position:absolute;left:8%;top:25%;\">Joint Tactics</div><div id='frdSubOptions3' class=\"frdSubOptions frdSubOptionsAnim3\" style=\"width:200%; position:absolute;left:8%;top:50%;\">Dismiss Personel</div><div id='frdSubOptions4' class=\"frdSubOptionsAnim4 frdSubOptions\" style=\"width:200%; position:absolute;left:8%;top:75%;\">Save Colleague</div></div></div>";
	}
	else{
		document.getElementById("friendlimitingFrame"+page).innerHTML +="<div class=\"userCard\" style=\"margin:1%;\" id=\"userCard"+page+name+"\" ><div style=\"overflow:hidden; position: absolute; height: 100%; top: 0; left:0%; width:100%; background-color: rgba(105,105,105,0.3);display:inline-block;font-size:7vh;\"></div><div class=\"freundBody\" style=\"opacity:0.9;width:85%;top:0;height:100%; background:rgba(33,150,243,1);position:absolute;left:15%;\"><span style=\"font-family: JuneBug2\">"+name+"</span><br><span>In "+battle+"<br> For: -\\- hr  -\\-min</span></div></div>";
	}
}

function showFrdOptions(optionID)
{

	console.log('mouse over')
	window.revealFrdSubOptions=setTimeout(function(){ document.getElementById(optionID).style.visibility='visible' }, 200);
	
	//document.getElementById(optionID).innerHTML+='<! -- -->'
}

function hideFrdOptions(optionID){
	console.log('mouse leave')
	document.getElementById(optionID).style.visibility='hidden'
	clearTimeout(window.revealFrdSubOptions)
}



function aiPut(page,name){
	
	if (!window.ppl.hasOwnProperty(name)){
		window.ppl[name]='a';
	}
	
	document.getElementById("friendlimitingFrame"+page).innerHTML +="<div style=\"margin:1%;\" class=\"userCard\" onmouseenter=\"showFrdOptions('frdOptions"+page+name+"')\" onmouseleave=\"hideFrdOptions('frdOptions"+page+name+"')\" id=\"userCard"+page+name+"\" ><div style=\"overflow:hidden; position: absolute; height: 100%; top: 0; left:0%; width:100%; background-color: rgba(105,105,105,0.3);display:inline-block;font-size:7vh;text-transform: uppercase;filter: drop-shadow(0.4rem 0.5rem 0.2rem rgba(200,200,200,0.6));color:white;\" onclick=\"chTeams(\'"+name+"\')\" oncontextmenu=\"chTeamsDown(\''+name+\'')\" id=\"cardLabel"+page+name+"\">A</div><div class=\"freundBody\"  style=\"opacity:0.9;top:0;height:100%;position:absolute;left:15%;background:rgba(33,150,243,1);width:85%;\"><span style=\"font-weight:900;font-size:2rem;\">"+name+"</span><img src=\"assets/theaAI.png\" style=\"position:absolute;width:60%;opacity:0.3;top:37%;left:5%;z-index:-1;\"></div><div class=\"frdOptions\" id=\"frdOptions"+page+name+"\" style=\"overflow:hidden; background:rgba(33,150,243,0.8);visibility:hidden; top:0;position:absolute;right:0%;width:70%;height:100%;\"><div style=\"height:90%;top:5%;width:2px;background-color:white;top:5%;position:absolute;\" class=\"verticalLine\"></div><div  id='frdSubOptions1'  class=\"frdSubOptions \"  style=\"width:200%; position:absolute;left:8%;\">-/-</div><div id='frdSubOptions2' class=\"frdSubOptions \" style=\"top:25%;width:200%; position:absolute;left:8%;\">Attach</div><div id='frdSubOptions3' class=\"frdSubOptions \" onclick=\"chatAIKill('"+name+"')\" style=\"top:50%;width:200%; position:absolute;left:8%;\">Uninit</div><div id='frdSubOptions4' class=\" frdSubOptions\" style=\"top:75%;width:200%; position:absolute;left:8%;\">-/-</div></div></div>";

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
	console.log('!!!!!!!!!!!!!!!!!!!!updating '+player+' to '+window.ppl[player]+' the next letter is '+nextLetter(window.ppl[player]))
	window.ppl[player]=nextLetter(window.ppl[player])
	console.log('now its '+window.ppl[player])
	chatAssignTeam()
}
function chTeamsDown(player){
	console.log('!!!!!!!!!!!!!!!!!!!!updating '+player+' to '+window.ppl[player]+' the previous letter is '+previousLetter(window.ppl[player]))
	window.ppl[player]=previousLetter(window.ppl[player])
	console.log('now its '+window.ppl[player])
	chatAssignTeam()
}


function chLeader(usr){
	if(window.teamLeaders!=usr){
		
		
		chatAssignLeader(usr) //tell the function to look up the leader for this team
	}
	else{
		document.getElementById("cardIsLeader"+window.nowinBattle+usr).style.opacity="0"
		window.teamLeaders='None'
	}
}

function frdTeamUpdatefromAutohost(playerMatrix){
	for (var usr in window.ppl){  //apply human player config from the autohost but not sync
		i=0
		while (i<playerMatrix.length)
		{
			if(playerMatrix[i]==usr){
				window.ppl[usr]=playerMatrix[i+1]
			}
			
			i=i+2
		}
	}
	while (i<playerMatrix.length)   //sync the gpts from the autohost but not ppl
	{
		if(playerMatrix[i].startsWith('GPT')||playerMatrix[i].startsWith('Chicken')){
			window.ppl[playerMatrix[i]]=playerMatrix[i]+1
		}
	}
	refreshBtlFrd()
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
function previousLetter(s){
	return s.replace(/([a-zA-Z])[^a-zA-Z]*$/, function(a){
		var c= a.charCodeAt(0);
		switch(c){
			case 90: return 'A';
			case 122: return 'a';
			default: return String.fromCharCode(--c);
		}
	});
}
window.teamLeaders=''
window.ppl={};
frdPut("main",'userA','A\'s gem'); 
