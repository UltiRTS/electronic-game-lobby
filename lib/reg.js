window.agreementTOS=''
window.agreementCOC=''



function regAppendAgreement(agreement){
    playSound('reg.wav',true)
    if(agreement.startsWith('TOS')){window.agreementTOS+=agreement.replace(/TOS-/g,'');+'</br>'}
    else{window.agreementCOC+=agreement+'</br>'}
	loading(false)

} 

function renderRegpage1(){
    document.getElementById('regPage1').style.display=''
    document.getElementById('loginTerminal').style.display=''
    document.getElementById("loginbox").style.display = "none";
	document.getElementById("postLogin").style.display = "none";
    document.getElementById('rollingRegConsoleContent').className='rollingRegConsoleContent'
    document.getElementById('regPage1Progress').className='regPage1Progress'
    document.getElementById('regPage1Percentage').className='regPage1Percentage'
    setTimeout(function (){
        document.getElementById('regPage1').className='regPage1Gone'
        setTimeout(function (){
            renderRegpage2()
        },2000)
        
    
    },42000)
}



function renderRegpage2(){
    document.getElementById('coc').className='regPanel'
    document.getElementById('tos').className='regPanel'
    document.getElementById("regPage2").style.display='';
    document.getElementById("regPage1").style.display = "none";

	document.getElementById('regpanelblock1').className='regpanelblock'																	
	document.getElementById('regpanelblock2').className='regpanelblock3'	
    document.getElementById('regpanelblock3').className='regpanelblock2'	
    document.getElementById('regpanelblock4').className='regpanelblock3'	
    document.getElementById('regpanelblock5').className='regpanelblock'	
    document.getElementById('regpanelblock6').className='regpanelblock2'	
    document.getElementById('regpanelblock7').className='regpanelblock'	
    document.getElementById('regpanelblock8').className='regpanelblock3'	
    document.getElementById('regpanelblock9').className='regpanelblock2'	
    document.getElementById('regpanelblock10').className='regpanelblock'	

    document.getElementById('regTos').innerHTML+=window.agreementTOS
    document.getElementById('regCoc').innerHTML+=window.agreementCOC
}

function renderRegpage3(){
    document.getElementById("regPage2").style.display = "none";
    document.getElementById("regPage3").style.display='';

    document.getElementById('profile').className='regPanel'

    document.getElementById('regpanelblock11').className='regpanelblock2'	
    document.getElementById('regpanelblock12').className='regpanelblock'	
    document.getElementById('regpanelblock13').className='regpanelblock3'	
    document.getElementById('regpanelblock14').className='regpanelblock2'	
    document.getElementById('regpanelblock15').className='regpanelblock'
}

function regConfirmAgreement()
{
    window.client.registerConfirm()
}