import React, { useEffect } from 'react';
export default function Terminal({c,sclr,st}:any){
  let i:number=0;
  function sendMessage() {
        var message:any='';
        c=c.trim();
        let singleLineTexts = c.split("\n");
    if(c.search("script")===0)
    {
      console.log("im in script")
        message+=singleLineTexts[0];
        const iframe = document.querySelector("iframe");
        iframe?.contentWindow?.postMessage(message, "*");
        setTimeout(function(){
          message=singleLineTexts[1];
          const iframe = document.querySelector("iframe");
        iframe?.contentWindow?.postMessage(message, "*");
        },500)
    }
    else if( !c.includes("&&")){
        
      for( i=0;i<singleLineTexts.length;i++)
      {
        if(i==singleLineTexts.length-1)
        message+=singleLineTexts[i]
        else
       message+=(singleLineTexts[i]+" && ")   
      }
      const iframe = document.querySelector("iframe");
        iframe?.contentWindow?.postMessage(message, "*");
    }
      
      else {
      message+=c;
      const iframe = document.querySelector("iframe");
      iframe?.contentWindow?.postMessage(message, "*");  
    }
        console.log(message);
        
       
      }
      window.addEventListener('message', function(event) {
      try{
      var x=JSON.parse(event.data);
      if(x!=null){
      if(Object.keys(x).length===2){
        console.log("Message received from the child: " + x.Command_Execution_Status+x.Execution_Time);
        st(x.Execution_Time)
        const b= document.getElementById('CES') as HTMLInputElement;
        if(x.Command_Execution_Status==='0')
        sclr("green");
    else
        sclr("red");console.log('red');
    }
    }
      }
      catch(err){console.log(err);}});
      
useEffect(()=>{
  sendMessage()
  },[c])
    return(
        <>
        <div>
        {/* <button id="CES">Command Execution Status</button><br/> */}
        <input id="Time" type="text" readOnly/>
        {/* <input id="command_id" type="text" readOnly/> */}
        </div>
        <iframe id="myFrame" src="http://localhost:8888" style={{position:"fixed",bottom:0, width:"100%",height:"25vh"}}/>
        
        </>
        )
}

