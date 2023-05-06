import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as style1 from 'react-syntax-highlighter/dist/esm/styles/prism';
// import * as style2 from "react-syntax-highlighter/dist/esm/styles/hljs"
import {AiOutlineCheckCircle, AiFillPlayCircle} from 'react-icons/ai'
import * as FiIcons from "react-icons/fi"
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "../styles/Markdown.css"
import { useEffect, useState , useReducer} from 'react';
// import {GiBackwardTime} from "react-icons/gi"
import "../styles/Codenew.css"
// import ReactMarkdown from "react-markdown"
import Markdown from "markdown-to-jsx";
import ReactMarkdown from 'react-markdown';

import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash'
import * as Suite from '@rsuite/icons';
// import { color } from '@mui/system';
// import Code2 from './Code2';
import '../styles/sidebar.css'
// import { SidebarData } from './SidebarData';

import { HiArrowLongRight } from "react-icons/hi2";
import {TiTickOutline} from 'react-icons/ti'
import {RxCrossCircled} from 'react-icons/rx'


var cmd1:any;
var c:any;
var clr1:any;
var time:any=0;
SyntaxHighlighter.registerLanguage('bash', bash)
var myString:String;
var classreg:string;
//const reguarExp = new RegExp('```text[?/.,a-zA-Z0-9!@#$%^&()+=":;{}[]]*```');
var Children_li: any[] = []
var Complete_li:boolean[] = []
var Children_h2:any[] = []
// var Complete_h2:any[] = [] 
var comp:any[]=[]
var chi=0,ch=0,h22=0;
var num_li=0;
var count_h2 = 0
var count_li = 0
var li_point = 0;
var pointer = -1;
var h_next:any;
var flag = false;
var cmd1:any;
var head = 0;
var h_point = 0;
var dict_head:any;
var s ='';


// if(Children_li.length ! = 0){
//   var j = 0;
//   var m , x=0;
//   while(j<Children_li.length){
//     head = 0;
    
//     if(Children_li[j] == "h2"){
//       m = j+1;
//       console.log("Value of m:" + m);
      
//       if(Children_li[m] == "h2"){
//         s = "h2" + String(x);
//         dict_head[s] = head;
//         j = m;
//         x = x + 1;
//         continue;
//       }
//       if(Children_li[m] == "li"){
//         m = m+1;
//       }
//       if(Children_li[m] == "code"){
//         head = head + 1;
//         m = m+1;
//       }
//     }

//   }
// }

// var Children_li: any[] = []
// var Complete_li:boolean[] = []
// var Children_h2:any[] = []
// // var Complete_h2:any[] = [] 
// var comp:any[]=[]
// var chi=0,ch=0,h22=0;
// var num_li=0;
// var count_h2 = 0
// var count_li = 0
// var li_point = 0;
// var pointer = -1;
// var h_next:any;
// var flag = false;
// var cmd1:any;
// const NewPage = () =>{
//   return(
//     <div>
//        <Code2 content={''}></Code2>
//     </div>
//   )
// }
// const IconChange = [
//   {
//     title:'redcheck',
//     icon: <AiOutlineCheckCircle color='red'></AiOutlineCheckCircle>
//   },
//   {
//     title: 'greencheck',
//     icon: <AiOutlineCheckCircle color='green'></AiOutlineCheckCircle>
//   }
// ]
// let countOL = 0;

//const [idnored, forceupdate] = useReducer(x=>x+1 , 0);

function handleClick(){
  //forceupdate();
}

    
  const IconControlRed = (n:any, Array_li:any[]) =>{
  
  //var lengthy = 1;
  let i:number, j:number ;
  let m:number
  let svgNum=0;
  var x = 1;
 
  //Children_li.splice(-1)
  //console.log("After popping: " + {Children_li})
  var y = document.getElementsByClassName('icon_everything') as HTMLCollectionOf<HTMLDivElement>;
  // while(h_point<Children_li.length){
  //   if(Children_li[h_point]=="h2")
  //   {
  //     if(pointer==-1){
  //       Children_li[pointer]="x";
  //       y[pointer].style.color = "green";

  //     }
  //     pointer = h_point;
  //     flag = true;
  //   }
  //   else if(Children_li[h_point] == "pre"){
  //     flag = false;
  //   }
  //   else{
  //     if(flag){
  //       Children_li[h_point] = "x";
  //       y[pointer].style.color = "green";
  //     }
  //   }
  //   h_point++;
  // }
  // while(h_point!=Children_li.length){
  //   if(Children_li[h_point] == "li")
  //   continue;
  //   if(Children_li[h_point] == "h2"){
  //     h_next=h_point+1;
  //     while(Children_li[h_next+1]!="h2"){
  //       if(Children_li[h_next]=="pre"){
  //         for(j=h_point+1;j<=h_next;j++){
  //           Children_li[j]='x';
  //           y[j].style.color = "green";
  //         }
  //       }
  //     }

  //   }
  // }
  var y = document.getElementsByClassName('icon_everything') as HTMLCollectionOf<HTMLDivElement>;
  console.log({y})
  console.log({n})

  for(i=0;i<Array_li.length;i++){
  if(Array_li[i]==true){
  svgNum = svgNum + 1;
  }
  }
  console.log({svgNum})
  y[n-svgNum].style.color = "blue";

  
  // while(h_point!=Children_li.length-svgNum){
  //     if(Children_li[h_point] == "li")
  //     continue;
  //     if(Children_li[h_point] == "h2"){
  //       head = h_point;
  //       h_next=h_point+1;
  //       while(Children_li[h_next+1]!="h2"){
  //         if(Children_li[h_next]!="code"){
  //           continue;
  //         }
  //       }
  //       y[head].style.color = "red";
  //     }
  //     h_point++;
  //   }
  Array_li.pop()
  console.log("After popping: " + {Array_li})
  // for(i=0;i<Children_li.length-1;i++){
  
  // if(Children_li[i] == "code" && Children_li[i]=="true"){
  // y[i-1].style.color = "green";
  // }
// }

   
  
 // var y = document.getElementsByClassName('icon_everything') as HTMLCollectionOf<HTMLDivElement>;
  // var sidey = document.getElementsByClassName('side_icons') as HTMLCollectionOf<HTMLDivElement>;
  // for(i=0;i<count_li;i++){
  //   if(y[i])
  //   y[i].style.color = 'red';
  //   }
  // for(i=0;i<lengthy;i++){
  // if(sidey[i])
  //  sidey[i].style.color = 'red';
  // }
}
  



   
  
const IconControlGreen = () =>{
  let i:number
  var y = document.getElementsByClassName('icon_everything') as HTMLCollectionOf<HTMLDivElement>;
  var sidey = document.getElementsByClassName('side_icons') as HTMLCollectionOf<HTMLDivElement>;
 for(i=0;i<count_li;i++){
    y[i].style.color = 'green';
    
 }
  for(i=0;i<y.length;i++){
  if(sidey[i])
  sidey[i].style.color = 'green';
  }
}
function LinkRenderer(props: any) {
  return (
    <a href={props.href} target="_self" >
      {props.children}
    </a>
  );
}


const TextHead = ({ children }:any ) => {
  
  return (
    <div className="h1">
      <AiOutlineCheckCircle/>
      
      {children}
    </div>
  );
  
};
const TextHead2 = ({ children }:any) => { 
    Children_li[count_li] = "h2"
  //Children_h2[count_h2] = count_li;
  //console.log("h2       "+{Children_h2}+"    "+ count_h2)
  count_li++;
  console.log({Children_li})

// comp[count_h2]=chi;
// Children_h2[count_h2] = {children}
// count_h2++;
  
chi=0;
  console.log({children}+" "+count_h2+" "+comp)
  return (
    <div className="h2">
      <AiOutlineCheckCircle className = 'icon_everything' style={{ fontSize: '1.2rem', color: "lightgrey", fontWeight: "bold" , alignContent:"center" }}/>
      {children}
    </div>
  );
};
const TextHead3 = ({ children }:any) => {
  return (
    <div className="h3">
      {children}
    </div>
  );
};
const TextBlock = ({children }:any) => {
  const[IsActive2, setIsActive2] = useState(false);

 Children_li[count_li] = "li"
  count_li++;
  console.log({Children_li})
  // Children_li[count_li] = "li"
  // Complete_li[count_li] = false;
  // count_li++;
  
  
  
  return(
   <div className="everything">
  <span className='contents'>
  
    { !IsActive2? <><AiOutlineCheckCircle className='icon_everything' onClick={() => {
            setIsActive2(!IsActive2); 
          } } style={{ fontSize: '1.2rem', color: "lightgrey", fontWeight: "bold" , alignContent:"center" }} /></>:<><AiOutlineCheckCircle className='icon_everything'
          style={{ fontSize: '1.2rem' }} 
          color="green"  /></>}
  
  
  {children}
  </span>
  </div>
  )
}

const Blocky = ({children}:any) => {
  let lang = 'text';
  
  
  
  return (
    
    
    <div className='blockpart'>
    
    
    <SyntaxHighlighter language = {lang} style={materialDark }>
      
      {children}
    </SyntaxHighlighter>
    
  
    </div>
  )
}

const Set_True = () =>{
  let m:any;
  for(m=0;m<Children_li.length;m++){
    if(Children_li[m] == "code" && Children_li[m] !=false && num_li==0 ){
    Children_li[m] = true;
    break;
    }
    else if(Children_li[m] == "code" && Children_li[m] !=false){
      Children_li[m]= true;
      break;
    }
  }
  //Children_li[10]="true";
  console.log("Length of array:"+ Children_li.length+"   "+{Children_li}+"      "+count_li)
  //Complete_li[count_li-1] = true;
  IconControlRed(m, Children_li);
}

const CodeBlock = ({children}:any) => {
  let lang = 'bash';
  const [isActive, setIsActive] = useState(false);
  
  Children_li[count_li] = "code"
  count_li++;
  chi++;
  ch++;
  console.log(ch)
  console.log({Children_li})
  // myString= JSON.stringify(children)
  // if (myString.startsWith("```text")) 
  // classreg = 'text';
  // else
  // classreg = 'codepart';

  // function fcmd()
  // {
  //   // console.log(children)
  //   cmd1(children);
 
  //   if(c!=children ){
  //     count_li++;
  //     c=children;
  //     h22++;
  //   }
  function fcmd(event:any)
  {
    // console.log(children)
    cmd1(children);

  }
  return (
    <>
    
    <div className='codepart'>
    <div style={{margin: '2rem'}}>
    <div >{ !isActive? <><FiIcons.FiPlay  onClick={(event) => {
            setIsActive(!isActive); Set_True();fcmd(event);count_li=0;
          } } style={{ fontSize: '1.2rem', color: "grey", fontWeight: "bold"  }} /></>:
          <>{(clr1=='green')? <TiTickOutline color='green'/>:<RxCrossCircled color='red'/>}
          </>}
          <p>{time}</p>
    </div>
    
    </div>
    
    <SyntaxHighlighter language={lang} style={style1.coy } >
      
      {children}
    </SyntaxHighlighter>
    
  
    </div></>
  )
}

const HyperLink = ({href}:any,{children}:any) =>{
  console.log("Href:"+{href})
  console.log("Children:" + {children})
  return(
    
    <a href={href}>{children}</a>
    
  )
}
const PreBlock = ({cmd,children, ...rest}:any) => {
  
    
    return(
     
      CodeBlock(children['props'])
      
    );
  
  
  
}
// const TextPreBlock = ({children, ...rest}:any) => {
//   //if (children ['type'] === 'code') 
    
//     return(
     
//       Blocky(children['props'])
      
//     );
  
  
  
// }


// interface PostProps{
//   content:any
//   cmd:any
// }
const Code = ({content,cmd,clr,t}:any) => {
  const [postContent, setPostContent] = useState("");
// console.log(postContent)
// Children_li = {Children_li} 
// count_h2={count_h2} 
// count_li={count_li} 
// num_li = {num_li}

  useEffect(() => {
    const set=async()=>{
      let a=await fetch(content)
      // console.log(a)
      let d=await a.text();
      setPostContent(d);

    }
    set();

  }, [])
  clr1=clr
  cmd1=cmd
  time=t;
  return (
    <>
    
    <div className='markdown'>
    
    <Markdown options={{
            overrides: {
            pre: PreBlock,
            a:LinkRenderer,
            
            
          
            ol: TextBlock,
            ul: TextBlock,
            
            h1:TextHead,
            h2:TextHead2,
            h3:TextHead3
        
            },
          }}>{postContent}</Markdown></div>
         
    </>
  )
}

  /*return (
    <div>  
      <AiFillPlayCircle className='play'></AiFillPlayCircle>
      <SyntaxHighlighter
    language={lang}
    style={materialDark}
  >
    {children}
  </SyntaxHighlighter></div>
  )
}*/

export default Code

// function rgba(arg0: number, arg1: number, arg2: number, arg3: number): string {
//   throw new Error('Function not implemented.');
// }
