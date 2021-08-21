function lobbyFlush(battleid, type, natType, founder, ip, port, maxPlayer, passworded, rank, mapHesh, engineName, engineVersion, map, title, gameName, channel)
{
	//console.log("joined battle"+title)
	document.getElementById("panel").style.display = "none"; //hide lobby page once user goes to prebattle panel
	document.getElementById("prebattle").style.display='';
	document.getElementById("pregameTitle").innerHTML=title;
	document.getElementById("pregameMap").innerHTML=window.mapDic[battleid].replace(/🦔/g, " ");
    //document.getElementById("hostSays").innerHTML ="afk 3sec for dinnar";
	document.getElementById('startGem').setAttribute( "onclick", "preBtlStartGem("+window.nowinBattle+")" );
	document.getElementById('exitGem').setAttribute( "onclick", "preBtlExitGem("+window.nowinBattle+")" );
	console.log(window.gameStatus)
	if(window.gameStatus[window.nowHostedby]){
		document.getElementById('gameProgress').style.display='';
	}
	else{document.getElementById('gameProgress').style.display="none";}
}

function prebtlUnflush(){
		window.ai={}
		window.ppl={}
		window.isExited=true;
		window.specppl=[]
		document.getElementById('gameProgress').style.display="none";
		document.getElementById("panel").style.display=''
		document.getElementById("prebattle").style.display="none"
		removeAllChildNodes('pregameInfo')
}

function preBtlExitGem(bID)
{
    window.client.leaveBattle();  //inform lobby server
	//chatLeave(bID)  //inform lobby chat server
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
	if(document.getElementById('mapLabel1').innerHTML!=pool[0].replace(/🦔/g, " ")||document.getElementById('mapLabel2').innerHTML!=pool[1].replace(/🦔/g, " ")||document.getElementById('mapLabel3').innerHTML!=pool[2].replace(/🦔/g, " ")||document.getElementById('mapLabel4').innerHTML!=pool[3].replace(/🦔/g, " ")||document.getElementById('mapLabel5').innerHTML!=pool[4].replace(/🦔/g, " ")){
		document.getElementById('mapLabel1').innerHTML=pool[0].replace(/🦔/g, " ")
		document.getElementById('mapLabel2').innerHTML=pool[1].replace(/🦔/g, " ")
		document.getElementById('mapLabel3').innerHTML=pool[2].replace(/🦔/g, " ")
		document.getElementById('mapLabel4').innerHTML=pool[3].replace(/🦔/g, " ")
		document.getElementById('mapLabel5').innerHTML=pool[4].replace(/🦔/g, " ")
	
		   
	
		document.getElementById('mapLabel1Btn').className = 'flashit'
		document.getElementById('mapLabel2Btn').className = 'flashit'
		document.getElementById('mapLabel3Btn').className = 'flashit'
		document.getElementById('mapLabel4Btn').className = 'flashit'
		document.getElementById('mapLabel5Btn').className = 'flashit'
	
		document.getElementById('mapLabel1Btn').className = 'slidingMenuSub1'
		document.getElementById('mapLabel2Btn').className = 'slidingMenuSub2'
		document.getElementById('mapLabel3Btn').className = 'slidingMenuSub3'
		document.getElementById('mapLabel4Btn').className = 'slidingMenuSub4'
		document.getElementById('mapLabel5Btn').className = 'slidingMenuSub5'
	_mapDonutPut(pool)
	
	
	}
	document.getElementById('mapLabel1Btn').onclick = function() {chatVoteMap(pool[0])}	
	document.getElementById('mapLabel2Btn').onclick = function() {chatVoteMap(pool[1])}
	document.getElementById('mapLabel3Btn').onclick = function() {chatVoteMap(pool[2])}
	document.getElementById('mapLabel4Btn').onclick = function() {chatVoteMap(pool[3])}
	document.getElementById('mapLabel5Btn').onclick = function() {chatVoteMap(pool[4])}
	
	

	
}

function prebattleUpdateMap(mapName){
	document.getElementById('pregameMap').innerHTML=mapName
	preBattleHeaderUpdate()
}

function preBtlToggMoreMap(){
	
	document.getElementById('mapListView').className='mapListViewOff'
	document.getElementById('mapBrwsView').className='mapBrwsViewOn'
	
	document.getElementById('brwsName').className='brwsNameActive'
	document.getElementById('brwsRandInfo').className='brwsRandInfoActive'
	
	document.getElementById('moreMap').className='moreMapActive' //update toggle btn
	document.getElementById('mapList').className='mapList' //update toggle btn
	
	//allMaps=listAllLocalMapNames().slice();
	//console.log(allMaps)
	mapPileContent=''
	for (map in window.minimapCache) {
		try{
		_img=window.minimapCache[map]
		mapPileContent+='<div  onclick="chatVoteMap(\''+map+'\')" onmouseover="preBtlMoreMapBlowUp(\''+map+'\');pushToolTip(\'[Mouse over] to [preview map]; [click] to [select map] if you are a host\')" onmouseleave="preBtlMoreMapBlowUp()" style="display:inline-block; position:relative;width:2vw;height:2vw;margin:0.2vw;"><img style="position:absolute;width:100%;height:100%;" src="data:image/png;base64,' + _img + '" /></div>';
		console.log(allMaps)
		}
		catch{
			
		}
		
	}
	//document.getElementById('mapPile').append(mapPileContent)
	document.getElementById('mapPile').insertAdjacentHTML( 'beforeend', mapPileContent );

	window.minimapCache={}
	
}

function preBtlInitMapPile(){
	var mapPileContent=''
	
	for (map in window.allMinimapCache) {
		try{
		_img=window.allMinimapCache[map]
		mapPileContent+='<div  onclick="chatVoteMap(\''+map+'\')" onmouseover="preBtlMoreMapBlowUp(\''+map+'\');pushToolTip(\'[Mouse over] to [preview map]; [click] to [select map] if you are a host\')" onmouseleave="preBtlMoreMapBlowUp()" style="display:inline-block; position:relative;width:2vw;height:2vw;margin:0.2vw;"><img style="position:absolute;width:100%;height:100%;" src="data:image/png;base64,' + _img + '" /></div>';
			
		}
		catch{
			
		}
		
	}
	
	document.getElementById('mapPile').innerHTML=mapPileContent


}

function preBtlMoreMapBlowUp(map=window.mapDic[window.nowinBattle]){
	try{
	_img=window.allMinimapCache[map]}
	catch{
		//
	}
	document.getElementById('minimapIMG').innerHTML='<img style="position:absolute;width:100%;height:100%;" src="data:image/png;base64,' + _img + '" />'
	document.getElementById('brwsName').innerHTML=map.replace(/🦔/g, " ")
	
}


function preBtlToggListMap(){
	document.getElementById('brwsName').className=''
	document.getElementById('brwsRandInfo').className=''

	document.getElementById('mapBrwsView').className='mapBrwsViewOff'
	document.getElementById('mapListView').className='mapListViewOn'

	document.getElementById('moreMap').className='moreMap'   //update toggle btn
	document.getElementById('mapList').className='mapListActive' //update toggle btn
	

	
}

function preBattleHeaderUpdate(){
	document.getElementById('gameHeader').innerHTML+='<!-- rerun -->'
}

function _mapDonutPut(pool)
{
document.getElementById("mapListView").innerHTML +="<div class=\"chart-container\" style=\"position: absolute;width: 21vw;left:12vw;top:0vw;height:10vw;\"><canvas style='' id=\"mapPoll\"></canvas></div>"

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
/*


function initPrebtlZone(){

	
	var btlType = document.createElement('div');
	//btlType.className="prebattlePolls";
	btlType.style="position:relative;width:100%;";
	btlType.innerHTML = '<div id="opTypeTitle" style="cursor: default;color:white;"><h1>Operations</h1></div><hr></hr></br><span style="cursor: default;color:white; margin: 0px;background:rgb(33,150,243);">Autobalance</span><div id="typeTeam" style="cursor: default;filter: drop-shadow(0.4rem 0.5rem 0.2rem rgba(200,200,200,0.6)); position:absolute;width:95%; background:white;height:2%;"><div style="cursor: default;position:absolute;height:100%;width:50%;background:rgb(33,150,243);"></div></div></br></br></br><span style="cursor: default;color:white; margin: 0px;background:rgb(33,150,243);">Rogue Teams</span><div id="typeCoop" style="cursor: default;filter: drop-shadow(0.4rem 0.5rem 0.2rem rgba(200,200,200,0.6)); position:absolute;width:95%; background:white;height:2%;"><div style="cursor: default;position:absolute;height:100%;width:20%;background:rgb(33,150,243);"></div></div></br></br></br><span style="cursor: default;color:white; margin: 0px;background:rgb(33,150,243);">FFA Balance</span><div id="typeFAFAFA" style="cursor: default;filter: drop-shadow(0.4rem 0.5rem 0.2rem rgba(200,200,200,0.6)); position:absolute;width:95%; background:white;height:2%;"><div style="cursor: default;position:absolute;height:100%;width:80%;background:rgb(33,150,243);"></div></div>';
	document.getElementById("pregameInfo").appendChild(btlType);
	
	
	
	
}
*/

	


function preBtlUpdateSelfStats(doIHaveMap){
	window.client.myBtlStatus(doIHaveMap)
	
	
}

function removeAllChildNodes(parent) {
	while (document.getElementById(parent).firstChild) {
		document.getElementById(parent).removeChild(document.getElementById(parent).firstChild);
	}
}


function pollUpdate()
{


}
