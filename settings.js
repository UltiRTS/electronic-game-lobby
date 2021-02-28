window.dbug=false;

function volumeEntry(){
	_entryHighlight('volMenuEntry')
	if (document.getElementById("Volpanel").style.visibility=="hidden"){
		document.getElementById("Volpanel").style.visibility="visible"
		document.getElementById("FIpanel").style.visibility="hidden"
		document.getElementById("Volpanel").innerHTML+="<!--rerun-->"
		document.getElementById("volAmbSlider").value=window.userVolume
		console.log("bar val"+document.getElementById("volAmbSlider").value)
		document.getElementById("volFXSlider").value=window.userFXVolume
		document.getElementById("volNotifSlider").value=window.userNotifVolume
		
	}
	else{
		document.getElementById("Volpanel").style.visibility="hidden"
	}
}

function FIEntry(){
	_entryHighlight('volFIEntry')
	if (document.getElementById("FIpanel").style.visibility=="hidden"){
		document.getElementById("FIpanel").style.visibility="visible"
		document.getElementById("Volpanel").style.visibility="hidden"
	}
	else{
		document.getElementById("FIpanel").style.visibility="hidden"
	}
}

function setVolume(vol){
	
	window.userVolume=vol
	window.audio.volume=vol/100
	document.getElementById("volSettingDigit").innerHTML=vol+"%"
}

function setFXVolume(vol){
	
	window.userFXVolume=vol
	window.FXaudio.volume=vol/100
	document.getElementById("volSettingDigit").innerHTML=vol+"%"}

function setNotifVolume(vol){
	
	window.userNotifVolume=vol
	window.FXaudio.volume=vol/100
	document.getElementById("volSettingDigit").innerHTML=vol+"%"}

function VolumeDone(){
	storage.set('userVolume', window.userVolume)
	storage.set('userFXVolume', window.userFXVolume)
	storage.set('userNotifVolume', window.userNotifVolume)
	document.getElementById("Volpanel").style.visibility="hidden"
}

function fiDone(){
	//storage.set('userVolume', window.userVolume)
	document.getElementById("FIpanel").style.visibility="hidden"
}

function fiCheckStart(){
	_fiDonut()
	document.getElementById("fiTerm").innerHTML+="Checking launcher presence:<br>"
	document.getElementById("fiTerm").innerHTML+=process.env.WDIR+"<br>"
	maxIntegrity=4
	detectedIntegrity=0
	path = process.env.WDIR+'/localVer'
	document.getElementById("fiTerm").innerHTML+="Checking localVer:<br>"
	fs.access(path, fs.F_OK, (err) => {
		if (err) {
			document.getElementById("fiTerm").innerHTML+=err+"<br>"
			document.getElementById("fiTerm").innerHTML+="localVer not present!</br>"
			
		}
		else{
		document.getElementById("fiTerm").innerHTML+="localVer present!</br>"
		detectedIntegrity+=1;}
		
		path = process.env.WDIR+'/engine'
		document.getElementById("fiTerm").innerHTML+="Checking engine:<br>"
		fs.access(path, fs.F_OK, (err) => {
			if (err) {
				document.getElementById("fiTerm").innerHTML+=err+"<br>"
				document.getElementById("fiTerm").innerHTML+="engine not present!</br>"
				
			}
			else{
			document.getElementById("fiTerm").innerHTML+="engine present!</br>"
			detectedIntegrity+=1;}
			
			path = process.env.WDIR+'/engine/maps'
			document.getElementById("fiTerm").innerHTML+="Checking content dir:<br>"
			fs.access(path, fs.F_OK, (err) => {
				if (err) {
					document.getElementById("fiTerm").innerHTML+=err+"<br>"
					document.getElementById("fiTerm").innerHTML+="content dir not present!</br>"
					
				}
				else{
				document.getElementById("fiTerm").innerHTML+="content dir present!</br>"
				detectedIntegrity+=1;}
				
				path = process.env.WDIR+'/busybox.exe'
				document.getElementById("fiTerm").innerHTML+="Checking busybox:<br>"
				fs.access(path, fs.F_OK, (err) => {
					if (err) {
						document.getElementById("fiTerm").innerHTML+=err+"<br>"
						document.getElementById("fiTerm").innerHTML+="busybox not present!</br>"
						
					}
					else{
					document.getElementById("fiTerm").innerHTML+="busybox present!</br>"
					detectedIntegrity+=1;
					console.log('deIn:'+detectedIntegrity)}
					
					finalIntegrity=detectedIntegrity/maxIntegrity*100
					document.getElementById("fiSettingDigit").innerHTML=finalIntegrity+"%"
					fiChartCanvas.data.datasets[0].data[1] = finalIntegrity;
					fiChartCanvas.data.datasets[0].data[0] = 100-finalIntegrity;
					fiChartCanvas.update();
					detectedIntegrity=0;
					
					
					
					
				})
				
				
				
			})
			
			
			
			
		})
		
		
		
		
		
		
		
	})
	
	
	

	


}

function _entryHighlight(entry){
	var c = document.getElementById(entry).parentElement.children;
	var i;
	for (i = 0; i < c.length; i++) {
		c[i].className="settingSubContent"
		
	} 
	document.getElementById(entry).className="settingSubContentSel"
}
function _fiDonut(){

	document.getElementById("fiChart").innerHTML ="<div class=\"chart-container\" style=\"position: relative; width:70%;left:27%;\"><canvas id=\"fiChartCanvas\"></canvas></div>"
		
	var ctx = document.getElementById("fiChartCanvas");
	window.fiChartCanvas = new Chart(ctx, {
			type: 'doughnut',
			data: {
				labels: ['Corrupt','Intact'],
				datasets: [{
					label: 'System Status',
					data: [1,9],
					backgroundColor: [
					'rgba(255, 255, 255, 0.2)',
					'rgba(255, 255, 255, 1)',
					],
					borderColor: [
					'rgba(255, 255, 255, 0.2)',
					'rgba(255, 255, 255, 1)',
								   
					],
					borderWidth: 1
				}]
			},
			options: {
				legend: {
					onClick: (e, i) => {
						
						
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
		
	
	
}
