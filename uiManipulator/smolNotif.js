function pushSmolNotif(title,content){
	idToCancel=cancelSmolNotifDelay(title)
	var node = document.createElement("div"); 
	node.innerHTML='<div class="smolInfoBlueBar" style="position:absolute;height:100%;left:0%;width:10%;backdrop-filter: blur(10px);" onclick="cancelSmolNotif(\''+title+'\')"></div><div onclick="smolInfoCheck(\''+title+'\','+idToCancel+')" id="smolInfoMainBar'+title+'"  class="smolInfoMainBar" style="position:absolute;height:100%;left:10%;width:90%;backdrop-filter: blur(10px);filter: drop-shadow(15px 10px 4px rgba(255,255,255,1));mix-blend-mode:screen;overflow:hidden;"><p style="text-align:right;margin:4px;font-size:1.7vw;font-weight:900;color:rgba(0,0,0,0.8)">'+title+'</p><p style="text-align:left;margin:4px;font-size:0.8vw;font-weight:900;text-align:right;">'+content+'</p></div><div style="font-size:2.8vw;font-weight:900;margin:0;bottom:0;position:absolute;color:rgba(0,0,0,0.05);left:10%;overflow:hidden;width: 9vw;height:50px;"><p style="top:5px;margin:0;position:absolute;">INFO</p></div><div class="smolInfoProgressBar" id="smolInfoProgressBar'+title+'" style="position:absolute;height:4px;left:10%;bottom:0;background:#2196f3;"></div>'
	node.className='smolInfoCard'
	node.id='smolInfoCard'+title
	node.style.cssText='margin-top:20px;position:relative;height:94px;width:250px;overflow:visible;'

document.getElementById('smolInfo').appendChild(node)


}

function cancelSmolNotif(title){
	document.getElementById("smolInfoCard"+title).remove();
	
}

function cancelSmolNotifDelay(title){
	return setTimeout(function(){ try{document.getElementById("smolInfoCard"+title).remove();}catch{} }, 5000);

}

function smolInfoCheck(title,id)
{
	if(document.getElementById('smolInfoProgressBar'+title).className=="smolInfoProgressBar"){clearTimeout(id);document.getElementById('smolInfoProgressBar'+title).className='smolInfoProgressBarNonFding'}
	else {
		document.getElementById('smolInfoProgressBar'+title).className='smolInfoProgressBar'
		id=cancelSmolNotifDelay(title)
		document.getElementById('smolInfoMainBar'+title).onclick=function() { smolInfoCheck(title,id) }
}
}
