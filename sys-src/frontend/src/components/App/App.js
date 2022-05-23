import './App.css';

import React from 'react'
import {io} from 'socket.io-client'
import GameBoard from '../GameBoard/GameBoard';
import ScoreBoard from '../ScoreBoard/ScoreBoard';

const App= ()=> {
    const [time, setTime] = React.useState('fetching')  
    React.useEffect(()=>{
        const socket = io('http://localhost:8080')    
        socket.on('connect', ()=>console.log(socket.id))
        socket.on('connect_error', ()=>{
            setTimeout(()=>socket.connect(),5000)
        })   
        socket.on('time', (data)=>setTime(data))
        socket.on('disconnect',()=>setTime('server disconnected'))
 
  },[]) 
  return (
      <div className="App">
            <div style={ { height: '20%'} }>
                <h1>Scradles</h1>
            </div>
            <table style={ { width: '100%'} }>
                <tr>
                    <td style={ { width: '40%', backgroundColor: 'lightgray'} }>
                        <GameBoard value="Schere"/>
                    </td>
                    <td style={ { width: '20%'} }>
                        <ScoreBoard score1="win" score2="loss"/>
                    </td>
                    <td style={ { width: '40%', backgroundColor: 'lightgray'} }>
                        <GameBoard value="Stein"/>
                    </td>
                </tr>
            </table>
      </div>
  )
}

export default App;
