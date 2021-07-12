function campaignChChapter()
{
	document.getElementById('campaignTargets').className="campaignTargetsGone"
	rstAnime('subDesktop1')
	rstAnime('subTargets1')
	document.getElementById('subDesktop1').style.visibility=''
	document.getElementById('subTargets1').style.visibility=''
	
}

function campaignChStage(){
	document.getElementById('detailBox').style.visibility=""
	rstAnime('detailBox')
}

function campaignUnchStage(){
	document.getElementById('detailBox').style.visibility="hidden"

}

function campaignLoad(){
	rstAnime('campaignDesktop')
	rstAnime('campaignTargets')
}

function campaignUnload(){
	document.getElementById('detailBox').style.visibility="hidden"
	document.getElementById('campaignTargets').className="campaignTargets"
	
	document.getElementById('subDesktop1').style.visibility='hidden'
	document.getElementById('subTargets1').style.visibility='hidden'
	
}