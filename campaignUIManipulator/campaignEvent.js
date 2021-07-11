function campaignChChapter()
{
	document.getElementById('campaignTargets').className="campaignTargetsGone"
	document.getElementById('subDesktop1').className='subDesktop'
	document.getElementById('subDesktop1').style.visibility=''
	document.getElementById('subTargets1').style.visibility=''
	document.getElementById('subTargets1').className='subCampaignTargets'
}

function campaignChStage(){
	document.getElementById('detailBox').style.visibility=""
}

function campaignLoad(){
	document.getElementById('campaignDesktop').className='campaignDesktop'
	document.getElementById('campaignTargets').className='campaignTargets'
}

function campaignUnload(){

}