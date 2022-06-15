import { useEffect, useState } from 'react';
import LeaderboardElement from '../LeaderboardElement/LeaderboardElement';
import './Leaderboard.css';

function Leaderboard(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/leaderboard/all')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }, []);

    return(
        <div className='Leaderboard'>
            {data.map((args, i) => {
                return(
                    <div key={args._id} className='LeaderboardItem'>
                        <LeaderboardElement number={i + 1} score={args.points} player={args.name} />
                    </div>
                );
            })}
        </div>
    );    
}


export default Leaderboard;