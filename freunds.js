function frdPut(page="main",name,battle,isBtlFrd=false){
	
	if (isBtlFrd){
		document.getElementById("friendlimitingFrame"+page).innerHTML +="<div onclick=\"chTeams(\'"+name+"\')\" style=\"margin:1%;\" class=\"userCard\" id=\"userCard"+page+name+"\" ><div style=\"overflow:hidden; position: absolute; height: 100%; top: 0; left:0%; width:15%; background-color: white;display:inline-block;font-size:7vh;\" id=\"cardLabel"+page+name+"\">A</div><div style=\"position:absolute;left:15%;\"><span style=\"font-family: JuneBug2\">"+name+"</span><br><span>In "+battle+"<br> For: -\\- hr  -\\-min</span></div></div>";
	}
	else{
		document.getElementById("friendlimitingFrame"+page).innerHTML +="<div class=\"userCard\" style=\"margin:1%;\" id=\"userCard"+page+name+"\" ><div style=\"overflow:hidden; position: absolute; height: 100%; top: 0; left:0%; width:15%; background-color: white;display:inline-block;font-size:7vh;\"></div><div style=\"position:absolute;left:15%;\"><span style=\"font-family: JuneBug2\">"+name+"</span><br><span>In "+battle+"<br> For: -\\- hr  -\\-min</span></div></div>";
	}
}

function frdEliminate(page="main",name)
{
console.log("trying to remove"+ "userCard"+page+name+"")
	document.getElementById("userCard"+page+name).parentNode.removeChild(document.getElementById("userCard"+page+name));
	console.log("MP btn called!")
}

function chTeams(player){
	window.ppl[player]=nextLetter(window.ppl[player])
	chatAssignTeam()
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

window.ppl={};
frdPut("main",'userA','A\'s gem');

