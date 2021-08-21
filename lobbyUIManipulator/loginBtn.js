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
	document.getElementById("loginbox").style.display='';
	
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
	document.getElementById("welcomeMsg").style.display=''	
	document.getElementById("welcomeHeading").style.display=''
	document.getElementById("welcomeHeading").className='welcomeHeading'
	ipcCheck()
	setTimeout(function(){
		
		document.getElementById("welcomeHeading").className='welcomeHeadingOut'
		document.getElementById("welcomeUser").style.display=''
		document.getElementById("welcomeUser").innerHTML='<span style="font-size:3vw;weight:900;opacity:0.4">Dr. &nbsp;</span>'+document.getElementById("usr").value
		document.getElementById("welcomeUser").className='welcomeUser'
		
		setTimeout(function(){document.getElementById("welcomeSubline1").style.display='';
			
			setTimeout(function(){
				document.getElementById("welcomeSubline2").style.display='';
				setTimeout(function(){document.getElementById("welcomeSubline3").style.display='';},2800)
				setTimeout(function(){document.getElementById("welcomeSubline4").style.display='';},3600)
				preBtlInitMapPile();
				setTimeout(function(){document.getElementById("welcomeSubline5").style.display='';},4000)
				setTimeout(actuallyLogMeIn,5000)
			},2500)
		
			
	
		},2000)
		
		
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
	document.getElementById("loginbox").style.display='';
	
	document.getElementById("loginInputStatus").setAttribute('onclick',"playFX('acknowledge.wav');logMeIn();this.onclick=''")
}




function finalBoxEnlargeLeave() {
	
		document.getElementById("preLogin").style.display = "none";
		document.getElementById("c").style.display = "none";
		document.getElementById("postLogin").style.display='';
		document.getElementById("username").innerHTML ='Dr.&nbsp'+window.username
		document.getElementById("username").style.display='';
		window.isExited=true;
		window.client.joinChanel("main")
        window.client.joinChanel("bus")
		window.client.lsFreund()
		pushSmolNotif('Dr. '+window.username,'Welcome')

}

