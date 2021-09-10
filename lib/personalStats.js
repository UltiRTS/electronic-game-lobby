function personalToggleFullScreen(){
    if(remote.getCurrentWindow().isFullScreen()){remote.getCurrentWindow().setFullScreen(false);}
    else{remote.getCurrentWindow().setFullScreen(true);}



}

function personalStatsSoundtempToggle(){
    if(window.contextGain.gain.value<=0.001){window.contextGain.gain.setValueAtTime(window.userVolume/100, window.audioCtx.currentTime);
    }
    else{window.contextGain.gain.setValueAtTime(0.0001, window.audioCtx.currentTime);}

    
}

function personalStatsQAOperation(){
   // console.log('c')
    if(document.getElementById('personalStatsQA').style.display=='none')
    {
        //console.log('a')
        document.getElementById('personalStatsQA').style.display=''
    document.getElementById('personalStatsQA').className='personalStatsQAExp'
}
    else
    {
        //console.log('b')
        document.getElementById('personalStatsQA').style.display='none'
    document.getElementById('personalStatsQA').className='personalStatsQAShrk'
}
}