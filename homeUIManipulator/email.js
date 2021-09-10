window.emailList=[]
homeEmailAdd2MailList('Greetings','frqReq','Dr. Who',"Dr. Kal'tist","Dr. Kal'tist,<br>I am Dr. Who. Nice to meet you.<br>I am lookingforward to working with you.<br>Best",'')
homeEmailAdd2MailList('Leader awards!','awards','Thea, Inc.',"Dr. Kal'tist","Dear Dr.Kal'tist,<br>&nbsp;&nbsp;&nbsp;&nbsp; Congratulations on scoring higher than 38% of other Thea Inc. employees in Q3.Striving to cure humanity has always been the focus of Thea Pharmaceuticals Inc. We understand thiswouldn't be possible without the meticulous calculation and operation of our Thea researchers. <br>&nbsp;&nbsp;&nbsp;&nbsp;In this email, please kindly find some helpful research resources attached. Hopeyou would continue your excellence in your academic endeavour!<br>Thea Pharmaceuticals",'')


function homeHideMail(){
    if(document.getElementById('mailWindow').style.display=='')
    {
    document.getElementById('mailWindow').style.display='none'}
    else{document.getElementById('mailWindow').style.display=''}

}

function homeSelectEmail(id){
    document.getElementById('actualrightMailContent').innerHTML=window.emailList[id]['content']
    document.getElementById('emailAcknowledge').setAttribute('onclick','homeEmailProcess('+id+',"ack")')
    document.getElementById('emailDel').setAttribute('onclick','homeEmailProcess('+id+',"del")')
}

function homeEmailAdd2MailList(title,type,from,to,content,rewardsID){
    window.emailList.push({'type':type,'title':title,'from':from, 'to':to,'content':content,'rewardsID':rewardsID})
    homeEmailGen();
}

function homeEmailGen(){
    var contentTemp="<div onclick=\"homeSelectEmail(someID)\" class='mailEntry' style='position:relative;width:100%;margin: 3%;height: 31px;'>\
        <div style='position:absolute;left:0;width:50%;height:100%;'>\
            <div class='mailAvatar' style='position:absolute;width: 31px;height: 31px;overflow:hidden;'><img style='height:100%;width:100%;' src='assets/theaAvatar.png'></div>\
            <p style='position:absolute;margin:0;left: 27%;font-size: 69%;'><span style='font-weight:900;color: white;background: rgb(158 158 158 / 38%);'>FROM:</span> someSender\
                </p>\
            <p style='position:absolute;margin:0;top: 60%;left: 27%;font-size: 69%;'>\
                <span style='font-weight:900;color: white;background: rgb(158 158 158 / 38%);'>TO:</span>\
                someReceiver\
            </p>\
        </div>\
         <div style='font-size: 115%;left: 51%;position:absolute;'>\
            <p style='font-size: 49%;margin:0;color: white;background: rgb(158 158 158 / 38%);'>Subject</p>\
            someSubject\
     </div>\
        <div class='mailSeparator' style='position:absolute;left:5%;width: 81%;background: rgb(92 82 65 / 62%);top: 126%;height: 1px;'>\
        </div>\
    </div>";

    var finalContent=''


    //console.log(window.emailList)
    for (emailID in window.emailList){
        finalContent+=contentTemp.replace(/someSender/g, window.emailList[emailID]['from']).replace(/someReceiver/g, window.emailList[emailID]['to']).replace(/someSubject/g, window.emailList[emailID]['title']).replace(/someID/g, emailID);
        
        
        document.getElementById('leftMailContent').innerHTML=finalContent
        //console.log('rendering email contents'+emailID)

    }

}

function homeEmailProcess(emailID,action){
    
    if (action=='del'&&window.emailList[emailID]['type']=='frdReq'){
        window.client.decFreund(window.emailList[emailID]['from'])
        delete window.emailList[emailID];
        homeEmailGen()
    }
   // console.log(action)
   // console.log(window.emailList[emailID]['type'])
   // console.log(action=='ack'&&window.emailList[emailID]['type']=='frdReq')
    //console.log(action=='ack')
   // console.log(window.emailList[emailID]['type']=='frdReq')
    if (action=='ack'&&window.emailList[emailID]['type']=='frdReq'){
        window.client.aceptFreund(window.emailList[emailID]['from'])
        //console.log('freund accepted!')
        window.emailList.splice(emailID, 1);
        homeEmailGen()
    }
}


