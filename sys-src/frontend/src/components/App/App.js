import './App.css';
import React from 'react'
import Room from '../pages/Room';
import Startpage from '../pages/startpage';
import Lobby from '../pages/Lobby';
import Ladder from '../pages/Ladder';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {Link, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {SocketContext, socket} from '../../context/socket';

function App() {
  return (
  <div className='App'>
    <SocketContext.Provider value={socket}>
      <Router>
        <Header/>
        <Routes>
          <Route path ="/" element={<Startpage/>}/>
          <Route path ="/Room" element={<Room/>}/>
          <Route path="/Lobby" element={<Lobby/>}/>
          <Route path="/RankedLadder" element={<Ladder/>}/>
          <Route path ="*" element={<Startpage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </SocketContext.Provider>
  </div>
  
  );
}

export default App;
