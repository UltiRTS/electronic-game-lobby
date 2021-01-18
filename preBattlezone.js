function lobbyFlush(battleid, type, natType, founder, ip, port, maxPlayer, passworded, rank, mapHesh, engineName, engineVersion, map, title, gameName, channel)
{
	console.log("joined battle"+title)
	document.getElementById("lobbyContent").style.visibility = "hidden"; //hide lobby page once user goes to prebattle panel
	document.getElementById("prebattle").style.visibility = "visible";
	document.getElementById("pregameTitle").innerHTML ="❱ "+title;
    document.getElementById("hostSays").innerHTML ="afk 3sec for dinnar";
	document.getElementById('startGem').setAttribute( "onclick", "startGem("+window.nowinBattle+")" );
	document.getElementById('exitGem').setAttribute( "onclick", "exitGem("+window.nowinBattle+")" );
}

function exitGem(bID)
{
    window.client.leaveBattle();  //inform lobby server
	chatLeave(bID)  //inform lobby chat server
	chatLeaveBtl()  //inform autohost
}

function startGem(bID)
{
	chatStartBtl(bID)
}

function preBattleListMap(pool)
{
	var map = document.createElement('div');
	map.className="map";
	map.setAttribute( "style", "position:relative; height:40%;width:100%;")
	map.innerHTML="<br><div id=\"title\" style=\"color:white;\"><h1>Maps</h1></div><hr></hr><div class=\"slidingMenu\" style=\"overflow: visible; width:20%;height:100%\"><div style=\"filter: drop-shadow(0.3rem 0.3rem 0.2rem #9B9B9B); overflow: hidden;\" onclick=\"chatVoteMap(\'"+pool[0]+"\')\" class=\"slidingMenuSub1\"><span style=\" font-family: JuneBug2; position:absolute; top:40%;left:25%;\">"+pool[0]+"</span></div><div style=\"filter: drop-shadow(0.3rem 0.3rem 0.2rem #9B9B9B); overflow: hidden; \" onclick=\"chatVoteMap(\'"+pool[1]+"\')\" class=\"slidingMenuSub2\"><span style=\"font-family: JuneBug2; position:absolute; top:40%;left:25%;\">"+pool[1]+"</span></div><div class=\"slidingMenuSub3\" onclick=\"chatVoteMap(\'"+pool[2]+"\')\" style=\"overflow: hidden; filter: drop-shadow(0.3rem 0.3rem 0.2rem #9B9B9B);\"><span style=\"font-family: JuneBug2; position:absolute; top:40%;left:25%;\">"+pool[2]+"</span></div><div onclick=\"chatVoteMap(\'"+pool[3]+"\')\" style=\"filter: drop-shadow(0.3rem 0.3rem 0.2rem #9B9B9B); overflow: hidden;\" class=\"slidingMenuSub4\"><span style=\"font-family: JuneBug2; position:absolute; top:40%;left:25%;\">"+pool[3]+"</span></div><div style=\"filter: drop-shadow(0.3rem 0.3rem 0.2rem #9B9B9B); overflow: hidden;\" class=\"slidingMenuSub5\" onclick=\"chatVoteMap(\'"+pool[4]+"\')\"><span style=\"font-family: JuneBug2; position:absolute; top:40%;left:25%;\">"+pool[4]+"</span></div></div>"
	map.id="map"
	document.getElementById("pregameInfo").appendChild(map);
	_mapDonutPut(pool)
}



function _mapDonutPut(pool)
{
document.getElementById("map").innerHTML +="<div class=\"chart-container\" style=\"position: relative; width:70%;left:27%;\"><canvas id=\"mapPoll\"></canvas></div>"

var ctx = document.getElementById("mapPoll");
window.mapPoll = new Chart(ctx, {
    type: 'doughnut',
    data: {
		labels: [pool[0], pool[1],pool[2],pool[3],pool[4]],
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
	  chatVoteMap(i.text)
	  
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



function _pollPut(pollName)
{
var newPoll = document.createElement('div');
newPoll.className="prebattlePolls";
newPoll.style="height:10%; width:100%; position:relative;";
newPoll.innerHTML = "<div id=\"theBar\" style=\"height:80%; width:80%; position:absolute;\"><div id=\" "+pollName+"yesYesYes\" style=\"left:0%; height:30%; width:50%; position:absolute;background-color: #FFFFFF\"></div><div id=\""+pollName+"noU\" style=\"right:0; height:30%; width:50%; position:absolute; overflow:hidden\"><span style=\"position: absolute; top: -50%; color: white; font-size:2vw;\">///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////<span></span></span></div></div><p style=\"left:0%;top:10%; position:absolute;color: #FFFFFF\">Satisfying: changing battle name to A?</p>";

document.getElementById("prebattle").appendChild(newPoll);

}


function _mapDonutUpdate()
{

	window.mapPoll.data.datasets[0].data[2] = 80;
	window.mapPoll.data.labels[2] = "Newly Added";
	window.mapPoll.update();
    window.mapPoll.data.datasets[0].data[1] = 80;
    window.mapPoll.update();

}





function removeAllChildNodes(parent) {
	while (document.getElementById(parent).firstChild) {
		document.getElementById(parent).removeChild(document.getElementById(parent).firstChild);
	}
}


function pollUpdate()
{


}
