import './App.css';
import React from 'react'
import Room from '../pages/Room';
import Startpage from '../pages/startpage';
import Lobby from '../pages/Lobby';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {Link, BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
  <div className='App'>
    <Header/>
    <Router>
      <Routes>
        <Route path ="/" element={<Startpage/>}/>
        <Route path ="/Room" element={<Room/>}/>
        <Route path="/Lobby" element={<Lobby/>}/>
        <Route path ="*" element={<Startpage/>}/>
      </Routes>
    </Router>
    <Footer/>
  </div>
  
  );
}

export default App;
