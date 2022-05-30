import './App.css';

import React from 'react'
import {io} from 'socket.io-client'
import Ingame from '../Ingame/Ingame';
import Pregame from '../Pregame/Pregame';

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
            <Ingame/>
        </div>
    )
}

export default App;
