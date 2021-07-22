let toolTipWindow = document.getElementById('toolTipWindow');

function onDrag(e) {
  let originalStyles = window.getComputedStyle(toolTipWindow);
  toolTipWindow.style.left = parseInt(originalStyles.left) + e.movementX + 'px';
  toolTipWindow.style.top = parseInt(originalStyles.top) + e.movementY + 'px';
}

function onLetGo() {
  document.removeEventListener('mousemove', onDrag);
  document.removeEventListener('mouseup', onLetGo);
}

function onGrab() {
  document.addEventListener('mousemove', onDrag);
  document.addEventListener('mouseup', onLetGo);
}

toolTipWindow.addEventListener('mousedown', onGrab);

function pushToolTip(text){
    var text=text.replace(/\[/g, "<span style='background:white;color:black;'>&nbsp");
    var text=text.replace(/]/g, "&nbsp</span>");
    var toolTipheader='<div style="display: inline-block;color:white;transform: skew(-0.312rad);margin:5px;width:10px;height:10px;background:white;margin-bottom:0px;"></div>'
    var helperText='<p class="helperTxts" style="display: inline-block;color:white;transform: skew(-0.312rad);margin: 2px;font-size: 15px;width:560px;margin-bottom:3px;">'+text+'</p></br>'
    var newTxtToAppend=toolTipheader+helperText
    
    for (nodes of document.getElementsByClassName('helperTxts'))
    {
        newTxtToAppend=newTxtToAppend+'<p class="helperTxts" style="display: inline-block;color:white;transform: skew(-0.312rad);margin: 2px;font-size: 15px;width:560px;margin-bottom:3px;">'+nodes.innerHTML+'</p></br>'
    }
    
    document.getElementById('actualHelp').innerHTML=newTxtToAppend
}

function minimizeToolTip(){
 if (document.getElementById('actualHelp').style.visibility==''){document.getElementById('actualHelp').style.visibility='hidden'; document.getElementById('toolTipWindow').style.height='20px'}
 else {document.getElementById('actualHelp').style.visibility='';document.getElementById('toolTipWindow').style.height='200px'}
}

pushToolTip('This is the [toolTip window], it could be [drag and moved] like a regular system window. This may display valuable [help texts] when you are [hovering over icons]. You can [turn this off] in [settings]')