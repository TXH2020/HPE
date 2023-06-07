import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Overview from './pages/Overview';
import About from './pages/About';
import Analytics from './pages/Analytics';
import Users from './pages/Users';
import Revenue from './pages/Revenue';
import Post from './components/Post';
import Terminal from './components/Terminal';
// import { FaStopwatch20 } from 'react-icons/fa';
import Switch from '@mui/material/Switch';
import Stag0 from './pages/Stag0';
import Stag1 from './pages/Stag1';
import Stag2 from './pages/Stag2';
import Stag3 from './pages/Stag3';
import Stag4 from './pages/Stag4';
import Header1 from './components/Header';
import Tab from './components/Tabs';
import {useState,useEffect} from 'react'
import Terminal1 from './components/Terminal1';

// Render the component

function App() {
  const [dispterm, setdispTerm] = useState(true);
  const [term, setTerm] = useState(false);
  const [time, setTime] = useState("");
  const [cmd, setCmd] = useState("");
  const [labelColor, setLabelColor] = useState("");
  
console.log(" App "+time)
  function changeTerm(event: React.ChangeEvent<HTMLInputElement>)
  {
      setTerm(event.target.checked)
  }

function displayTerm()
{
  setdispTerm((prev)=>!prev)
}





  return (
    
    <>
    
    
    
    <div className='Appy'>
    
    <BrowserRouter>
    
    <Header1></Header1>
     <Switch
      checked={term}
      onChange={changeTerm}
      className='switch'
      inputProps={{ 'aria-label': 'controlled' }}
      size='small'
    />
    <div style={{"display":"flex"}}>
    <Sidebar ter={displayTerm}></Sidebar>
    {/* <Post></Post> */}
    <div className='foot_mark'>
    <Tab></Tab>
    <Routes>
      <Route path='/overview' element={<Overview></Overview>}/>
      <Route path='/about' element={<About></About>}/>
      <Route path='/analytics' element={<Analytics></Analytics>}/>
      <Route path='/overview/users' element={<Users></Users>}/>
      <Route path='/overview/revenue' element={<Revenue></Revenue>}/>
      <Route path='/install' element={<Stag0></Stag0>}/>
      <Route path='/s0' element={<Stag0 cmd={setCmd} clr={labelColor} t={time}></Stag0>}/>
      <Route path='/s1' element={<Stag1 cmd={setCmd} clr={labelColor} t={time}></Stag1>}/>
      <Route path='/s2' element={<Stag2 cmd={setCmd} clr={labelColor} t={time}></Stag2>}/>
      <Route path='/s3' element={<Stag3 cmd={setCmd} clr={labelColor} t={time}></Stag3>}/>
      <Route path='/s4' element={<Stag4 cmd={setCmd} clr={labelColor} t={time}></Stag4>}/>
      
    </Routes>
    
    
    {/* <Footer data={"hello"}></Footer> */}
    <div>
    {dispterm &&(term ?<Terminal c={cmd} sclr={setLabelColor} ></Terminal>:<Terminal1 c={cmd} sclr={setLabelColor} st={setTime}></Terminal1>)}
    </div>
    </div>
    </div>
    </BrowserRouter>
    </div>
    
    </>
    
  );
}

export default App;
