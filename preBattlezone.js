function lobbyFlush(battleid, type, natType, founder, ip, port, maxPlayer, passworded, rank, mapHesh, engineName, engineVersion, map, title, gameName, channel)
{
	console.log("joined battle"+title)
	document.getElementById("lobbyContent").style.visibility = "hidden"; //hide lobby page once user goes to prebattle panel
	document.getElementById("prebattle").style.visibility = "visible";
	document.getElementById("pregameTitle").innerHTML=title;
    //document.getElementById("hostSays").innerHTML ="afk 3sec for dinnar";
	document.getElementById('startGem').setAttribute( "onclick", "preBtlStartGem("+window.nowinBattle+")" );
	document.getElementById('exitGem').setAttribute( "onclick", "preBtlExitGem("+window.nowinBattle+")" );
	if(window.gameStatus[window.nowHostedby]){
		document.getElementById('gameProgress').style.visibility="visible";
	}
	else{document.getElementById('gameProgress').style.visibility="hidden";}
}

function preBtlExitGem(bID)
{
    window.client.leaveBattle();  //inform lobby server
	chatLeave(bID)  //inform lobby chat server
	chatLeaveBtl()  //inform autohost
}

function preBtlStartGem(bID)
{	if (window.gameStatus[window.nowHostedby]){
	chatRejoin(bID)
	
}
	else{
	chatStartBtl(bID)}
}

function preBattleListMap(pool)
{
	
		if(document.getElementById('pregameInfo').contains(document.getElementsByClassName('map')[0]) ){
			console.log('map already listed')
		}
		else{var map = document.createElement('div');
			map.className="map";
			map.setAttribute( "style", "position:relative; height:40%;width:100%;")
			map.innerHTML="<br><div id=\"title\" style=\"filter: drop-shadow(0.4rem 0.5rem 0.2rem rgba(200,200,200,0.6)); mix-blend-mode: screen;height:3vw;color:white;background:rgba(255,255,255,0.5);\"><h1 style=\"color:black;position:absolute;left:4vw;bottom:0vw;margin:0vw;font-size:1.9vw;\">Maps</h1><img src=\"assets/checks.png\" style=\"position:absolute;width:5vw;left:-1vw;top:-0.3vw;\"></div><div class=\"slidingMenu\" style=\"overflow: visible; width:20%;height:100%;top:5vw;\"><div style=\"filter: drop-shadow(0.4rem 0.5rem 0.2rem rgba(200,200,200,0.6)); overflow: hidden;\" onclick=\"chatVoteMap(\'"+pool[0]+"\')\" class=\"slidingMenuSub1\"><span style=\" font-family: JuneBug2; position:absolute; top:40%;left:25%;\">"+pool[0].replace(/🦔/g, " ")+"</span></div><div style=\"filter: drop-shadow(0.4rem 0.5rem 0.2rem rgba(200,200,200,0.6)); overflow: hidden; \" onclick=\"chatVoteMap(\'"+pool[1]+"\')\" class=\"slidingMenuSub2\"><span style=\"font-family: JuneBug2; position:absolute; top:40%;left:25%;\">"+pool[1].replace(/🦔/g, " ")+"</span></div><div class=\"slidingMenuSub3\" onclick=\"chatVoteMap(\'"+pool[2]+"\')\" style=\"overflow: hidden; filter: drop-shadow(0.4rem 0.5rem 0.2rem rgba(200,200,200,0.6));\"><span style=\"font-family: JuneBug2; position:absolute; top:40%;left:25%;\">"+pool[2].replace(/🦔/g, " ")+"</span></div><div onclick=\"chatVoteMap(\'"+pool[3]+"\')\" style=\"filter: drop-shadow(0.4rem 0.5rem 0.2rem rgba(200,200,200,0.6)); overflow: hidden;\" class=\"slidingMenuSub4\"><span style=\"font-family: JuneBug2; position:absolute; top:40%;left:25%;\">"+pool[3].replace(/🦔/g, " ")+"</span></div><div style=\"filter: drop-shadow(0.4rem 0.5rem 0.2rem rgba(200,200,200,0.6)); overflow: hidden;\" class=\"slidingMenuSub5\" onclick=\"chatVoteMap(\'"+pool[4]+"\')\"><span style=\"font-family: JuneBug2; position:absolute; top:40%;left:25%;\">"+pool[4].replace(/🦔/g, " ")+"</span></div></div>"
			map.id="map"
			document.getElementById("pregameInfo").appendChild(map);
			_mapDonutPut(pool)}
	
	
}

function prebattleUpdateMap(mapName){
	document.getElementById('pregameMap').innerHTML=mapName
}

function _mapDonutPut(pool)
{
document.getElementById("map").innerHTML +="<div class=\"chart-container\" style=\"position: relative; width:70%;left:27%;\"><canvas id=\"mapPoll\"></canvas></div>"

var ctx = document.getElementById("mapPoll");
window.mapPoll = new Chart(ctx, {
    type: 'doughnut',
    data: {
		labels: [pool[0].replace(/🦔/g, " "), pool[1].replace(/🦔/g, " "),pool[2].replace(/🦔/g, " "),pool[3].replace(/🦔/g, " "),pool[4].replace(/🦔/g, " ")],
        datasets: [{
            label: '# of Votes',
            data: [1,1,2,3,4],
            backgroundColor: [
                'rgba(255, 255, 255, 0.2)',
                'rgba(255, 255, 255, 0.4)',
		'rgba(255, 255, 255, 0.6)',
		'rgba(255, 255, 255, 0.8)',
		'rgba(255, 255, 255, 1)',
            ],
            borderColor: [
                'rgba(255, 255, 255, 0.2)',
                'rgba(255, 255, 255, 0.4)',
                'rgba(255, 255, 255, 0.6)',
                'rgba(255, 255, 255, 0.8)',
                'rgba(255, 255, 255, 1)',

            ],
            borderWidth: 1
        }]
    },
    options: {
    legend: {
     onClick: (e, i) => {
      //console.log(i.text+" clicked");
		 chatVoteMap(i.text.replace(/ /g, "🦔"))
	  
    },
            display: true,
            labels: {
                fontColor: 'rgba(255, 255, 255,1)',
                fontSize: 12,
            }
        },



        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

};



function preBtlPollPut(pollName,pollID,count=0.1)
{
	var newPoll = document.createElement('div');
	//btlType.className="prebattlePolls";
	newPoll.style="position:relative;width:100%;";
	
	newPoll.innerHTML = '<br><div id="opTypeTitle'+pollID+'" style=\"filter: drop-shadow(0.4rem 0.5rem 0.2rem rgba(200,200,200,0.6)); mix-blend-mode: screen;height:3vw;color:white;background:rgba(255,255,255,0.5);\"><h1 style=\"color:black;position:absolute;left:4vw;bottom:0vw;margin:0vw;font-size:1.9vw;\">Poll</h1><img src=\"assets/checks.png\" style=\"position:absolute;width:5vw;left:-1vw;top:-0.3vw;\"></div></br><span onclick="preBtlVote('+pollID+')" style="cursor: default;color:white; margin: 0px;background:rgb(33,150,243);">'+pollName+'</span><div id="typeTeam" style="cursor: default;filter: drop-shadow(0.4rem 0.5rem 0.2rem rgba(200,200,200,0.6)); position:absolute;width:95%; background:white;height:2%;"><div id="'+pollID+'bar" style="cursor: default;position:absolute;height:100%;width:50%;background:rgb(33,150,243);"></div></div>';
	document.getElementById("pregameInfo").appendChild(newPoll);

}



function preBtlPollUpdate(id,count=0.1)
{
	
	document.getElementById(id+"bar").style.width=count
	
}


function preBtlVote(pollID){
	
	
	for (var key in window.polls){
		if (window.polls[key]['id']==pollID){
			chatVote(key)
		}
	}
}

function _mapDonutUpdate()
{

	window.mapPoll.data.datasets[0].data[2] = 80;
	window.mapPoll.data.labels[2] = "Newly Added";
	window.mapPoll.update();
    window.mapPoll.data.datasets[0].data[1] = 80;
    window.mapPoll.update();

}



function initPrebtlZone(){

	
	var btlType = document.createElement('div');
	//btlType.className="prebattlePolls";
	btlType.style="position:relative;width:100%;";
	btlType.innerHTML = '<div id="opTypeTitle" style="cursor: default;color:white;"><h1>Operations</h1></div><hr></hr></br><span style="cursor: default;color:white; margin: 0px;background:rgb(33,150,243);">Autobalance</span><div id="typeTeam" style="cursor: default;filter: drop-shadow(0.4rem 0.5rem 0.2rem rgba(200,200,200,0.6)); position:absolute;width:95%; background:white;height:2%;"><div style="cursor: default;position:absolute;height:100%;width:50%;background:rgb(33,150,243);"></div></div></br></br></br><span style="cursor: default;color:white; margin: 0px;background:rgb(33,150,243);">Rogue Teams</span><div id="typeCoop" style="cursor: default;filter: drop-shadow(0.4rem 0.5rem 0.2rem rgba(200,200,200,0.6)); position:absolute;width:95%; background:white;height:2%;"><div style="cursor: default;position:absolute;height:100%;width:20%;background:rgb(33,150,243);"></div></div></br></br></br><span style="cursor: default;color:white; margin: 0px;background:rgb(33,150,243);">FFA Balance</span><div id="typeFAFAFA" style="cursor: default;filter: drop-shadow(0.4rem 0.5rem 0.2rem rgba(200,200,200,0.6)); position:absolute;width:95%; background:white;height:2%;"><div style="cursor: default;position:absolute;height:100%;width:80%;background:rgb(33,150,243);"></div></div>';
	document.getElementById("pregameInfo").appendChild(btlType);
	
	
	
	
}

function removeAllChildNodes(parent) {
	while (document.getElementById(parent).firstChild) {
		document.getElementById(parent).removeChild(document.getElementById(parent).firstChild);
	}
}


function pollUpdate()
{


}
