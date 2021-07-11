if (storage.get('isRemembered')=='true')
	{
		document.getElementById("usr").value=storage.get('username');
		document.getElementById("passwd").value=storage.get('password');
	document.getElementById("rememberName").className='button-clicked'
	
	}

	
window.loadingCallback=function (){
	return
}




function loginConnect(){
	playFX('zoomin.wav')
	
	document.getElementById("loginbtn").className='loginbtnClicked'
	document.getElementById("underlinePRTS").className='underlinePRTS'
	document.getElementById("prtsOS1").className='prtsOS'
	document.getElementById("prtsOS").className='prtsOS'
	document.getElementById("prtsVer").className='prtsVer'
	document.getElementById("prtsPharma").className='prtsPharma'
	document.getElementById("prtsLOGO").className='prtsLOGO'
	document.getElementById("logininput").className='logininput'
	document.getElementById("loginbox").style.visibility = "";
	
}

function rememberMe(){
	if (document.getElementById("rememberName").className == ''){
			storage.set('isRemembered', 'true');
			storage.set('username', document.getElementById("usr").value);
			storage.set('password', document.getElementById("passwd").value);
			document.getElementById("rememberName").className='button-clicked'
		} else {
			storage.set('isRemembered', 'false');
			document.getElementById("rememberName").className=''
		}
}





function registerMe(){
		if (document.getElementById("register").className == ''){
			
			document.getElementById("register").className='button-clicked'
		} else {
			document.getElementById("register").className=''
		}

}

function logMeIn(){
	playFX('zoomin.wav')
	//loading(true)
	document.getElementById("logininput").className='logininputGone'
	document.getElementById("welcomeMsg").style.visibility=''	
	document.getElementById("welcomeHeading").style.visibility=''
	document.getElementById("welcomeHeading").className='welcomeHeading'
	ipcCheck()
	setTimeout(function(){
		
		document.getElementById("welcomeHeading").className='welcomeHeadingOut'
		document.getElementById("welcomeUser").style.visibility=''
		document.getElementById("welcomeUser").innerHTML='<span style="font-size:3vw;weight:900;opacity:0.4">Dr. &nbsp;</span>'+document.getElementById("usr").value
		document.getElementById("welcomeUser").className='welcomeUser'
		
		setTimeout(function(){document.getElementById("welcomeSubline1").style.visibility='';},2000)
		setTimeout(function(){document.getElementById("welcomeSubline2").style.visibility='';},2500)
		setTimeout(function(){document.getElementById("welcomeSubline3").style.visibility='';},2800)
		setTimeout(function(){document.getElementById("welcomeSubline4").style.visibility='';},3600)
		setTimeout(function(){document.getElementById("welcomeSubline5").style.visibility='';},4000)
		setTimeout(actuallyLogMeIn,5000)
	},1000)
	
	
}

function actuallyLogMeIn(){
		var username = document.getElementById("usr").value;
	var password = document.getElementById("passwd").value;
	
	window.client.connectToServer();
	
	if(document.getElementById("register").className=='button-clicked')
		{
		window.client.register(username, password);
}
	
		window.client.login(username, password);
		
		//loading(true)
	
}
	
function reverseLogin(){
	document.getElementById("loginbtn").className='loginbtnClicked'
	document.getElementById("underlinePRTS").className='underlinePRTS'
	document.getElementById("prtsOS1").className='prtsOS'
	document.getElementById("prtsOS").className='prtsOS'
	document.getElementById("prtsVer").className='prtsVer'
	document.getElementById("prtsPharma").className='prtsPharma'
	document.getElementById("prtsLOGO").className='prtsLOGO'
	document.getElementById("logininput").className='logininput'
	document.getElementById("loginbox").style.visibility = "";
	
	document.getElementById("loginInputStatus").setAttribute('onclick',"logMeIn();this.onclick=''")
}




function finalBoxEnlargeLeave() {
	
		document.getElementById("preLogin").style.visibility = "hidden";
		document.getElementById("postLogin").style.visibility = "";
		document.getElementById("username").innerHTML =window.username
		
		window.isExited=true;
		window.client.joinChanel("main")
        window.client.joinChanel("bus")
		pushSmolNotif('Dr. '+window.username,'Welcome')

}

