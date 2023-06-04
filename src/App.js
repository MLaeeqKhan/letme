// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import HireDev from './components/HireDev';
import FileConv from './components/FileConv';
import YourQ from './components/YourQ';
import Profile from './components/Profile';
import CreateProfile from './components/CreateProfile';
import ThreadList from './components/ThreadList';
import Thread from './components/Thread';

function App() {
  return (
   < >
      <Router>
    <div>
    <NavBar/>

<Routes>
      <Route exact path="/" element={<Home/>}/>
      
      <Route exact path="/About" element={<About />}/>
      

      <Route exact path="/contact" element={<Contact />}/>
    
      <Route exact path="/Login" element={<Login />}/>

      <Route exact path="/signup" element={<Signup />}/>
      <Route exact path='/HireDev' element={<HireDev/>}/>
      <Route exact path="/FileConv" element={<FileConv/>}/>
      <Route exact path="/YourQ" element={<YourQ/>}/>
      <Route exact path="/CreateProfile" element={<CreateProfile/>}/>
      <Route exact path="/ThreadList" element={<ThreadList/>}/>
      <Route exact path="/ThreadList/:catID" element={<ThreadList/>}/>
      <Route exact path="/Thread/:threadID" element={<Thread/>}/>
      
      <Route exact path="/Profile" element={<Profile/>}/>
      {/* <Route element={<ErrorPage />}/> */}
      
      </Routes>
      
    </div>
    </Router>
    
    </>
  );
}

export default App;
